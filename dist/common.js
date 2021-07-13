import { Div, NamedDiv } from 'stce';
export * from 'stce';
export class Checkbox extends NamedDiv {
    constructor(name, otherClasses = []) {
        super(name, 'checkbox', otherClasses);
        this.element.classList.add('icomoon');
    }
}
export class Button extends NamedDiv {
    constructor(name, otherClasses = []) {
        super(name, 'button', otherClasses);
        this.element.classList.add('icomoon');
    }
}
export class FormLine extends NamedDiv {
    constructor(name, otherClasses = []) {
        super(name, 'form-line', otherClasses);
    }
}
export class Form extends NamedDiv {
    constructor(name, otherClasses = []) {
        super(name, 'form', otherClasses);
    }
}
export class NumberBar extends NamedDiv {
    constructor(name, min, value, max, log = false, fractionDigits = 1, otherClasses = []) {
        super(name, 'number bar', otherClasses);
        this.min = min;
        this.value = value;
        this.max = max;
        this.log = log;
        this.fractionDigits = fractionDigits;
        this.valEle = new Div(['value']);
        this.track = new Div(['track']);
        this.bar = new Div(['bar']);
        this.activePart = new Div(['active']);
        this.inputListeners = [];
        if (log) {
            this.min = Math.log(min);
            this.value = Math.log(value);
            this.max = Math.log(max);
        }
        this
            .append(this.track.append(this.bar.append(this.activePart)))
            .append(this.valEle);
        this.track.addEventListener('click', async (e) => {
            const rate = e.offsetX / this.track.element.offsetWidth;
            this.value = this.min + (this.max - this.min) * rate;
            this.renderBar();
            const val = this.log ? Math.exp(this.value) : this.value;
            for (let i = 0; i < this.inputListeners.length; i++) {
                await this.inputListeners[i](val);
            }
        });
        this.renderBar();
    }
    setValue(value) {
        if (this.log) {
            value = Math.log(value);
        }
        if (value < this.min || !isFinite(value)) {
            value = this.min;
        }
        else if (value > this.max) {
            value = this.max;
        }
        this.value = value;
        this.renderBar();
    }
    renderBar() {
        this.activePart.style.width = this.getRate() * 100 + '%';
        this.valEle.setText((this.log ? Math.exp(this.value) : this.value).toFixed(this.fractionDigits));
    }
    getRate() {
        if (this.max <= this.min) {
            return 0;
        }
        return (this.value - this.min) / (this.max - this.min);
    }
}
export class TimeBar extends NumberBar {
    constructor(name, duration = 0, otherClasses = []) {
        super(name, 0, 0, duration, false, 1, otherClasses);
    }
    renderBar() {
        this.activePart.style.width = this.getRate() * 100 + '%';
        this.valEle.setText(TimeBar.prettyTime(this.value) + '/' + TimeBar.prettyTime(this.max));
    }
    setDuration(duration) {
        if (duration < this.value || !isFinite(duration)) {
            duration = this.value;
        }
        this.max = duration;
        this.renderBar();
    }
    static prettyTime(time) {
        const m = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
        const s = Math.floor(time % 60).toString().padStart(2, '0');
        const string = m + ':' + s;
        if (time <= 3600) {
            return string;
        }
        return Math.floor(time / 3600).toString() + ':' + string;
    }
}

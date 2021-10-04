import { Div, NamedDiv } from 'stce';
export * from 'stce';
export class Checkbox extends NamedDiv {
    constructor(name, otherClasses = []) {
        super(name, 'checkbox', ['show icon'].concat(otherClasses));
    }
}
export class Button extends NamedDiv {
    constructor(name, otherClasses = []) {
        super(name, 'button', ['show icon'].concat(otherClasses));
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
    constructor(name, min, value, max, log = false, fractionDigits = 3, isStatic = false, otherClasses = []) {
        super(name, 'number bar', otherClasses);
        this.min = min;
        this.value = value;
        this.max = max;
        this.log = log;
        this.fractionDigits = fractionDigits;
        this.isStatic = isStatic;
        this.valEle = new Div(['value']);
        this.track = new Div(['track']);
        this.bar = new Div(['bar']);
        this.inputListeners = [];
        if (log) {
            this.min = Math.log(min);
            this.value = Math.log(value);
            this.max = Math.log(max);
        }
        this
            .append(this.track.append(this.bar))
            .append(this.valEle);
        this.track.addEventListener('click', async (e) => {
            if (isStatic) {
                return;
            }
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
    setMin(min) {
        if (this.log) {
            min = Math.log(min);
        }
        if (min > this.value || !isFinite(min)) {
            min = this.value;
        }
        this.min = min;
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
    setMax(max) {
        if (this.log) {
            max = Math.log(max);
        }
        if (max < this.value || !isFinite(max)) {
            max = this.value;
        }
        this.max = max;
        this.renderBar();
    }
    renderBar() {
        const p = this.getRate() * 100 + '%';
        this.bar.style.background = `linear-gradient(to right, var(--color-variable) ${p}, var(--color-area) ${p})`;
        this.renderValue();
    }
    renderValue() {
        const p = Math.pow(10, this.fractionDigits);
        this.valEle.setText((Math.round((this.log ? Math.exp(this.value) : this.value) * p) / p).toString());
    }
    getRate() {
        if (this.max <= this.min) {
            return 0;
        }
        return (this.value - this.min) / (this.max - this.min);
    }
    getValue() {
        if (this.log) {
            return Math.exp(this.value);
        }
        return this.value;
    }
}
export class DataBar extends NumberBar {
    constructor(name, used, quota, isStatic = false, otherClasses = []) {
        super(name, 0, used, quota, false, 0, isStatic, otherClasses);
    }
    renderValue() {
        this.valEle.setText(DataBar.prettyData(this.value) + ' / ' + DataBar.prettyData(this.max));
    }
    static prettyData(number) {
        if (number < 1024) {
            return number + ' B';
        }
        if (number < 1048576) {
            return Math.round(number / 1.024) / 1000 + ' KiB';
        }
        if (number < 1073741824) {
            return Math.round(number / 1048.576) / 1000 + ' MiB';
        }
        return Math.round(number / 1073741.824) / 1000 + ' GiB';
    }
}
export class TimeBar extends NumberBar {
    constructor(name, duration = 0, isStatic = false, otherClasses = []) {
        super(name, 0, 0, duration, false, 0, isStatic, otherClasses);
    }
    renderValue() {
        this.valEle.setText(TimeBar.prettyTime(this.value) + '/' + TimeBar.prettyTime(this.max));
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

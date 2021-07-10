class CommonEle {
    constructor(classes = [], tag) {
        this.element = document.createElement(tag);
        this.classList = this.element.classList;
        this.style = this.element.style;
        this.dataset = this.element.dataset;
        for (let i = 0; i < classes.length; i++) {
            const className = classes[i].replace(/\s/g, '-');
            if (className === '')
                continue;
            try {
                this.element.classList.add(className);
            }
            catch (err) {
                console.log(err);
            }
        }
    }
    append(...nodes) {
        this.element.append(...nodes.map(val => {
            if (val instanceof CommonEle)
                return val.element;
            return val;
        }));
        return this;
    }
    prepend(...nodes) {
        this.element.prepend(...nodes.map(val => {
            if (val instanceof CommonEle)
                return val.element;
            return val;
        }));
        return this;
    }
    after(...nodes) {
        this.element.after(...nodes.map(val => {
            if (val instanceof CommonEle)
                return val.element;
            return val;
        }));
        return this;
    }
    before(...nodes) {
        this.element.before(...nodes.map(val => {
            if (val instanceof CommonEle)
                return val.element;
            return val;
        }));
        return this;
    }
    setText(string) {
        this.element.textContent = string;
        return this;
    }
    setHTML(string) {
        this.element.innerHTML = string;
        return this;
    }
    scrollBy(options) {
        this.element.scrollBy(options);
        return this;
    }
    scrollIntoView(arg) {
        this.element.scrollIntoView(arg);
        return this;
    }
    getBoundingClientRect() {
        return this.element.getBoundingClientRect();
    }
    getClientRects() {
        return this.element.getClientRects();
    }
}
export class Div extends CommonEle {
    constructor(classes = []) {
        super(classes, 'div');
    }
    addEventListener(type, listener, options) {
        this.element.addEventListener(type, listener, options);
        return this;
    }
}
export class Span extends CommonEle {
    constructor(classes = []) {
        super(classes, 'span');
    }
    addEventListener(type, listener, options) {
        this.element.addEventListener(type, listener, options);
        return this;
    }
}
export class NamedDiv extends Div {
    constructor(name, type, otherClasses = []) {
        super([name, type].concat(otherClasses));
        this.name = name;
        this.type = type;
        try {
            this.element.dataset.name = name;
        }
        catch (err) {
            console.log(err);
        }
    }
}
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
export class Anchor extends CommonEle {
    constructor(href, classes = [], target = '_blank') {
        super(classes, 'a');
        try {
            this.element.href = href;
            this.element.target = target;
        }
        catch (err) {
            console.log(err);
        }
    }
    addEventListener(type, listener, options) {
        this.element.addEventListener(type, listener, options);
        return this;
    }
}
export class NamedAnchor extends Anchor {
    constructor(href, name, type, otherClasses = [], target = '_blank') {
        super(href, [name, type].concat(otherClasses), target);
        this.name = name;
        this.type = type;
        try {
            this.element.dataset.name = name;
        }
        catch (err) {
            console.log(err);
        }
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
            await this.handleInput(this.log ? Math.exp(this.value) : this.value);
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
    async handleInput(value) {
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

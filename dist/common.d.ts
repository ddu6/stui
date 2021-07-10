declare class CommonEle<K extends keyof HTMLElementTagNameMap> {
    readonly element: HTMLElementTagNameMap[K];
    readonly classList: DOMTokenList;
    readonly style: CSSStyleDeclaration;
    readonly dataset: DOMStringMap;
    constructor(classes: string[] | undefined, tag: K);
    append(...nodes: (string | Node | CommonEle<keyof HTMLElementTagNameMap>)[]): this;
    prepend(...nodes: (string | Node | CommonEle<keyof HTMLElementTagNameMap>)[]): this;
    after(...nodes: (string | Node | CommonEle<keyof HTMLElementTagNameMap>)[]): this;
    before(...nodes: (string | Node | CommonEle<keyof HTMLElementTagNameMap>)[]): this;
    setText(string: string): this;
    setHTML(string: string): this;
    scrollBy(options: ScrollToOptions): this;
    scrollIntoView(arg?: boolean | ScrollIntoViewOptions): this;
    getBoundingClientRect(): DOMRect;
    getClientRects(): DOMRectList;
}
export declare class Div extends CommonEle<'div'> {
    constructor(classes?: string[]);
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): this;
}
export declare class Span extends CommonEle<'span'> {
    constructor(classes?: string[]);
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): this;
}
export declare class NamedDiv extends Div {
    readonly name: string;
    readonly type: string;
    constructor(name: string, type: string, otherClasses?: string[]);
}
export declare class Checkbox extends NamedDiv {
    constructor(name: string, otherClasses?: string[]);
}
export declare class Button extends NamedDiv {
    constructor(name: string, otherClasses?: string[]);
}
export declare class FormLine extends NamedDiv {
    constructor(name: string, otherClasses?: string[]);
}
export declare class Form extends NamedDiv {
    constructor(name: string, otherClasses?: string[]);
}
export declare class Anchor extends CommonEle<'a'> {
    constructor(href: string, classes?: string[], target?: string);
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): this;
}
export declare class NamedAnchor extends Anchor {
    readonly name: string;
    readonly type: string;
    constructor(href: string, name: string, type: string, otherClasses?: string[], target?: string);
}
export declare class NumberBar extends NamedDiv {
    protected min: number;
    protected value: number;
    protected max: number;
    protected log: boolean;
    protected fractionDigits: number;
    readonly valEle: Div;
    readonly track: Div;
    readonly bar: Div;
    readonly activePart: Div;
    constructor(name: string, min: number, value: number, max: number, log?: boolean, fractionDigits?: number, otherClasses?: string[]);
    setValue(value: number): void;
    protected renderBar(): void;
    getRate(): number;
    handleInput(value: number): Promise<void>;
}
export declare class TimeBar extends NumberBar {
    constructor(name: string, duration?: number, otherClasses?: string[]);
    protected renderBar(): void;
    setDuration(duration: number): void;
    static prettyTime(time: number): string;
}
export {};

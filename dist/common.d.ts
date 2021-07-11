import { Div, NamedDiv } from 'stce';
export * from 'stce';
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

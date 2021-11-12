import { Div, NamedDiv, NamedButton } from 'stce';
export * from 'stce';
export declare class Checkbox extends NamedDiv {
    constructor(name: string, otherClasses?: string[]);
}
export declare class Button extends NamedButton {
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
    isStatic: boolean;
    readonly valEle: Div;
    readonly track: Div;
    readonly bar: Div;
    inputListeners: ((value: number) => Promise<void>)[];
    constructor(name: string, min: number, value: number, max: number, log?: boolean, fractionDigits?: number, isStatic?: boolean, otherClasses?: string[]);
    setMin(min: number): void;
    listen(): Promise<void>;
    inputValue(value: number): Promise<void>;
    setValue(value: number): void;
    setMax(max: number): void;
    protected renderBar(): void;
    protected renderValue(): void;
    getRate(): number;
    getValue(): number;
}
export declare class DataBar extends NumberBar {
    constructor(name: string, used?: number, quota?: number, isStatic?: boolean, otherClasses?: string[]);
    protected renderValue(): void;
    static prettyData(number: number): string;
}
export declare class TimeBar extends NumberBar {
    constructor(name: string, passed?: number, duration?: number, isStatic?: boolean, otherClasses?: string[]);
    protected renderValue(): void;
    static prettyTime(time: number): string;
}

import { Button, Div } from "./common.js";
export declare class LRStruct extends Div {
    readonly side: Div;
    readonly button: Button;
    readonly sideContent: Div;
    readonly main: Div;
    readonly sash: Div;
    readonly cover: Div;
    sashing: boolean;
    sashX: number;
    sideWidth: number;
    sashListeners: (() => Promise<void>)[];
    constructor();
}

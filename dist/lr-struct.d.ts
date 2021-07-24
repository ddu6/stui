import { Button, Div } from "./common";
import { Shell } from "./shell";
export declare class LRStruct extends Shell {
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
    constructor(title?: string, icon?: string, customCSS?: string, otherClasses?: string[]);
}

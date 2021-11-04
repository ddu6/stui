import { Button, Div } from "./common";
import { Shell } from "./shell";
import { CommonEle } from "stce";
export declare class LRStruct extends Shell {
    readonly side: CommonEle<"aside">;
    readonly button: Button;
    readonly sideContent: Div;
    readonly main: CommonEle<"main">;
    readonly sash: Div;
    readonly cover: Div;
    sashing: boolean;
    sashX: number;
    sideWidth: number;
    sashListeners: (() => Promise<void>)[];
    constructor(title?: string, icon?: string, customCSS?: string, otherClasses?: string[]);
}

export interface LRStructOptions {
    window?: Window;
}
export declare function createLRStruct(options?: LRStructOptions): {
    element: HTMLDivElement;
    main: HTMLElement;
    sideContent: HTMLDivElement;
    sashListeners: (() => Promise<void>)[];
};

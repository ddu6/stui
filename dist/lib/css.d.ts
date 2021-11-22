export declare const root = "/* html */\nhtml {\n    --color-text: black;\n    --color-light: #6a737d;\n    --color-string: darkorange;\n    --color-number: #098658;\n    --color-keyword: #AF00DB;\n    --color-function: #ecad00;\n    --color-variable: deepskyblue;\n    --color-modifier: dodgerblue;\n    --color-class: #267f99;\n    --color-warn: red;\n    --color-comment: limegreen;\n    --color-border: #e1e4e8;\n    --color-bg: white;\n    --color-area: whitesmoke;\n    --color-pre: #f6f8fa;\n    --color-slice: rgba(211, 211, 211, .5);\n    --color-selection: rgba(135, 206, 235, .5);\n    --color-span: rgba(27, 31, 35, .05);\n    --length-width: calc(210mm - .8in);\n    --length-width-side: 336px;\n    --length-width-bar: 15px;\n    --length-tab: 2em;\n    --length-padding: 1em;\n    --length-gap: .5em;\n    --length-space: .25em;\n    --length-font-title: 1.8em;\n    --length-font-heading: 1.3em;\n    --length-font-log: .8em;\n    --number-ratio-line: 1.5;\n    --font: ui-sans-serif, \"Segoe UI\", Helvetica, Arial, \"Microsoft YaHei\", \"PingFang SC\", \"Hiragino Sans GB\", \"WenQuanYi Micro Hei\", \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif;\n    --font-mono: ui-monospace, \"SF Mono\", Consolas, monospace, \"Segoe UI\", Helvetica, Arial, \"Microsoft YaHei\", \"PingFang SC\", \"Hiragino Sans GB\", \"WenQuanYi Micro Hei\", \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    line-height: var(--number-ratio-line);\n    font-family: var(--font);\n    color: var(--color-text);\n    background-color: var(--color-bg) !important;\n    font-size: 16px;\n}\n\nhtml[data-font-size=medium] {\n    font-size: 17px;\n}\n\nhtml[data-font-size=large] {\n    font-size: 18px;\n}\n\nhtml[data-color-scheme=dark] {\n    --color-text: #cccccc;\n    --color-light: #8f8f8f;\n    --color-string: #df9e61;\n    --color-number: #B5CEA8;\n    --color-keyword: #cc80c6;\n    --color-function: #DCDCAA;\n    --color-variable: #6ec0ec;\n    --color-modifier: #3074ac;\n    --color-class: #4EC9B0;\n    --color-warn: #F44747;\n    --color-comment: #6A9955;\n    --color-border: #2e3133;\n    --color-bg: #131313;\n    --color-area: #161616;\n    --color-pre: #191b1d;\n    --color-slice: rgba(88, 88, 88, .5);\n    --color-selection: rgba(95, 144, 163, .5);\n    --color-span: rgba(58, 61, 65, .5);\n}\n\nhtml[data-color-scheme=dark] .dark{\n    filter: brightness(.5);\n}\n\nhtml[data-color-scheme=dark] .invert{\n    filter: invert(.9147982) brightness(.8745098);\n}\n\n@media (prefers-color-scheme: dark) {\n    html:not([data-color-scheme=light]) {\n        --color-text: #cccccc;\n        --color-light: #8f8f8f;\n        --color-string: #df9e61;\n        --color-number: #B5CEA8;\n        --color-keyword: #cc80c6;\n        --color-function: #DCDCAA;\n        --color-variable: #6ec0ec;\n        --color-modifier: #3074ac;\n        --color-class: #4EC9B0;\n        --color-warn: #F44747;\n        --color-comment: #6A9955;\n        --color-border: #2e3133;\n        --color-bg: #131313;\n        --color-area: #161616;\n        --color-pre: #191b1d;\n        --color-slice: rgba(88, 88, 88, .5);\n        --color-selection: rgba(95, 144, 163, .5);\n        --color-span: rgba(58, 61, 65, .5);\n    }\n\n    html:not([data-color-scheme=light]) .dark{\n        filter: brightness(.5);\n    }\n\n    html:not([data-color-scheme=light]) .invert{\n        filter: invert(.9147982) brightness(.8745098);\n    }\n}\n\n@media screen and (max-width:600px) {\n    html {\n        font-size: 15px;\n    }\n\n    html[data-font-size=medium] {\n        font-size: 16px;\n    }\n\n    html[data-font-size=large] {\n        font-size: 17px;\n    }\n}\n\n@media screen and (max-width:500px) {\n    html {\n        font-size: 14px;\n    }\n\n    html[data-font-size=medium] {\n        font-size: 15px;\n    }\n\n    html[data-font-size=large] {\n        font-size: 16px;\n    }\n}\n\n@media screen and (max-width:400px) {\n    html {\n        font-size: 13px;\n    }\n\n    html[data-font-size=medium] {\n        font-size: 14px;\n    }\n\n    html[data-font-size=large] {\n        font-size: 15px;\n    }\n}\n\n/* lrStruct */\nbody>.lr-struct {\n    display: flex;\n    min-height: 100vh;\n    position: relative;\n}\n\nbody>.lr-struct>main {\n    box-sizing: border-box;\n    flex-grow: 1;\n    margin-left: var(--length-width-side);\n    width: 100%;\n}\n\nbody>.lr-struct>button {\n    display: none;\n    left: 0;\n    position: fixed;\n    top: 0;\n}\n\nbody>.lr-struct>aside {\n    background-color: var(--color-pre);\n    border-right: 1px solid var(--color-border);\n    box-sizing: border-box;\n    height: 100vh;\n    left: 0;\n    max-width: 90%;\n    position: fixed;\n    top: 0;\n    width: var(--length-width-side);\n}\n\n@media screen and (max-width:960px) {\n    body>.lr-struct>aside:not(.active) {\n        display: none;\n    }\n\n    body>.lr-struct>button {\n        display: block;\n    }\n\n    body>.lr-struct>main {\n        margin-left: 0 !important;\n    }\n}\n\nbody>.lr-struct>aside>.cover {\n    display: none;\n}\n\nbody>.lr-struct.sashing>aside>.cover {\n    cursor: ew-resize;\n    display: block;\n    height: 100%;\n    left: 0;\n    position: fixed;\n    top: 0;\n    width: 100vw;\n}\n\nbody>.lr-struct>aside>.sash {\n    cursor: ew-resize;\n    height: 100%;\n    position: absolute;\n    right: -5px;\n    top: 0;\n    width: 10px;\n}\n\nbody>.lr-struct.sashing>aside>.sash {\n    background-color: var(--color-slice);\n}\n\nbody>.lr-struct>aside>.content.vanished {\n    display: none;\n}\n\n@media print {\n    body>.lr-struct {\n        min-height: 0;\n    }\n\n    body>.lr-struct>main {\n        margin-left: 0 !important;\n    }\n\n    body>.lr-struct>aside,\n    body>.lr-struct>button {\n        display: none;\n    }\n}\n\n/* print */\n@page {\n    -webkit-print-color-adjust: exact;\n    color-adjust: exact;\n    margin: .4in;\n    size: A4 portrait;\n}";
export declare const override = "/* scroll */\n::-webkit-scrollbar {\n    background-color: transparent;\n}\n\n::-webkit-scrollbar-corner {\n    background-color: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: var(--color-slice);\n}\n\n/* a */\na,\na:hover {\n    color: inherit;\n    text-decoration: none;\n}\n\na[href]:not([href^=\"#\"]) {\n    color: var(--color-modifier);\n}\n\na[href]:hover {\n    text-decoration: underline;\n}\n\n/* blockquote */\nblockquote {\n    border: 0px solid var(--color-border);\n    border-left-width: 3px;\n    color: var(--color-light);\n    margin: 0px;\n    padding: 0px;\n    padding-left: var(--length-padding);\n}\n\n/* button */\nbutton,\ninput[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    background-color: var(--color-slice);\n    border: none;\n    border-radius: var(--length-space);\n    color: var(--color-text);\n    cursor: pointer;\n    font: inherit;\n    outline: none;\n    padding: var(--length-space) var(--length-padding);\n    text-align: center;\n}\n\nbutton:hover,\ninput[type=\"button\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"submit\"]:hover,\nbutton.pushing,\ninput[type=\"button\"].pushing,\ninput[type=\"reset\"].pushing,\ninput[type=\"submit\"].pushing {\n    background-color: var(--color-selection);\n}\n\n/* code */\ncode,\npre,\nsamp {\n    font-family: var(--font-mono);\n    tab-size: 4;\n    white-space: pre-wrap;\n}\n\ncode {\n    background-color: var(--color-span);\n    border-radius: var(--length-space);\n    font-size: var(--length-font-log);\n    padding: 0 var(--length-space);\n}\n\npre code {\n    background-color: transparent;\n    border-radius: 0;\n    font: inherit;\n    padding: 0;\n}\n\n/* details */\nsummary {\n    outline: none;\n}\n\n/* fieldset */\nfieldset {\n    border: 1px solid var(--color-border);\n    margin: 0;\n    padding: var(--length-padding);\n}\n\nlegend {\n    padding: var(--length-space);\n}\n\n/* figure */\nfigure {\n    margin: var(--length-space) 0;\n    text-align: center;\n}\n\nfigcaption {\n    margin: var(--length-space) 0;\n}\n\n/* h */\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font: inherit;\n    margin: var(--length-gap) 0;\n}\n\nh1 {\n    border-bottom: 1px solid var(--color-border);\n    font-size: calc((var(--length-font-title) + var(--length-font-heading)) / 2);\n    padding-bottom: var(--length-space);\n}\n\nh2 {\n    font-size: calc((var(--length-font-title) + var(--length-font-heading)) / 2);\n}\n\nh3 {\n    font-size: var(--length-font-heading);\n}\n\nh4 {\n    font-size: calc((1em + var(--length-font-heading)) / 2);\n}\n\n/* hr */\nhr {\n    background-color: var(--color-border);\n    border: 0;\n    height: 3px;\n    margin: var(--length-gap) 0;\n}\n\nhr::after {\n    clear: both;\n    content: \"\";\n    display: flow-root;\n}\n\n/* img */\nimg {\n    display: block;\n    max-width: 100%;\n}\n\n/* input */\ninput,\nselect,\ntextarea {\n    background-color: transparent;\n    border: 1px solid var(--color-border);\n    border-radius: var(--length-space);\n    box-sizing: content-box;\n    color: var(--color-text);\n    font: inherit;\n    margin: 0;\n    outline: none;\n    padding: 0 var(--length-space);\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus {\n    border-color: var(--color-variable);\n}\n\nselect {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n\ninput[type=number],\ninput[type=date] {\n    -webkit-appearance: textfield;\n    -moz-appearance: textfield;\n    appearance: textfield;\n}\n\ninput[type=date] {\n    height: calc(var(--number-ratio-line) * 1em);\n    vertical-align: middle;\n    width: auto;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button,\ninput[type=date]::-webkit-calendar-picker-indicator,\ninput[type=search]::-webkit-clear-button { \n    opacity: 0;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n    display: none;\n}\n\noption {\n    background-color: var(--color-bg);\n}\n\ntextarea {\n    height: calc(var(--number-ratio-line) * 5em);\n    resize: none;\n}\n\n/* kbd */\nkbd {\n    border: 1px solid var(--color-border);\n    border-radius: var(--length-space);\n    display: inline-block;\n    font-family: var(--font-mono);\n    font-size: var(--length-font-log);\n    line-height: 1;\n    padding: var(--length-space);\n}\n\n/* l */\nol,\nul {\n    padding-left: var(--length-tab);\n}\n\nli {\n    margin: var(--length-gap) 0;\n}\n\ndd {\n    margin: var(--length-gap) 0;\n    margin-left: var(--length-tab);\n}\n\ndt {\n    margin: var(--length-gap) 0;\n}\n\n/* p */\np {\n    margin: var(--length-gap) 0;\n}\n\n/* pre */\npre {\n    background-color: var(--color-pre);\n    border-radius: var(--length-padding);\n    font-size: var(--length-font-log);\n    margin: var(--length-gap) 0;\n    padding: var(--length-padding);\n}\n\n/* table */\ntable {\n    border-collapse: collapse;\n    color: inherit;\n    font: inherit;\n}\n\ntd,\nth {\n    border: 1px solid var(--color-border);\n    padding: var(--length-gap);\n}\n\nth {\n    font-weight: normal;\n    text-align: center;\n}\n\ntr:nth-child(even) {\n    background-color: var(--color-pre);\n}\n\ntable>caption {\n    margin: var(--length-space) 0;\n}\n\n/* iframe */\niframe {\n    border: 0;\n}";
export declare const fresh = "/* icon */\n.show-icon:not(:empty)::before {\n    padding-right: var(--length-space);\n}\n\n/* checkbox */\n.checkbox {\n    border-radius: var(--length-space);\n    color: var(--color-light);\n    cursor: pointer;\n    line-height: 1;\n    min-width: 1em;\n    padding: var(--length-space);\n    text-align: center;\n}\n\n.checkbox.left {\n    text-align: left;\n}\n\n.checkbox.checked {\n    color: var(--color-variable);\n}\n\n.checkbox:hover,\n.checkbox.checking {\n    background-color: var(--color-slice);\n}\n\nbutton.show-icon.show-name::before,\n.checkbox.show-icon.show-name::before {\n    padding-right: var(--length-space);\n}\n\nbutton[data-name].show-name::after,\n.checkbox[data-name].show-name::after {\n    content: attr(data-name);\n    text-transform: capitalize;\n}\n\n/* form */\n.form>:not(:first-child) {\n    margin-top: var(--length-gap);\n}\n\n.form,\n.form-line {\n    display: flex;\n    flex-direction: column;\n}\n\n.form>*,\n.form-line>* {\n    flex-shrink: 0;\n}\n\n.form-line[data-name]::before {\n    display: block;\n    color: var(--color-light);\n    content: attr(data-name);\n    font-size: var(--length-font-log);\n    text-transform: capitalize;\n}\n\n/* number bar */\n.number-bar {\n    align-items: center;\n    display: flex;\n    gap: var(--length-space);\n}\n\n.number-bar>.track {\n    flex-grow: 1;\n}\n\n.number-bar>.track>.bar {\n    border-radius: 1px;\n    height: 2px;\n    margin: .5em 0;\n}\n\n.number-bar>.value {\n    color: var(--color-light);\n    font-size: var(--length-font-log);\n}\n\n.number-bar[data-name]:before {\n    color: var(--color-light);\n    content: attr(data-name);\n    font-size: var(--length-font-log);\n    text-transform: capitalize;\n}\n\n/* hide */\n.collapse {\n    visibility: collapse;\n}\n\n.hide {\n    display: none !important;\n}\n\n.invisible {\n    visibility: hidden;\n}\n\n.translucent {\n    opacity: .5;\n}\n\n.transparent {\n    opacity: 0;\n}\n\n/* warn */\n.warn {\n    color: var(--color-warn);\n}";
export declare const all: string;

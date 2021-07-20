export const root=`/* html */
html {
    --color-text: black;
    --color-light: #6a737d;
    --color-string: darkorange;
    --color-number: #098658;
    --color-keyword: #AF00DB;
    --color-function: #ecad00;
    --color-variable: deepskyblue;
    --color-modifier: dodgerblue;
    --color-class: #267f99;
    --color-warn: red;
    --color-comment: limegreen;
    --color-border: #e1e4e8;
    --color-bg: white;
    --color-area: whitesmoke;
    --color-pre: #f6f8fa;
    --color-slice: rgba(211, 211, 211, 0.5);
    --color-selection: rgba(135, 206, 235, 0.5);
    --color-span: rgba(27, 31, 35, .05);
    --font: katex-extract, st-sans, st-sans-extend, "Segoe UI", "Microsoft YaHei", "Hiragino Sans GB", "STHeiti Light", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --font-mono: roboto-mono-regular, "Segoe UI", "Microsoft YaHei", "Hiragino Sans GB", "STHeiti Light", monospace, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --font-icomoon: icomoon, katex-extract, st-sans, st-sans-extend, "Segoe UI", "Microsoft YaHei", "Hiragino Sans GB", "STHeiti Light", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --length-width: calc(210mm - .8in);
    ;
    --length-width-side: 336px;
    --length-width-bar: 15px;
    --length-tab: 2em;
    --length-padding: 1em;
    --length-gap: .5em;
    --length-padding-span: .3em;
    --length-space: .25em;
    --length-padding-circle: .2em;
    --length-font-title: 1.8em;
    --length-font-heading: 1.3em;
    --length-font-span: .85em;
    --length-font-log: .8em;
    --length-font-circle: .7em;
    --number-ratio-line: 1.5;
    line-height: var(--number-ratio-line);
    font-family: var(--font);
    color: var(--color-text);
    background-color: var(--color-bg) !important;
    font-size: 16px;
}

html[data-font-size=medium] {
    font-size: 17px
}

html[data-font-size=large] {
    font-size: 18px
}

html[data-color-scheme=dark] {
    --color-text: #cccccc;
    --color-light: #8f8f8f;
    --color-string: #df9e61;
    --color-number: #B5CEA8;
    --color-keyword: #cc80c6;
    --color-function: #DCDCAA;
    --color-variable: #6ec0ec;
    --color-modifier: #3074ac;
    --color-class: #4EC9B0;
    --color-warn: #F44747;
    --color-comment: #6A9955;
    --color-border: #2e3133;
    --color-bg: #131313;
    --color-area: #161616;
    --color-pre: #191b1d;
    --color-slice: rgba(88, 88, 88, 0.5);
    --color-selection: rgba(95, 144, 163, 0.5);
    --color-span: rgba(58, 61, 65, 0.5);
}

html[data-color-scheme=dark] .dark{
    filter: brightness(.5);
}

html[data-color-scheme=dark] .invert{
    filter: invert(.9147982) brightness(.8745098);
}

@media (prefers-color-scheme: dark) {
    html:not([data-color-scheme=light]) {
        --color-text: #cccccc;
        --color-light: #8f8f8f;
        --color-string: #df9e61;
        --color-number: #B5CEA8;
        --color-keyword: #cc80c6;
        --color-function: #DCDCAA;
        --color-variable: #6ec0ec;
        --color-modifier: #3074ac;
        --color-class: #4EC9B0;
        --color-warn: #F44747;
        --color-comment: #6A9955;
        --color-border: #2e3133;
        --color-bg: #131313;
        --color-area: #161616;
        --color-pre: #191b1d;
        --color-slice: rgba(88, 88, 88, 0.5);
        --color-selection: rgba(95, 144, 163, 0.5);
        --color-span: rgba(58, 61, 65, 0.5);
    }

    html:not([data-color-scheme=light]) .dark{
        filter: brightness(.5);
    }

    html:not([data-color-scheme=light]) .invert{
        filter: invert(.9147982) brightness(.8745098);
    }
}

@media screen and (max-width:600px) {
    html {
        font-size: 15px
    }

    html[data-font-size=medium] {
        font-size: 16px
    }

    html[data-font-size=large] {
        font-size: 17px
    }
}

@media screen and (max-width:500px) {
    html {
        font-size: 14px
    }

    html[data-font-size=medium] {
        font-size: 15px
    }

    html[data-font-size=large] {
        font-size: 16px
    }
}

@media screen and (max-width:400px) {
    html {
        font-size: 13px
    }

    html[data-font-size=medium] {
        font-size: 14px
    }

    html[data-font-size=large] {
        font-size: 15px
    }
}

/* lrStruct */
body>.lr-struct {
    min-height: 100vh;
    position: relative;
    display: flex;
}

body>.lr-struct>.main {
    margin-left: var(--length-width-side);
    flex-grow: 1;
    box-sizing: border-box;
    width: 100%;
}

body>.lr-struct>.button {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
}

body>.lr-struct>.side {
    box-sizing: border-box;
    position: fixed;
    left: 0;
    top: 0;
    width: var(--length-width-side);
    max-width: 60%;
    height: 100vh;
    background-color: var(--color-pre);
    border-right: 1px solid var(--color-border);
}

@media screen and (max-width:960px) {
    body>.lr-struct>.side:not(.active) {
        display: none;
    }

    body>.lr-struct>.button {
        display: block;
    }

    body>.lr-struct>.main {
        margin-left: 0 !important;
    }
}

body>.lr-struct>.side>.cover {
    display: none;
}

body>.lr-struct.sashing>.side>.cover {
    display: block;
    position: fixed;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    cursor: ew-resize;
}

body>.lr-struct>.side>.sash {
    height: 100%;
    width: 10px;
    position: absolute;
    top: 0;
    right: -5px;
    cursor: ew-resize;
}

body>.lr-struct.sashing>.side>.sash {
    background-color: var(--color-slice);
}

body>.lr-struct>.side>.content {
    height: 100%;
    display: flex;
    flex-direction: column;
}

body>.lr-struct>.side>.content.vanished {
    display: none;
}

@media print {
    body>.lr-struct {
        min-height: 0;
    }

    body>.lr-struct>.main {
        margin-left: 0 !important;
    }

    body>.lr-struct>.side,
    body>.lr-struct>.button {
        display: none;
    }
}

/* print */
@page {
    color-adjust: exact;
    -webkit-print-color-adjust: exact;
    size: A4 portrait;
}`
export const override=`/* scroll */
::-webkit-scrollbar {
    background-color: transparent;
}

::-webkit-scrollbar-corner {
    background-color: transparent;
}

::-webkit-scrollbar-thumb {
    background-color: var(--color-slice);
}

/* a */
a,
a:hover {
    color: inherit;
    text-decoration: none;
}

a[href] {
    color: var(--color-modifier);
}

a[href]:hover {
    text-decoration: underline;
}

/* blockquote */
blockquote {
    padding: 0px;
    margin: 0px;
    border: 0px solid var(--color-border);
    border-left-width: 3px;
    padding-left: var(--length-padding);
    color: var(--color-light);
}

/* button */
button,
input[type="button"],
input[type="reset"],
input[type="submit"],
.button {
    font: inherit;
    color: var(--color-text);
    border-radius: var(--length-padding-span);
    padding: var(--length-space) var(--length-padding);
    background-color: var(--color-slice);
    border: none;
    outline: none;
    text-align: center;
    cursor: pointer;
    display: inline-block;
}

button:hover,
input[type="button"]:hover,
input[type="reset"]:hover,
input[type="submit"]:hover,
.button:hover,
button.pushing,
input[type="button"].pushing,
input[type="reset"].pushing,
input[type="submit"].pushing,
.button.pushing {
    background-color: var(--color-selection);
}

/* code */
code,
pre,
samp {
    white-space: pre-wrap;
    tab-size: 4;
    font-family: var(--font-mono);
}

code {
    font-size: var(--length-font-span);
    padding: 0 var(--length-padding-span);
    border-radius: var(--length-padding-span);
    background-color: var(--color-span);
}

pre code {
    padding: 0;
    border-radius: 0;
    background-color: transparent;
}

/* details */
summary {
    outline: none;
}

/* fieldset */
fieldset {
    margin: 0;
    padding: var(--length-padding);
    border: 1px solid var(--color-border);
}

legend {
    padding: var(--length-padding-span);
}

/* figure */
figure {
    text-align: center;
    margin: var(--length-space) 0;
}

figcaption {
    margin: var(--length-space) 0;
}

/* h */
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: var(--length-gap) 0;
    font: inherit;
    break-inside: avoid;
}

h1,
h2 {
    padding-bottom: var(--length-padding-circle);
    border-bottom: 1px solid var(--color-border);
}

h1 {
    font-size: var(--length-font-title);
}

h2 {
    font-size: calc((var(--length-font-title) + var(--length-font-heading)) / 2);
}

h3 {
    font-size: calc((var(--length-font-title) + var(--length-font-heading)) / 2);
}

h4 {
    font-size: var(--length-font-heading);
}

h5 {
    font-size: calc((1em + var(--length-font-heading)) / 2);
}

h6 {
    font-size: 1em;
}

/* hr */
hr {
    height: 3px;
    margin: var(--length-gap) 0;
    background-color: var(--color-border);
    border: 0;
}

hr::after {
    content: "";
    display: flow-root;
    clear: both;
}

/* img */
img {
    max-width: 100%;
}

/* input */
input,
select,
textarea {
    font: inherit;
    color: var(--color-text);
    padding: 0 var(--length-padding-circle);
    margin: 0;
    background-color: transparent;
    border: 1px solid var(--color-border);
    outline: none;
    border-radius: var(--length-padding-span);
    box-sizing: content-box;
}

input:focus,
select:focus,
textarea:focus {
    border-color: var(--color-variable);
}

select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}

input[type=number],
input[type=date] {
    appearance: textfield;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
}

input[type=date] {
    height: auto;
    width: auto;
    vertical-align: middle;
    height: calc(var(--number-ratio-line) * 1em);
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button,
input[type=date]::-webkit-calendar-picker-indicator,
input[type=date]::-webkit-clear-button { 
    opacity: 0;
}

input[type=file]::-webkit-file-upload-button {
    display: none;
}

option {
    background-color: var(--color-bg);
}

textarea {
    resize: none;
    height: calc(var(--number-ratio-line) * 5em);
}

/* kbd */
kbd {
    display: inline-block;
    padding: var(--length-padding-circle);
    font-size: var(--length-font-circle);
    line-height: 1;
    border: 1px solid var(--color-border);
    border-radius: var(--length-padding-span);
    box-shadow: inset 0 -1px 0 var(--color-border);
    font-family: var(--font-mono);
}

/* l */
ol {
    list-style: decimal
}

ul {
    list-style: disc
}

ol ol,
ul ol {
    list-style-type: lower-roman
}

ol ol ol,
ol ul ol,
ul ol ol,
ul ul ol {
    list-style-type: lower-alpha
}

ol,
ul {
    margin: var(--length-gap) 0;
    padding-left: var(--length-tab);
}

li {
    margin: var(--length-gap) 0;
}

dl {
    margin: var(--length-gap) 0;
}

dd {
    margin: var(--length-gap) 0;
    margin-left: var(--length-tab);
}

dt {
    font-weight: bold;
}

/* p */
p {
    margin: var(--length-gap) 0;
}

/* pre */
pre {
    display: table;
    width: 100%;
    break-inside: avoid;
    box-sizing: border-box;
    padding: var(--length-padding);
    border-radius: var(--length-padding);
    background-color: var(--color-pre);
    margin: var(--length-gap) 0;
}

/* table */
table {
    border-collapse: collapse;
    table-layout: fixed;
    color: inherit;
    font: inherit;
}

td,
th {
    padding: var(--length-gap);
    border: 1px solid var(--color-border);
}

th {
    font-weight: normal;
    text-align: center;
}

tr:nth-child(even) {
    background-color: var(--color-pre);
}

table>caption {
    margin: var(--length-space) 0;
}`
export const fresh=`/* checkbox */
.checkbox {
    display: inline-block;
    min-width: 1em;
    color: var(--color-light);
    cursor: pointer;
    padding: var(--length-padding-span);
    border-radius: var(--length-padding-span);
    line-height: 1;
    text-align: center;
}

.checkbox.left {
    text-align: left;
}

.checkbox.checked {
    color: var(--color-variable);
}

.checkbox:hover,
.checkbox.checking {
    background-color: var(--color-slice);
}

.button[data-name].show-name::after,
.checkbox[data-name].show-name::after {
    content: attr(data-name);
    display: inline-block;
    text-transform: capitalize;
}

.button.icomoon.show-name::after,
.checkbox.icomoon.show-name::after {
    padding-left: var(--length-space);
}

/* form */
.form>:not(:first-child) {
    margin-top: var(--length-gap);
}

.form,
.form-line {
    display: flex;
    flex-direction: column;
}

.form>*,
.form-line>* {
    flex-shrink: 0;
}

.form-line[data-name]::before {
    display: block;
    content: attr(data-name);
    color: var(--color-light);
    font-size: var(--length-font-log);
    text-transform: capitalize;
}

/* number bar */
.number-bar {
    display: flex;
    align-items: center;
    gap: var(--length-space);
}

.number-bar>.track {
    flex-grow: 1;
}

.number-bar>.track>.bar {
    height: 2px;
    margin: .5em 0;
    border-radius: 1px;
    background-color: var(--color-area);
}

.number-bar>.track>.bar>.active {
    height: 100%;
    border-radius: 1px;
    background-color: var(--color-variable);
}

.number-bar>.value {
    color: var(--color-light);
    font-size: var(--length-font-log);
}

.number-bar[data-name]:before {
    content: attr(data-name);
    color: var(--color-light);
    font-size: var(--length-font-log);
    text-transform: capitalize;
}

/* hide */
.hide {
    display: none !important;
}`
export const icomoon=`.icomoon {
    font-family: var(--font-icomoon) !important;
}

.icomoon.star::before {
    content: "\\e905";
    display: inline-block;
}

.icomoon.refresh::before {
    content: "\\e904";
    display: inline-block;
}

.icomoon.comment::before {
    content: "\\e900";
    display: inline-block;
}

.icomoon.send::before {
    content: "\\e902";
    display: inline-block;
}

.icomoon.logout::before {
    content: "\\e907";
    display: inline-block;
}

.icomoon.login::before {
    content: "\\e908";
    display: inline-block;
}

.icomoon.add::before {
    content: "\\e901";
    display: inline-block;
}

.icomoon.settings::before {
    content: "\\e906";
    display: inline-block;
}

.icomoon.messages::before {
    content: "\\e909";
    display: inline-block;
}

.icomoon.img::before {
    content: "\\e90a";
    display: inline-block;
}

.icomoon.view::before {
    content: "\\e90c";
    display: inline-block;
}

.icomoon.about::before {
    content: "\\e90d";
    display: inline-block;
}

.icomoon.search::before {
    content: "\\e90e";
    display: inline-block;
}

.icomoon.doc::before {
    content: "\\e90f";
    display: inline-block;
}

.icomoon.issures::before {
    content: "\\eab0";
    display: inline-block;
}

.icomoon.delete::before {
    content: "\\e90b";
    display: inline-block;
}

.icomoon.menu::before {
    content: "\\e903";
    display: inline-block;
}

.icomoon.pause::before {
    content: "\\e910";
    display: inline-block;
}

.icomoon.play::before {
    content: "\\e911";
    display: inline-block;
}`
export const all=root+override+fresh+icomoon
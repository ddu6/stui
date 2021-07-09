export const katex=`/* stylelint-disable font-family-no-missing-generic-family-keyword */
@font-face {
  font-family: 'KaTeX_AMS';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_AMS-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_AMS-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_AMS-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Caligraphic';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Caligraphic-Bold.ttf") format('truetype');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Caligraphic';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Caligraphic-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Fraktur';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Fraktur-Bold.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Fraktur-Bold.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Fraktur-Bold.ttf") format('truetype');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Fraktur';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Fraktur-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Fraktur-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Fraktur-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Main';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Bold.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Bold.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Bold.ttf") format('truetype');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Main';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-BoldItalic.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-BoldItalic.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-BoldItalic.ttf") format('truetype');
  font-weight: bold;
  font-style: italic;
}
@font-face {
  font-family: 'KaTeX_Main';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Italic.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Italic.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Italic.ttf") format('truetype');
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: 'KaTeX_Main';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Math';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Math-BoldItalic.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Math-BoldItalic.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Math-BoldItalic.ttf") format('truetype');
  font-weight: bold;
  font-style: italic;
}
@font-face {
  font-family: 'KaTeX_Math';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Math-Italic.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Math-Italic.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Math-Italic.ttf") format('truetype');
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: 'KaTeX_SansSerif';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Bold.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Bold.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Bold.ttf") format('truetype');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_SansSerif';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Italic.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Italic.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Italic.ttf") format('truetype');
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: 'KaTeX_SansSerif';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Script';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Script-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Script-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Script-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Size1';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size1-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size1-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size1-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Size2';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size2-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size2-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size2-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Size3';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size3-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size3-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size3-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Size4';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size4-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size4-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size4-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KaTeX_Typewriter';
  src: url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Typewriter-Regular.woff2") format('woff2'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Typewriter-Regular.woff") format('woff'), url("https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Typewriter-Regular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}
.katex {
  font: normal 1.21em KaTeX_Main, Times New Roman, serif;
  line-height: 1.2;
  text-indent: 0;
  text-rendering: auto;
}
.katex * {
  -ms-high-contrast-adjust: none !important;
  border-color: currentColor;
}
.katex .katex-version::after {
  content: "0.13.11";
}
.katex .katex-mathml {
  /* Accessibility hack to only show to screen readers
         Found at: http://a11yproject.com/posts/how-to-hide-content/ */
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
.katex .katex-html {
  /* \\newline is an empty block at top level, between .base elements */
}
.katex .katex-html > .newline {
  display: block;
}
.katex .base {
  position: relative;
  display: inline-block;
  white-space: nowrap;
  width: -webkit-min-content;
  width: -moz-min-content;
  width: min-content;
}
.katex .strut {
  display: inline-block;
}
.katex .textbf {
  font-weight: bold;
}
.katex .textit {
  font-style: italic;
}
.katex .textrm {
  font-family: KaTeX_Main;
}
.katex .textsf {
  font-family: KaTeX_SansSerif;
}
.katex .texttt {
  font-family: KaTeX_Typewriter;
}
.katex .mathnormal {
  font-family: KaTeX_Math;
  font-style: italic;
}
.katex .mathit {
  font-family: KaTeX_Main;
  font-style: italic;
}
.katex .mathrm {
  font-style: normal;
}
.katex .mathbf {
  font-family: KaTeX_Main;
  font-weight: bold;
}
.katex .boldsymbol {
  font-family: KaTeX_Math;
  font-weight: bold;
  font-style: italic;
}
.katex .amsrm {
  font-family: KaTeX_AMS;
}
.katex .mathbb,
.katex .textbb {
  font-family: KaTeX_AMS;
}
.katex .mathcal {
  font-family: KaTeX_Caligraphic;
}
.katex .mathfrak,
.katex .textfrak {
  font-family: KaTeX_Fraktur;
}
.katex .mathtt {
  font-family: KaTeX_Typewriter;
}
.katex .mathscr,
.katex .textscr {
  font-family: KaTeX_Script;
}
.katex .mathsf,
.katex .textsf {
  font-family: KaTeX_SansSerif;
}
.katex .mathboldsf,
.katex .textboldsf {
  font-family: KaTeX_SansSerif;
  font-weight: bold;
}
.katex .mathitsf,
.katex .textitsf {
  font-family: KaTeX_SansSerif;
  font-style: italic;
}
.katex .mainrm {
  font-family: KaTeX_Main;
  font-style: normal;
}
.katex .vlist-t {
  display: inline-table;
  table-layout: fixed;
  border-collapse: collapse;
}
.katex .vlist-r {
  display: table-row;
}
.katex .vlist {
  display: table-cell;
  vertical-align: bottom;
  position: relative;
}
.katex .vlist > span {
  display: block;
  height: 0;
  position: relative;
}
.katex .vlist > span > span {
  display: inline-block;
}
.katex .vlist > span > .pstrut {
  overflow: hidden;
  width: 0;
}
.katex .vlist-t2 {
  margin-right: -2px;
}
.katex .vlist-s {
  display: table-cell;
  vertical-align: bottom;
  font-size: 1px;
  width: 2px;
  min-width: 2px;
}
.katex .vbox {
  display: -webkit-inline-box;
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  -webkit-box-align: baseline;
          align-items: baseline;
}
.katex .hbox {
  display: -webkit-inline-box;
  display: inline-flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
          flex-direction: row;
  width: 100%;
}
.katex .thinbox {
  display: -webkit-inline-box;
  display: inline-flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
          flex-direction: row;
  width: 0;
  max-width: 0;
}
.katex .msupsub {
  text-align: left;
}
.katex .mfrac > span > span {
  text-align: center;
}
.katex .mfrac .frac-line {
  display: inline-block;
  width: 100%;
  border-bottom-style: solid;
}
.katex .mfrac .frac-line,
.katex .overline .overline-line,
.katex .underline .underline-line,
.katex .hline,
.katex .hdashline,
.katex .rule {
  min-height: 1px;
}
.katex .mspace {
  display: inline-block;
}
.katex .llap,
.katex .rlap,
.katex .clap {
  width: 0;
  position: relative;
}
.katex .llap > .inner,
.katex .rlap > .inner,
.katex .clap > .inner {
  position: absolute;
}
.katex .llap > .fix,
.katex .rlap > .fix,
.katex .clap > .fix {
  display: inline-block;
}
.katex .llap > .inner {
  right: 0;
}
.katex .rlap > .inner,
.katex .clap > .inner {
  left: 0;
}
.katex .clap > .inner > span {
  margin-left: -50%;
  margin-right: 50%;
}
.katex .rule {
  display: inline-block;
  border: solid 0;
  position: relative;
}
.katex .overline .overline-line,
.katex .underline .underline-line,
.katex .hline {
  display: inline-block;
  width: 100%;
  border-bottom-style: solid;
}
.katex .hdashline {
  display: inline-block;
  width: 100%;
  border-bottom-style: dashed;
}
.katex .sqrt > .root {
  /* These values are taken from the definition of \`\\r@@t\`,
             \`\\mkern 5mu\` and \`\\mkern -10mu\`. */
  margin-left: 0.27777778em;
  margin-right: -0.55555556em;
}
.katex .sizing.reset-size1.size1,
.katex .fontsize-ensurer.reset-size1.size1 {
  font-size: 1em;
}
.katex .sizing.reset-size1.size2,
.katex .fontsize-ensurer.reset-size1.size2 {
  font-size: 1.2em;
}
.katex .sizing.reset-size1.size3,
.katex .fontsize-ensurer.reset-size1.size3 {
  font-size: 1.4em;
}
.katex .sizing.reset-size1.size4,
.katex .fontsize-ensurer.reset-size1.size4 {
  font-size: 1.6em;
}
.katex .sizing.reset-size1.size5,
.katex .fontsize-ensurer.reset-size1.size5 {
  font-size: 1.8em;
}
.katex .sizing.reset-size1.size6,
.katex .fontsize-ensurer.reset-size1.size6 {
  font-size: 2em;
}
.katex .sizing.reset-size1.size7,
.katex .fontsize-ensurer.reset-size1.size7 {
  font-size: 2.4em;
}
.katex .sizing.reset-size1.size8,
.katex .fontsize-ensurer.reset-size1.size8 {
  font-size: 2.88em;
}
.katex .sizing.reset-size1.size9,
.katex .fontsize-ensurer.reset-size1.size9 {
  font-size: 3.456em;
}
.katex .sizing.reset-size1.size10,
.katex .fontsize-ensurer.reset-size1.size10 {
  font-size: 4.148em;
}
.katex .sizing.reset-size1.size11,
.katex .fontsize-ensurer.reset-size1.size11 {
  font-size: 4.976em;
}
.katex .sizing.reset-size2.size1,
.katex .fontsize-ensurer.reset-size2.size1 {
  font-size: 0.83333333em;
}
.katex .sizing.reset-size2.size2,
.katex .fontsize-ensurer.reset-size2.size2 {
  font-size: 1em;
}
.katex .sizing.reset-size2.size3,
.katex .fontsize-ensurer.reset-size2.size3 {
  font-size: 1.16666667em;
}
.katex .sizing.reset-size2.size4,
.katex .fontsize-ensurer.reset-size2.size4 {
  font-size: 1.33333333em;
}
.katex .sizing.reset-size2.size5,
.katex .fontsize-ensurer.reset-size2.size5 {
  font-size: 1.5em;
}
.katex .sizing.reset-size2.size6,
.katex .fontsize-ensurer.reset-size2.size6 {
  font-size: 1.66666667em;
}
.katex .sizing.reset-size2.size7,
.katex .fontsize-ensurer.reset-size2.size7 {
  font-size: 2em;
}
.katex .sizing.reset-size2.size8,
.katex .fontsize-ensurer.reset-size2.size8 {
  font-size: 2.4em;
}
.katex .sizing.reset-size2.size9,
.katex .fontsize-ensurer.reset-size2.size9 {
  font-size: 2.88em;
}
.katex .sizing.reset-size2.size10,
.katex .fontsize-ensurer.reset-size2.size10 {
  font-size: 3.45666667em;
}
.katex .sizing.reset-size2.size11,
.katex .fontsize-ensurer.reset-size2.size11 {
  font-size: 4.14666667em;
}
.katex .sizing.reset-size3.size1,
.katex .fontsize-ensurer.reset-size3.size1 {
  font-size: 0.71428571em;
}
.katex .sizing.reset-size3.size2,
.katex .fontsize-ensurer.reset-size3.size2 {
  font-size: 0.85714286em;
}
.katex .sizing.reset-size3.size3,
.katex .fontsize-ensurer.reset-size3.size3 {
  font-size: 1em;
}
.katex .sizing.reset-size3.size4,
.katex .fontsize-ensurer.reset-size3.size4 {
  font-size: 1.14285714em;
}
.katex .sizing.reset-size3.size5,
.katex .fontsize-ensurer.reset-size3.size5 {
  font-size: 1.28571429em;
}
.katex .sizing.reset-size3.size6,
.katex .fontsize-ensurer.reset-size3.size6 {
  font-size: 1.42857143em;
}
.katex .sizing.reset-size3.size7,
.katex .fontsize-ensurer.reset-size3.size7 {
  font-size: 1.71428571em;
}
.katex .sizing.reset-size3.size8,
.katex .fontsize-ensurer.reset-size3.size8 {
  font-size: 2.05714286em;
}
.katex .sizing.reset-size3.size9,
.katex .fontsize-ensurer.reset-size3.size9 {
  font-size: 2.46857143em;
}
.katex .sizing.reset-size3.size10,
.katex .fontsize-ensurer.reset-size3.size10 {
  font-size: 2.96285714em;
}
.katex .sizing.reset-size3.size11,
.katex .fontsize-ensurer.reset-size3.size11 {
  font-size: 3.55428571em;
}
.katex .sizing.reset-size4.size1,
.katex .fontsize-ensurer.reset-size4.size1 {
  font-size: 0.625em;
}
.katex .sizing.reset-size4.size2,
.katex .fontsize-ensurer.reset-size4.size2 {
  font-size: 0.75em;
}
.katex .sizing.reset-size4.size3,
.katex .fontsize-ensurer.reset-size4.size3 {
  font-size: 0.875em;
}
.katex .sizing.reset-size4.size4,
.katex .fontsize-ensurer.reset-size4.size4 {
  font-size: 1em;
}
.katex .sizing.reset-size4.size5,
.katex .fontsize-ensurer.reset-size4.size5 {
  font-size: 1.125em;
}
.katex .sizing.reset-size4.size6,
.katex .fontsize-ensurer.reset-size4.size6 {
  font-size: 1.25em;
}
.katex .sizing.reset-size4.size7,
.katex .fontsize-ensurer.reset-size4.size7 {
  font-size: 1.5em;
}
.katex .sizing.reset-size4.size8,
.katex .fontsize-ensurer.reset-size4.size8 {
  font-size: 1.8em;
}
.katex .sizing.reset-size4.size9,
.katex .fontsize-ensurer.reset-size4.size9 {
  font-size: 2.16em;
}
.katex .sizing.reset-size4.size10,
.katex .fontsize-ensurer.reset-size4.size10 {
  font-size: 2.5925em;
}
.katex .sizing.reset-size4.size11,
.katex .fontsize-ensurer.reset-size4.size11 {
  font-size: 3.11em;
}
.katex .sizing.reset-size5.size1,
.katex .fontsize-ensurer.reset-size5.size1 {
  font-size: 0.55555556em;
}
.katex .sizing.reset-size5.size2,
.katex .fontsize-ensurer.reset-size5.size2 {
  font-size: 0.66666667em;
}
.katex .sizing.reset-size5.size3,
.katex .fontsize-ensurer.reset-size5.size3 {
  font-size: 0.77777778em;
}
.katex .sizing.reset-size5.size4,
.katex .fontsize-ensurer.reset-size5.size4 {
  font-size: 0.88888889em;
}
.katex .sizing.reset-size5.size5,
.katex .fontsize-ensurer.reset-size5.size5 {
  font-size: 1em;
}
.katex .sizing.reset-size5.size6,
.katex .fontsize-ensurer.reset-size5.size6 {
  font-size: 1.11111111em;
}
.katex .sizing.reset-size5.size7,
.katex .fontsize-ensurer.reset-size5.size7 {
  font-size: 1.33333333em;
}
.katex .sizing.reset-size5.size8,
.katex .fontsize-ensurer.reset-size5.size8 {
  font-size: 1.6em;
}
.katex .sizing.reset-size5.size9,
.katex .fontsize-ensurer.reset-size5.size9 {
  font-size: 1.92em;
}
.katex .sizing.reset-size5.size10,
.katex .fontsize-ensurer.reset-size5.size10 {
  font-size: 2.30444444em;
}
.katex .sizing.reset-size5.size11,
.katex .fontsize-ensurer.reset-size5.size11 {
  font-size: 2.76444444em;
}
.katex .sizing.reset-size6.size1,
.katex .fontsize-ensurer.reset-size6.size1 {
  font-size: 0.5em;
}
.katex .sizing.reset-size6.size2,
.katex .fontsize-ensurer.reset-size6.size2 {
  font-size: 0.6em;
}
.katex .sizing.reset-size6.size3,
.katex .fontsize-ensurer.reset-size6.size3 {
  font-size: 0.7em;
}
.katex .sizing.reset-size6.size4,
.katex .fontsize-ensurer.reset-size6.size4 {
  font-size: 0.8em;
}
.katex .sizing.reset-size6.size5,
.katex .fontsize-ensurer.reset-size6.size5 {
  font-size: 0.9em;
}
.katex .sizing.reset-size6.size6,
.katex .fontsize-ensurer.reset-size6.size6 {
  font-size: 1em;
}
.katex .sizing.reset-size6.size7,
.katex .fontsize-ensurer.reset-size6.size7 {
  font-size: 1.2em;
}
.katex .sizing.reset-size6.size8,
.katex .fontsize-ensurer.reset-size6.size8 {
  font-size: 1.44em;
}
.katex .sizing.reset-size6.size9,
.katex .fontsize-ensurer.reset-size6.size9 {
  font-size: 1.728em;
}
.katex .sizing.reset-size6.size10,
.katex .fontsize-ensurer.reset-size6.size10 {
  font-size: 2.074em;
}
.katex .sizing.reset-size6.size11,
.katex .fontsize-ensurer.reset-size6.size11 {
  font-size: 2.488em;
}
.katex .sizing.reset-size7.size1,
.katex .fontsize-ensurer.reset-size7.size1 {
  font-size: 0.41666667em;
}
.katex .sizing.reset-size7.size2,
.katex .fontsize-ensurer.reset-size7.size2 {
  font-size: 0.5em;
}
.katex .sizing.reset-size7.size3,
.katex .fontsize-ensurer.reset-size7.size3 {
  font-size: 0.58333333em;
}
.katex .sizing.reset-size7.size4,
.katex .fontsize-ensurer.reset-size7.size4 {
  font-size: 0.66666667em;
}
.katex .sizing.reset-size7.size5,
.katex .fontsize-ensurer.reset-size7.size5 {
  font-size: 0.75em;
}
.katex .sizing.reset-size7.size6,
.katex .fontsize-ensurer.reset-size7.size6 {
  font-size: 0.83333333em;
}
.katex .sizing.reset-size7.size7,
.katex .fontsize-ensurer.reset-size7.size7 {
  font-size: 1em;
}
.katex .sizing.reset-size7.size8,
.katex .fontsize-ensurer.reset-size7.size8 {
  font-size: 1.2em;
}
.katex .sizing.reset-size7.size9,
.katex .fontsize-ensurer.reset-size7.size9 {
  font-size: 1.44em;
}
.katex .sizing.reset-size7.size10,
.katex .fontsize-ensurer.reset-size7.size10 {
  font-size: 1.72833333em;
}
.katex .sizing.reset-size7.size11,
.katex .fontsize-ensurer.reset-size7.size11 {
  font-size: 2.07333333em;
}
.katex .sizing.reset-size8.size1,
.katex .fontsize-ensurer.reset-size8.size1 {
  font-size: 0.34722222em;
}
.katex .sizing.reset-size8.size2,
.katex .fontsize-ensurer.reset-size8.size2 {
  font-size: 0.41666667em;
}
.katex .sizing.reset-size8.size3,
.katex .fontsize-ensurer.reset-size8.size3 {
  font-size: 0.48611111em;
}
.katex .sizing.reset-size8.size4,
.katex .fontsize-ensurer.reset-size8.size4 {
  font-size: 0.55555556em;
}
.katex .sizing.reset-size8.size5,
.katex .fontsize-ensurer.reset-size8.size5 {
  font-size: 0.625em;
}
.katex .sizing.reset-size8.size6,
.katex .fontsize-ensurer.reset-size8.size6 {
  font-size: 0.69444444em;
}
.katex .sizing.reset-size8.size7,
.katex .fontsize-ensurer.reset-size8.size7 {
  font-size: 0.83333333em;
}
.katex .sizing.reset-size8.size8,
.katex .fontsize-ensurer.reset-size8.size8 {
  font-size: 1em;
}
.katex .sizing.reset-size8.size9,
.katex .fontsize-ensurer.reset-size8.size9 {
  font-size: 1.2em;
}
.katex .sizing.reset-size8.size10,
.katex .fontsize-ensurer.reset-size8.size10 {
  font-size: 1.44027778em;
}
.katex .sizing.reset-size8.size11,
.katex .fontsize-ensurer.reset-size8.size11 {
  font-size: 1.72777778em;
}
.katex .sizing.reset-size9.size1,
.katex .fontsize-ensurer.reset-size9.size1 {
  font-size: 0.28935185em;
}
.katex .sizing.reset-size9.size2,
.katex .fontsize-ensurer.reset-size9.size2 {
  font-size: 0.34722222em;
}
.katex .sizing.reset-size9.size3,
.katex .fontsize-ensurer.reset-size9.size3 {
  font-size: 0.40509259em;
}
.katex .sizing.reset-size9.size4,
.katex .fontsize-ensurer.reset-size9.size4 {
  font-size: 0.46296296em;
}
.katex .sizing.reset-size9.size5,
.katex .fontsize-ensurer.reset-size9.size5 {
  font-size: 0.52083333em;
}
.katex .sizing.reset-size9.size6,
.katex .fontsize-ensurer.reset-size9.size6 {
  font-size: 0.5787037em;
}
.katex .sizing.reset-size9.size7,
.katex .fontsize-ensurer.reset-size9.size7 {
  font-size: 0.69444444em;
}
.katex .sizing.reset-size9.size8,
.katex .fontsize-ensurer.reset-size9.size8 {
  font-size: 0.83333333em;
}
.katex .sizing.reset-size9.size9,
.katex .fontsize-ensurer.reset-size9.size9 {
  font-size: 1em;
}
.katex .sizing.reset-size9.size10,
.katex .fontsize-ensurer.reset-size9.size10 {
  font-size: 1.20023148em;
}
.katex .sizing.reset-size9.size11,
.katex .fontsize-ensurer.reset-size9.size11 {
  font-size: 1.43981481em;
}
.katex .sizing.reset-size10.size1,
.katex .fontsize-ensurer.reset-size10.size1 {
  font-size: 0.24108004em;
}
.katex .sizing.reset-size10.size2,
.katex .fontsize-ensurer.reset-size10.size2 {
  font-size: 0.28929605em;
}
.katex .sizing.reset-size10.size3,
.katex .fontsize-ensurer.reset-size10.size3 {
  font-size: 0.33751205em;
}
.katex .sizing.reset-size10.size4,
.katex .fontsize-ensurer.reset-size10.size4 {
  font-size: 0.38572806em;
}
.katex .sizing.reset-size10.size5,
.katex .fontsize-ensurer.reset-size10.size5 {
  font-size: 0.43394407em;
}
.katex .sizing.reset-size10.size6,
.katex .fontsize-ensurer.reset-size10.size6 {
  font-size: 0.48216008em;
}
.katex .sizing.reset-size10.size7,
.katex .fontsize-ensurer.reset-size10.size7 {
  font-size: 0.57859209em;
}
.katex .sizing.reset-size10.size8,
.katex .fontsize-ensurer.reset-size10.size8 {
  font-size: 0.69431051em;
}
.katex .sizing.reset-size10.size9,
.katex .fontsize-ensurer.reset-size10.size9 {
  font-size: 0.83317261em;
}
.katex .sizing.reset-size10.size10,
.katex .fontsize-ensurer.reset-size10.size10 {
  font-size: 1em;
}
.katex .sizing.reset-size10.size11,
.katex .fontsize-ensurer.reset-size10.size11 {
  font-size: 1.19961427em;
}
.katex .sizing.reset-size11.size1,
.katex .fontsize-ensurer.reset-size11.size1 {
  font-size: 0.20096463em;
}
.katex .sizing.reset-size11.size2,
.katex .fontsize-ensurer.reset-size11.size2 {
  font-size: 0.24115756em;
}
.katex .sizing.reset-size11.size3,
.katex .fontsize-ensurer.reset-size11.size3 {
  font-size: 0.28135048em;
}
.katex .sizing.reset-size11.size4,
.katex .fontsize-ensurer.reset-size11.size4 {
  font-size: 0.32154341em;
}
.katex .sizing.reset-size11.size5,
.katex .fontsize-ensurer.reset-size11.size5 {
  font-size: 0.36173633em;
}
.katex .sizing.reset-size11.size6,
.katex .fontsize-ensurer.reset-size11.size6 {
  font-size: 0.40192926em;
}
.katex .sizing.reset-size11.size7,
.katex .fontsize-ensurer.reset-size11.size7 {
  font-size: 0.48231511em;
}
.katex .sizing.reset-size11.size8,
.katex .fontsize-ensurer.reset-size11.size8 {
  font-size: 0.57877814em;
}
.katex .sizing.reset-size11.size9,
.katex .fontsize-ensurer.reset-size11.size9 {
  font-size: 0.69453376em;
}
.katex .sizing.reset-size11.size10,
.katex .fontsize-ensurer.reset-size11.size10 {
  font-size: 0.83360129em;
}
.katex .sizing.reset-size11.size11,
.katex .fontsize-ensurer.reset-size11.size11 {
  font-size: 1em;
}
.katex .delimsizing.size1 {
  font-family: KaTeX_Size1;
}
.katex .delimsizing.size2 {
  font-family: KaTeX_Size2;
}
.katex .delimsizing.size3 {
  font-family: KaTeX_Size3;
}
.katex .delimsizing.size4 {
  font-family: KaTeX_Size4;
}
.katex .delimsizing.mult .delim-size1 > span {
  font-family: KaTeX_Size1;
}
.katex .delimsizing.mult .delim-size4 > span {
  font-family: KaTeX_Size4;
}
.katex .nulldelimiter {
  display: inline-block;
  width: 0.12em;
}
.katex .delimcenter {
  position: relative;
}
.katex .op-symbol {
  position: relative;
}
.katex .op-symbol.small-op {
  font-family: KaTeX_Size1;
}
.katex .op-symbol.large-op {
  font-family: KaTeX_Size2;
}
.katex .op-limits > .vlist-t {
  text-align: center;
}
.katex .accent > .vlist-t {
  text-align: center;
}
.katex .accent .accent-body {
  position: relative;
}
.katex .accent .accent-body:not(.accent-full) {
  width: 0;
}
.katex .overlay {
  display: block;
}
.katex .mtable .vertical-separator {
  display: inline-block;
  min-width: 1px;
}
.katex .mtable .arraycolsep {
  display: inline-block;
}
.katex .mtable .col-align-c > .vlist-t {
  text-align: center;
}
.katex .mtable .col-align-l > .vlist-t {
  text-align: left;
}
.katex .mtable .col-align-r > .vlist-t {
  text-align: right;
}
.katex .svg-align {
  text-align: left;
}
.katex svg {
  display: block;
  position: absolute;
  width: 100%;
  height: inherit;
  fill: currentColor;
  stroke: currentColor;
  fill-rule: nonzero;
  fill-opacity: 1;
  stroke-width: 1;
  stroke-linecap: butt;
  stroke-linejoin: miter;
  stroke-miterlimit: 4;
  stroke-dasharray: none;
  stroke-dashoffset: 0;
  stroke-opacity: 1;
}
.katex svg path {
  stroke: none;
}
.katex img {
  border-style: none;
  min-width: 0;
  min-height: 0;
  max-width: none;
  max-height: none;
}
.katex .stretchy {
  width: 100%;
  display: block;
  position: relative;
  overflow: hidden;
}
.katex .stretchy::before,
.katex .stretchy::after {
  content: "";
}
.katex .hide-tail {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.katex .halfarrow-left {
  position: absolute;
  left: 0;
  width: 50.2%;
  overflow: hidden;
}
.katex .halfarrow-right {
  position: absolute;
  right: 0;
  width: 50.2%;
  overflow: hidden;
}
.katex .brace-left {
  position: absolute;
  left: 0;
  width: 25.1%;
  overflow: hidden;
}
.katex .brace-center {
  position: absolute;
  left: 25%;
  width: 50%;
  overflow: hidden;
}
.katex .brace-right {
  position: absolute;
  right: 0;
  width: 25.1%;
  overflow: hidden;
}
.katex .x-arrow-pad {
  padding: 0 0.5em;
}
.katex .cd-arrow-pad {
  padding: 0 0.55556em 0 0.27778em;
}
.katex .x-arrow,
.katex .mover,
.katex .munder {
  text-align: center;
}
.katex .boxpad {
  padding: 0 0.3em 0 0.3em;
}
.katex .fbox,
.katex .fcolorbox {
  box-sizing: border-box;
  border: 0.04em solid;
}
.katex .cancel-pad {
  padding: 0 0.2em 0 0.2em;
}
.katex .cancel-lap {
  margin-left: -0.2em;
  margin-right: -0.2em;
}
.katex .sout {
  border-bottom-style: solid;
  border-bottom-width: 0.08em;
}
.katex .angl {
  box-sizing: border-content;
  border-top: 0.049em solid;
  border-right: 0.049em solid;
  margin-right: 0.03889em;
}
.katex .anglpad {
  padding: 0 0.03889em 0 0.03889em;
}
.katex .eqn-num::before {
  counter-increment: katexEqnNo;
  content: "(" counter(katexEqnNo) ")";
}
.katex .mml-eqn-num::before {
  counter-increment: mmlEqnNo;
  content: "(" counter(mmlEqnNo) ")";
}
.katex .mtr-glue {
  width: 50%;
}
.katex .cd-vert-arrow {
  display: inline-block;
  position: relative;
}
.katex .cd-label-left {
  display: inline-block;
  position: absolute;
  right: -webkit-calc(50% + 0.3em);
  right: calc(50% + 0.3em);
  text-align: left;
}
.katex .cd-label-right {
  display: inline-block;
  position: absolute;
  left: -webkit-calc(50% + 0.3em);
  left: calc(50% + 0.3em);
  text-align: right;
}
.katex-display {
  display: block;
  margin: 1em 0;
  text-align: center;
}
.katex-display > .katex {
  display: block;
  text-align: center;
  white-space: nowrap;
}
.katex-display > .katex > .katex-html {
  display: block;
  position: relative;
}
.katex-display > .katex > .katex-html > .tag {
  position: absolute;
  right: 0;
}
.katex-display.leqno > .katex > .katex-html > .tag {
  left: 0;
  right: auto;
}
.katex-display.fleqn > .katex {
  text-align: left;
  padding-left: 2em;
}
body {
  counter-reset: katexEqnNo mmlEqnNo;
}

`
export const root=`/* root */
/* body */
body {
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
    --font: katex-patch, st-sans, st-sans-extend, KaTeX_Main, "Segoe UI", "Microsoft YaHei", "Hiragino Sans GB", "STHeiti Light", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --font-mono: roboto-mono-regular, "Segoe UI", "Microsoft YaHei", "Hiragino Sans GB", "STHeiti Light", monospace, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --font-katex: katex-patch, st-sans, KaTeX_Main, "Segoe UI", "Microsoft YaHei", "Hiragino Sans GB", "STHeiti Light", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --font-icomoon: icomoon, katex-patch, st-sans, st-sans-extend, KaTeX_Main, "Segoe UI", "Microsoft YaHei", "Hiragino Sans GB", "STHeiti Light", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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

body[data-font-size=medium] {
    font-size: 17px
}

body[data-font-size=large] {
    font-size: 18px
}

body[data-color-scheme=dark] {
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

body[data-color-scheme=dark] .dark{
    filter: brightness(.5);
}

body[data-color-scheme=dark] .invert{
    filter: invert(.9147982) brightness(.8745098);
}

@media (prefers-color-scheme: dark) {
    body:not([data-color-scheme=light]) {
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

    body:not([data-color-scheme=light]) .dark{
        filter: brightness(.5);
    }

    body:not([data-color-scheme=light]) .invert{
        filter: invert(.9147982) brightness(.8745098);
    }
}

@media screen and (max-width:600px) {
    body {
        font-size: 15px
    }

    body[data-font-size=medium] {
        font-size: 16px
    }

    body[data-font-size=large] {
        font-size: 17px
    }
}

@media screen and (max-width:500px) {
    body {
        font-size: 14px
    }

    body[data-font-size=medium] {
        font-size: 15px
    }

    body[data-font-size=large] {
        font-size: 16px
    }
}

@media screen and (max-width:400px) {
    body {
        font-size: 13px
    }

    body[data-font-size=medium] {
        font-size: 14px
    }

    body[data-font-size=large] {
        font-size: 15px
    }
}

/* lrStruct */
.lr-struct {
    min-height: 100vh;
    position: relative;
    display: flex;
}

.lr-struct>.main {
    margin-left: var(--length-width-side);
    flex-grow: 1;
    box-sizing: border-box;
    width: 100%;
}

.lr-struct>.button {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
}

.lr-struct>.side {
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
    .lr-struct>.side:not(.active) {
        display: none;
    }

    .lr-struct>.button {
        display: block;
    }

    .lr-struct>.main {
        margin-left: 0 !important;
    }
}

.lr-struct>.side>.cover {
    display: none;
}

.lr-struct.sashing>.side>.cover {
    display: block;
    position: fixed;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    cursor: ew-resize;
}

.lr-struct>.side>.sash {
    height: 100%;
    width: 10px;
    position: absolute;
    top: 0;
    right: -5px;
    cursor: ew-resize;
}

.lr-struct.sashing>.side>.sash {
    background-color: var(--color-slice);
}

.lr-struct>.side>.content {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.lr-struct>.side>.content.vanished {
    display: none;
}

/* line */
.st-line {
    white-space: pre-wrap;
    display: table;
    width: 100%;
}

.st-line:not(.vanished):empty::before {
    content: " ";
}`
export const base=`/* base */
/* scroll */
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
blockquote,
.blockquote {
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

/* checkbox */
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

/* code */
code,
samp,
.code,
.samp {
    white-space: pre-wrap;
    tab-size: 4;
    font-size: var(--length-font-span);
    font-family: var(--font-mono);
}

code,
.code {
    padding: 0 var(--length-padding-span);
    background-color: var(--color-span);
    border-radius: var(--length-padding-span);
}

pre code,
.pre .code {
    padding: 0;
    background-color: transparent;
}

code>.line,
.code>.line {
    white-space: pre;
}

code>.line>.content,
.code>.line>.content {
    display: inline-block;
    white-space: pre-wrap;
}

code>.line>.content>*::after,
.code>.line>.content>*::after {
    content: " ";
    display: inline-block;
    width: 0;
    height: 0;
}

/* details */
summary,
.summary {
    outline: none;
}

/* fieldset */
fieldset,
.fieldset {
    margin: 0;
    padding: var(--length-padding);
    border: 1px solid var(--color-border);
}

legend,
.legend {
    padding: var(--length-padding-span);
}

/* figure */
figure,
.figure {
    text-align: center;
    margin: var(--length-space) 0;
}

figcaption,
.figcaption {
    margin: var(--length-space) 0;
}

figcaption>.tag,
.figcaption>.tag {
    margin-right: var(--length-space);
    font-weight: bold;
}

figcaption>.index,
.figcaption>.index {
    margin-right: var(--length-gap);
    font-weight: bold;
}

/* form */
.form>:not(:first-child) {
    margin-top: var(--length-gap);
}

.form,
.form-line[data-name] {
    display: flex;
    flex-direction: column;
}

.form>*,
.form-line[data-name]>* {
    flex-shrink: 0;
}

.form-line[data-name]::before {
    display: block;
    content: attr(data-name);
    color: var(--color-light);
    font-size: var(--length-font-log);
    text-transform: capitalize;
}

/* h */
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
    margin: var(--length-gap) 0;
    font: inherit;
    break-inside: avoid;
}

h1,
h2,
.h1,
.h2 {
    padding-bottom: var(--length-padding-circle);
    border-bottom: 1px solid var(--color-border);
}

h1,
.h1 {
    font-size: var(--length-font-title);
}

h2,
.h2 {
    font-size: calc((var(--length-font-title) + var(--length-font-heading)) / 2);
}

h3,
.h3 {
    font-size: calc((var(--length-font-title) + var(--length-font-heading)) / 2);
}

h4,
.h4 {
    font-size: var(--length-font-heading);
}

h5,
.h5 {
    font-size: calc((1em + var(--length-font-heading)) / 2);
}

h6,
.h6 {
    font-size: 1em;
}

/* hr */
hr,
.hr {
    height: 3px;
    margin: var(--length-gap) 0;
    background-color: var(--color-border);
    border: 0;
}

hr::after,
.hr::after {
    content: "";
    display: flow-root;
    clear: both;
}

/* img */
img,
.img {
    max-width: 100%;
}

/* input */
input,
select,
textarea,
.input,
.select,
.textarea {
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
textarea:focus,
.input:focus,
.select:focus,
.textarea:focus {
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

option,
.option {
    background-color: var(--color-bg);
}

textarea {
    resize: none;
    height: calc(var(--number-ratio-line) * 5em);
}

/* kbd */
kbd,
.kbd {
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
ol,
.ol {
    list-style: decimal
}

ul,
.ul {
    list-style: disc
}

ol ol,
ul ol,
.ol .ol,
.ul .ol {
    list-style-type: lower-roman
}

ol ol ol,
ol ul ol,
ul ol ol,
ul ul ol,
.ol .ol .ol,
.ol .ul .ol,
.ul .ol .ol,
.ul .ul .ol {
    list-style-type: lower-alpha
}

ol,
ul,
.ol,
.ul {
    margin: var(--length-gap) 0;
    padding-left: var(--length-tab);
    white-space: normal;
}

li,
.li {
    margin: var(--length-gap) 0;
}

.st-line li,
.st-line .li {
    white-space: pre-wrap;
}

dl,
.dl {
    margin: var(--length-gap) 0;
    white-space: normal;
}

dd,
.dd {
    margin: var(--length-gap) 0;
    margin-left: var(--length-tab);
}

dt,
.dt {
    font-weight: bold;
}

.st-line dd,
.st-line dt,
.st-line .dd,
.st-line .dt {
    white-space: pre-wrap;
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

/* p */
p,
.p {
    margin: var(--length-gap) 0;
}

/* pre */
pre,
.pre {
    display: table;
    break-inside: avoid;
    box-sizing: border-box;
    width: 100%;
    margin-top: 0;
    background-color: var(--color-pre);
    padding: var(--length-padding);
    margin: var(--length-gap) 0;
    border-radius: var(--length-padding);
}

/* table */
table,
.table {
    border-collapse: collapse;
    table-layout: fixed;
    color: inherit;
    font: inherit;
}

td,
th,
.td,
.th {
    padding: var(--length-gap);
    border: 1px solid var(--color-border);
}

th,
.th {
    font-weight: normal;
    text-align: center;
}

tr:nth-child(even),
.tr:nth-child(even) {
    background-color: var(--color-pre);
}

caption,
.caption {
    margin: var(--length-space) 0;
}

/* katex */
.katex {
    font-family: var(--font-katex);
    font-size: 1em;
    line-height: var(--number-ratio-line);
    white-space: pre;
}

.katex-display {
    margin: 0;
}

/* icomoon */
.icomoon {
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
}

/* hide */
.hide {
    display: none !important;
}`
export const hl=`/* hl */
.hljs,
.hljs-subst {
    color: var(--color-text);
}

.hljs-comment {
    color: var(--color-comment);
}

.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-selector-class,
.hljs-selector-id,
.hljs-selector-tag {
    color: var(--color-function);
}

.hljs-attribute,
.hljs-keyword,
.hljs-doctag,
.hljs-meta-keyword {
    color: var(--color-modifier);
}

.hljs-keyword {
    color: var(--color-keyword);
}

.hljs-name {
    color: var(--color-modifier);
}

.hljs-number {
    color: var(--color-number);
}

.hljs-string {
    color: var(--color-string);
}

.hljs-quote {
    color: var(--color-string);
}

.hljs-deletion {
    color: var(--color-light);
}

.hljs-template-tag,
.hljs-type {
    color: var(--color-modifier);
}

.hljs-section,
.hljs-title {
    color: var(--color-modifier);
}

.hljs-link,
.hljs-regexp {
    color: var(--color-string);
}

.hljs-symbol,
.hljs-template-variable,
.hljs-variable {
    color: var(--color-variable);
}

.hljs-literal {
    color: var(--color-modifier);
}

.hljs-addition,
.hljs-built_in,
.hljs-bullet,
.hljs-code {
    color: var(--color-variable);
}

.hljs-meta {
    color: var(--color-variable);
}

.hljs-meta-string {
    color: var(--color-string);
}

.hljs-emphasis {
    font-style: italic
}

.hljs-strong {
    font-weight: bold
}

.token.comment {
    color: var(--color-comment);
}

.token.punctuation,
.token.operator {
    color: var(--color-text);
}

.token.prolog,
.token.doctype,
.token.cdata,
.token.deleted {
    color: var(--color-light);
}

.token.boolean {
    color: var(--color-modifier);
}

.token.number {
    color: var(--color-number);
}

.token.property,
.token.builtin,
.token.attr-name,
.token.variable {
    color: var(--color-variable);
}

.token.selector,
.token.function {
    color: var(--color-function);
}

.token.tag,
.token.constant,
.token.entity,
.token.symbol {
    color: var(--color-modifier);
}

.token.namespace,
.token.class-name {
    color: var(--color-class);
}

.token.string,
.token.char,
.token.url,
.language-css .token.string,
.style .token.string,
.token.attr-value,
.token.inserted {
    color: var(--color-string);
}

.token.atrule,
.token.keyword {
    color: var(--color-keyword);
}

.token.regex,
.token.important {
    color: var(--color-string);
}

.token.important,
.token.bold {
    font-weight: bold;
}

.token.italic {
    font-style: italic;
}`
export const unit=`/* unit */
/* bib */
.unit.bib {
    margin: var(--length-space) 0;
    display: flex;
    align-items: baseline;
    break-inside: avoid;
}

.unit.bib:not(.plain)>.index::before {
    content: "[";
}

.unit.bib>.index {
    flex-shrink: 0;
}

.unit.bib>.desc:not(:empty)::before {
    content: ", ";
}

.unit.bib>.desc {
    flex-shrink: 0;
    margin-right: var(--length-gap);
}

.unit.bib:not(.plain)>.desc::after {
    content: "]";
}

.unit.bib .sentence:not(:empty)::after {
    content: ". ";
}

.unit.bib .clause:not(:empty):nth-child(n+2)::before {
    content: ", ";
}

.unit.bib.article .phrase.journal {
    font-style: italic;
}

.unit.bib.article .phrase.number:not(:empty)::before {
    content: "(";
}

.unit.bib.article .phrase.number:not(:empty)::after {
    content: ")";
}

.unit.bib.article .phrase.pages:not(:empty):not(:first-child)::before {
    content: ":";
}

.unit.bib.article .phrase.pages:not(:empty):first-child::before {
    content: "page ";
}

.unit.bib.book .phrase.title {
    font-style: italic;
}

.unit.bib.book .phrase.edition:not(:empty)::after {
    content: " edition";
}

.unit.bib.book .phrase.volume:not(:empty)::before {
    content: "volume ";
}

.unit.bib.book .phrase.number:not(:empty)::before {
    content: "Number ";
}

.unit.bib.book .clause.series.volume .phrase.series {
    font-style: italic;
}

.unit.bib.book .clause.series.volume .phrase.series:not(:empty)::before {
    content: " of ";
    font-style: normal;
}

.unit.bib.book .clause.series.number .phrase.series:not(:empty)::before {
    content: " in ";
}

.unit.bib .sentence.url {
    word-break: break-all;
}

/* contents */
.unit.contents::before {
    content: "Contents";
    text-align: center;
    display: block;
    font-size: var(--length-font-heading);
    margin: var(--length-gap) 0;
}

.unit.contents>.item {
    display: flow-root;
    position: relative;
}

.unit.contents>.item>.index {
    margin-right: var(--length-gap);
}

.unit.contents>.item.level1 {
    font-size: calc((1em + var(--length-font-heading)) / 2);
    margin: var(--length-space) 0;
}

.unit.contents>.item:not(.level1) {
    margin-left: var(--length-tab);
}

.unit.contents>.item:not(.level1):not(.level2) {
    margin-left: calc(2 * var(--length-tab));
}

/* display */
.unit.display {
    margin: var(--length-space) 0;
    text-align: center;
    display: block;
}

/* equation */
.unit.equation {
    margin: var(--length-space) 0;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    break-inside: avoid;
}

.unit.equation>.content {
    text-align: center;
    grid-area: 1/2/span 1/span 1;
}

.unit.equation>.caption {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-area: 1/3/span 1/span 1;
    padding-left: var(--length-gap);
}

.unit.equation>.caption>.tag {
    display: none;
}

.unit.equation:not(.plain)>.caption>.index::before {
    content: "(";
}

.unit.equation>.caption>.desc:not(:empty)::before {
    content: ", ";
}

.unit.equation:not(.plain)>.caption>.desc::after {
    content: ")";
}

/* heading */
.unit.heading {
    margin: var(--length-gap) 0;
    font-size: var(--length-font-heading);
    break-inside: avoid;
}

.unit.heading>.tag {
    display: none;
}

.unit.heading>.index {
    padding-right: var(--length-gap);
}

.unit.heading>.desc:not(:empty)::before {
    content: "(";
}

.unit.heading>.desc:not(:empty)::after {
    content: ")";
    margin-right: var(--length-gap);
}

/* index */
.unit.index>.tag {
    display: none;
}

.unit.index>.desc:not(:empty)::before {
    content: "(";
    margin-left: var(--length-space);
}

.unit.index>.desc:not(:empty)::after {
    content: ")";
}

.unit.index>.content {
    display: none;
}

/* katex */
.unit.katex {
    font-size: 1em;
}

/* proof */
.unit.proof {
    margin: var(--length-gap) 0;
}

.unit.proof>.tag {
    font-weight: bold;
    font-style: italic;
    margin-right: var(--length-gap);
}

.unit.proof>.desc:not(:empty)::before {
    content: "(";
}

.unit.proof>.desc:not(:empty)::after {
    content: ")";
    margin-right: var(--length-gap);
}

.unit.proof>.content>div:first-child {
    display: inline;
}

.unit.proof>.content>div:last-child>.qed {
    float: right;
}

/* ref */
.unit.ref>.tag {
    margin-right: var(--length-space);
}

.unit.ref>.desc:not(:empty)::before {
    content: "(";
    margin-left: var(--length-space);
}

.unit.ref>.desc:not(:empty)::after {
    content: ")";
}

.unit.ref.ref-tag-equation:not(.plain)::before {
    content: "(";
}

.unit.ref.ref-tag-equation:not(.plain)::after {
    content: ")";
}

.unit.ref.ref-tag-bib:not(.plain)::before {
    content: "[";
}

.unit.ref.ref-tag-bib:not(.plain)::after {
    content: "]";
}

.unit.ref.ref-tag-bib>.tag,
.unit.ref.ref-tag-equation>.tag,
.unit.ref.plain>.tag {
    display: none;
}

.unit.ref.ref-tag-bib>.desc:not(:empty)::before,
.unit.ref.ref-tag-equation>.desc:not(:empty)::before {
    content: ", ";
    margin-left: 0;
}

.unit.ref.ref-tag-bib>.desc:not(:empty)::after,
.unit.ref.ref-tag-equation>.desc:not(:empty)::after {
    content: "";
}

/* theorems */
.unit.style-theorem,
.unit.style-definition,
.unit.style-remark {
    border-left: var(--color-variable) solid 1px;
    background-color: var(--color-pre);
    padding: var(--length-gap);
    padding-left: var(--length-padding);
    margin: var(--length-gap) 0;
    display: table;
    box-sizing: border-box;
    width: 100%;
    break-inside: avoid;
}

.unit.style-theorem>.tag,
.unit.style-definition>.tag,
.unit.style-remark>.tag {
    margin-right: var(--length-space);
    font-weight: bold;
}

.unit.style-theorem>.index,
.unit.style-definition>.index,
.unit.style-remark>.index {
    margin-right: var(--length-gap);
    font-weight: bold;
}

.unit.style-theorem>.desc:not(:empty)::before,
.unit.style-definition>.desc:not(:empty)::before,
.unit.style-remark>.desc:not(:empty)::before {
    content: "(";
}

.unit.style-theorem>.desc:not(:empty)::after,
.unit.style-definition>.desc:not(:empty)::after,
.unit.style-remark>.desc:not(:empty)::after {
    content: ")";
    margin-right: var(--length-gap);
}

.unit.style-theorem>.content>div:first-child,
.unit.style-definition>.content>div:first-child,
.unit.style-remark>.content>div:first-child {
    display: inline;
}

.unit.style-theorem>.content {
    font-style: italic;
}

.unit.style-definition {
    border-left-color: var(--color-string);
}

.unit.style-remark {
    border-left-color: var(--color-comment);
}

.unit.style-remark>.tag,
.unit.style-remark>.index {
    font-style: italic;
}

/* title */
.unit.title {
    text-align: center;
    font-size: var(--length-font-title);
    margin: var(--length-padding) 0;
}

/* warn */
.unit.warn {
    color: var(--color-warn);
    text-align: center;
}`
export const all=katex+root+base+hl+unit
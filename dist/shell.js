import { Div } from './common';
import { st_circle_png } from './lib/imgs';
import { all } from './lib/css';
export class Shell extends Div {
    constructor(title = '', icon = '', customCSS = '', classes = []) {
        super(classes);
        this.styleEle = document.createElement('style');
        document.head.innerHTML += `<meta charset='utf8'><meta name='viewport' content='width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0'>`;
        if (!document.head.innerHTML.includes('icon')) {
            if (icon.length === 0) {
                icon = st_circle_png;
            }
            document.head.innerHTML += `<link rel='icon' href=${JSON.stringify(icon)}>`;
        }
        if (title.length > 0 && document.title.length === 0) {
            document.title = title;
        }
        document.body.style.margin = '0';
        this.styleEle.textContent = all + customCSS;
        document.body.append(this.styleEle);
        document.body.append(this.element);
    }
}

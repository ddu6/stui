import { SimpleTouch } from "./touch";
import { Button, Div } from "./common";
import { Shell } from "./shell";
import { CommonEle } from "stce";
export class LRStruct extends Shell {
    constructor(title = '', icon = '', customCSS = '', otherClasses = []) {
        super(title, icon, customCSS, ['lr struct'].concat(otherClasses));
        this.side = new CommonEle('aside', ['side']);
        this.button = new Button('menu');
        this.sideContent = new Div(['content']);
        this.main = new CommonEle('main', ['main']);
        this.sash = new Div(['sash']);
        this.cover = new Div(['cover']);
        this.sashing = false;
        this.sashX = 0;
        this.sashListeners = [];
        this
            .append(this.main)
            .append(this.button)
            .append(this.side
            .append(this.sideContent)
            .append(this.cover)
            .append(this.sash));
        this.sideWidth = this.side.element.offsetWidth;
        this.button.addEventListener('click', () => {
            this.side.classList.add('active');
        });
        this.main.element.addEventListener('click', () => {
            this.side.classList.remove('active');
        });
        this.sash.addEventListener('mousedown', e => {
            e.preventDefault();
            this.sashing = true;
            this.sashX = e.clientX;
            this.sideWidth = this.side.element.offsetWidth;
            this.element.classList.add('sashing');
        });
        this.sash.addEventListener('touchstart', e => {
            this.sashing = true;
            const touch = new SimpleTouch(e).targetTouch;
            if (touch === undefined) {
                return;
            }
            this.sashX = touch.clientX;
            this.sideWidth = this.side.element.offsetWidth;
            this.element.classList.add('sashing');
        });
        document.addEventListener('mousemove', e => {
            if (!this.sashing) {
                return;
            }
            e.preventDefault();
            const dx = e.clientX - this.sashX;
            const newWidth = Math.min(Math.max(this.sideWidth + dx, 30), this.element.offsetWidth);
            this.side.style.width = newWidth + 'px';
            this.main.style.marginLeft = this.side.element.offsetWidth + 'px';
            if (this.side.element.offsetWidth <= 50) {
                this.sideContent.classList.add('vanished');
            }
            else {
                this.sideContent.classList.remove('vanished');
            }
        });
        this.sash.addEventListener('touchmove', e => {
            if (e.cancelable) {
                e.preventDefault();
            }
            if (!this.sashing) {
                return;
            }
            const touch = new SimpleTouch(e).targetTouch;
            if (touch === undefined) {
                return;
            }
            const dx = touch.clientX - this.sashX;
            const newWidth = Math.min(Math.max(this.sideWidth + dx, 30), this.element.offsetWidth);
            this.side.style.width = newWidth + 'px';
            this.main.style.marginLeft = this.side.element.offsetWidth + 'px';
            if (this.side.element.offsetWidth <= 50) {
                this.sideContent.classList.add('vanished');
            }
            else {
                this.sideContent.classList.remove('vanished');
            }
        });
        document.addEventListener('mouseup', async () => {
            if (this.sashing !== true) {
                return;
            }
            this.sashing = false;
            this.element.classList.remove('sashing');
            for (const listener of this.sashListeners) {
                await listener();
            }
        });
        document.addEventListener('touchend', async () => {
            if (this.sashing !== true) {
                return;
            }
            this.sashing = false;
            this.element.classList.remove('sashing');
            for (const listener of this.sashListeners) {
                await listener();
            }
        });
    }
}

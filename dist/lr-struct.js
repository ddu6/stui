import { extractMainTouch } from './common';
export function createLRStruct(options = {}) {
    const root = options.root ?? window;
    const { document } = root;
    const element = document.createElement('div');
    const main = document.createElement('main');
    const button = document.createElement('button');
    const side = document.createElement('aside');
    const sideContent = document.createElement('div');
    const sash = document.createElement('div');
    element.classList.add('lr-struct');
    button.classList.add('show-icon', 'menu');
    sideContent.classList.add('content');
    sash.classList.add('sash');
    element.append(main);
    element.append(button);
    element.append(side);
    side.append(sideContent);
    side.append(sash);
    let sashing = false;
    let sashX = 0;
    let sideWidth = side.offsetWidth;
    const sashListeners = [];
    button.addEventListener('click', () => {
        side.classList.add('active');
    });
    main.addEventListener('click', () => {
        side.classList.remove('active');
    });
    sash.addEventListener('mousedown', e => {
        e.preventDefault();
        sashing = true;
        sashX = e.clientX;
        sideWidth = side.offsetWidth;
        element.classList.add('sashing');
    });
    sash.addEventListener('touchstart', e => {
        sashing = true;
        const touch = extractMainTouch(e);
        if (touch === undefined) {
            return;
        }
        sashX = touch.clientX;
        sideWidth = side.offsetWidth;
        element.classList.add('sashing');
    });
    root.addEventListener('mousemove', e => {
        if (!sashing) {
            return;
        }
        e.preventDefault();
        const dx = e.clientX - sashX;
        const newWidth = Math.min(Math.max(sideWidth + dx, 30), element.offsetWidth);
        side.style.width = newWidth + 'px';
        main.style.marginLeft = side.offsetWidth + 'px';
        if (side.offsetWidth <= 50) {
            sideContent.classList.add('vanished');
        }
        else {
            sideContent.classList.remove('vanished');
        }
    });
    sash.addEventListener('touchmove', e => {
        if (e.cancelable) {
            e.preventDefault();
        }
        if (!sashing) {
            return;
        }
        const touch = extractMainTouch(e);
        if (touch === undefined) {
            return;
        }
        const dx = touch.clientX - sashX;
        const newWidth = Math.min(Math.max(sideWidth + dx, 30), element.offsetWidth);
        side.style.width = newWidth + 'px';
        main.style.marginLeft = side.offsetWidth + 'px';
        if (side.offsetWidth <= 50) {
            sideContent.classList.add('vanished');
        }
        else {
            sideContent.classList.remove('vanished');
        }
    });
    const end = async () => {
        if (sashing !== true) {
            return;
        }
        sashing = false;
        element.classList.remove('sashing');
        for (const listener of sashListeners) {
            await listener();
        }
    };
    root.addEventListener('mouseup', end);
    root.addEventListener('touchend', end);
    return {
        element,
        main,
        sideContent,
        sashListeners
    };
}

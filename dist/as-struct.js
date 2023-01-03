import { createNamedStretchedElement } from './common';
import { createLRStruct } from './lr-struct';
export function createASStruct() {
    var _a, _b, _c, _d;
    const { element, main, sideContent } = createLRStruct();
    const article = document.createElement('article');
    const settings = document.createElement('details');
    const summary = document.createElement('summary');
    const colorScheme = document.createElement('select');
    const fontSize = document.createElement('select');
    summary.textContent = 'Settings';
    colorScheme.add(new Option('auto'));
    colorScheme.add(new Option('light'));
    colorScheme.add(new Option('dark'));
    fontSize.add(new Option('small'));
    fontSize.add(new Option('medium'));
    fontSize.add(new Option('large'));
    main.append(article);
    sideContent.append(settings);
    settings.append(summary);
    settings.append(createNamedStretchedElement('Color Scheme', colorScheme));
    settings.append(createNamedStretchedElement('Font Size', fontSize));
    document.documentElement.dataset.colorScheme
        = colorScheme.value
            = (_b = (_a = localStorage.getItem('st-color-scheme')) !== null && _a !== void 0 ? _a : document.documentElement.dataset.colorScheme) !== null && _b !== void 0 ? _b : 'auto';
    document.documentElement.dataset.fontSize
        = fontSize.value
            = (_d = (_c = localStorage.getItem('st-font-size')) !== null && _c !== void 0 ? _c : document.documentElement.dataset.fontSize) !== null && _d !== void 0 ? _d : 'small';
    colorScheme.addEventListener('change', () => {
        localStorage.setItem('st-color-scheme', document.documentElement.dataset.colorScheme = colorScheme.value);
    });
    fontSize.addEventListener('change', () => {
        localStorage.setItem('st-font-size', document.documentElement.dataset.fontSize = fontSize.value);
    });
    return {
        element,
        main,
        sideContent,
        article,
        settings,
    };
}

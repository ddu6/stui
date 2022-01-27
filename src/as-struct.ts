import {createNamedStretchedElement} from './common'
import {createLRStruct} from './lr-struct'
export function createASStruct() {
    const {element, main, sideContent} = createLRStruct()
    const article = document.createElement('article')
    const settings = document.createElement('details')
    const summary = document.createElement('summary')
    const colorScheme = document.createElement('select')
    const fontSize = document.createElement('select')
    summary.textContent = 'Settings'
    colorScheme.add(new Option('auto'))
    colorScheme.add(new Option('light'))
    colorScheme.add(new Option('dark'))
    fontSize.add(new Option('small'))
    fontSize.add(new Option('medium'))
    fontSize.add(new Option('large'))
    main.append(article)
    sideContent.append(settings)
    settings.append(summary)
    settings.append(createNamedStretchedElement('Color Scheme', colorScheme))
    settings.append(createNamedStretchedElement('Font Size', fontSize))
    document.documentElement.dataset.colorScheme
        = colorScheme.value
        = localStorage.getItem('st-color-scheme')
        ?? document.documentElement.dataset.colorScheme
        ?? 'auto'
    document.documentElement.dataset.fontSize
        = fontSize.value
        = localStorage.getItem('st-font-size')
        ?? document.documentElement.dataset.fontSize
        ?? 'small'
    colorScheme.addEventListener('change', () => {
        localStorage.setItem(
            'st-color-scheme',
            document.documentElement.dataset.colorScheme = colorScheme.value
        )
    })
    fontSize.addEventListener('change', () => {
        localStorage.setItem(
            'st-font-size',
            document.documentElement.dataset.fontSize = fontSize.value
        )
    })
    return {
        element,
        main,
        sideContent,
        article,
        settings,
    }
}
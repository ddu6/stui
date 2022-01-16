export function init() {
    if (document.head.querySelector('meta[charset]') === null) {
        const meta = document.createElement('meta')
        meta.setAttribute('charset', 'utf8')
        document.head.append(meta)
    }
    if (document.head.querySelector('meta[name="viewport"]') === null) {
        const meta = document.createElement('meta')
        meta.name = 'viewport'
        meta.content = 'width=device-width, initial-scale=1'
        document.head.append(meta)
    }
}
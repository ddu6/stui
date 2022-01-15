export function extractMainTouch(e: TouchEvent) {
    let force = 0
    let main: Touch | undefined
    for (const touch of e.targetTouches) {
        if (touch.force > force) {
            force = touch.force
            main = touch
        }
    }
    return main
}
export function createNamedStretchedElement(name: string, content: Element) {
    const element = document.createElement('div')
    const nameEle = document.createElement('div')
    element.style.display = 'grid'
    element.style.gridTemplateColumns = '1fr'
    element.style.margin = 'var(--length-gap) 0'
    nameEle.style.fontSize = 'var(--length-font-code)'
    nameEle.textContent = name
    element.append(nameEle)
    element.append(content)
    return element
}
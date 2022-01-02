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
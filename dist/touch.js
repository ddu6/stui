export class SimpleTouch {
    constructor(e) {
        this.e = e;
        let force = 0;
        for (const touch of e.targetTouches) {
            if (touch.force > force) {
                this.targetTouch = touch;
                force = touch.force;
            }
        }
    }
}

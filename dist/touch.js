export class SimpleTouch {
    constructor(e) {
        this.e = e;
        const targetList = e.targetTouches;
        if (targetList.length > 0) {
            let force = 0, main = e.targetTouches[0];
            for (let i = 0; i < e.targetTouches.length; i++) {
                const temp = e.targetTouches[i];
                if (temp.force > force) {
                    main = temp;
                    force = main.force;
                }
            }
            this.targetTouch = main;
        }
    }
}

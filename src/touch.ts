export class SimpleTouch{
    readonly targetTouch:Touch|undefined
    constructor(public e:TouchEvent){
        let force=0
        for(const touch of e.targetTouches){
            if(touch.force>force){
                this.targetTouch=touch
                force=touch.force
            }
        }
    }
}
import { SimpleTouch } from "./touch.js"
import { Button, Div } from "./common.js"

export class LRStruct extends Div{
    readonly side=new Div(['side'])
    readonly button=new Button('menu')
    readonly sideContent=new Div(['content'])
    readonly main=new Div(['main'])
    readonly sash=new Div(['sash'])
    readonly cover=new Div(['cover'])
    sashing=false
    sashX=0
    sideWidth:number
    sashListeners:(()=>Promise<void>)[]=[]
    constructor(){
        super(['lr-struct'])
        this.side.element.append(this.sideContent.element)
        this.side.element.append(this.cover.element)
        this.side.element.append(this.sash.element)
        this.element.append(this.main.element)
        this.element.append(this.button.element)
        this.element.append(this.side.element)
        this.sideWidth=this.side.element.offsetWidth
        this.button.addEventListener('click',e=>{
            this.side.classList.add('active')
        })
        this.main.addEventListener('click',e=>{
            this.side.classList.remove('active')
        })
        this.sash.addEventListener('mousedown',e=>{
            e.preventDefault()
            this.sashing=true
            this.sashX=e.clientX
            this.sideWidth=this.side.element.offsetWidth
            this.element.classList.add('sashing')
        })
        this.sash.addEventListener('touchstart',e=>{
            this.sashing=true
            const touch=new SimpleTouch(e).targetTouch
            if(touch===undefined){
                return
            }
            this.sashX=touch.clientX
            this.sideWidth=this.side.element.offsetWidth
            this.element.classList.add('sashing')
        })
        document.addEventListener('mousemove',e=>{
            if(!this.sashing){
                return
            }
            e.preventDefault()
            const dx=e.clientX-this.sashX
            const newWidth=Math.min(Math.max(this.sideWidth+dx,30),this.element.offsetWidth)
            this.side.style.width=newWidth+'px'
            this.main.style.marginLeft=this.side.element.offsetWidth+'px'
            if(this.side.element.offsetWidth<=50){
                this.sideContent.classList.add('vanished')
            }else{
                this.sideContent.classList.remove('vanished')
            }
        })
        this.sash.addEventListener('touchmove',e=>{
            if(e.cancelable){
                e.preventDefault()
            }
            if(!this.sashing){
                return
            }
            const touch=new SimpleTouch(e).targetTouch
            if(touch===undefined){
                return
            }
            const dx=touch.clientX-this.sashX
            const newWidth=Math.min(Math.max(this.sideWidth+dx,30),this.element.offsetWidth)
            this.side.style.width=newWidth+'px'
            this.main.style.marginLeft=this.side.element.offsetWidth+'px'
            if(this.side.element.offsetWidth<=50){
                this.sideContent.classList.add('vanished')
            }else{
                this.sideContent.classList.remove('vanished')
            }
        })
        document.addEventListener('mouseup',async e=>{
            if(this.sashing!==true){
                return
            }
            this.sashing=false
            this.element.classList.remove('sashing')
            for(let i=0;i<this.sashListeners.length;i++){
                await this.sashListeners[i]()
            }
        })
        document.addEventListener('touchend',async e=>{
            if(this.sashing!==true){
                return
            }
            this.sashing=false
            this.element.classList.remove('sashing')
            for(let i=0;i<this.sashListeners.length;i++){
                await this.sashListeners[i]()
            }
        })
    }
}
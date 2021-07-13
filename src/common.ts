import {Div,NamedDiv} from 'stce'
export * from 'stce'
export class Checkbox extends NamedDiv{
    constructor(name:string,otherClasses:string[]=[]){
        super(name,'checkbox',otherClasses)
        this.element.classList.add('icomoon')
    }
}
export class Button extends NamedDiv{
    constructor(name:string,otherClasses:string[]=[]){
        super(name,'button',otherClasses)
        this.element.classList.add('icomoon')
    }
}
export class FormLine extends NamedDiv{
    constructor(name:string,otherClasses:string[]=[]){
        super(name,'form-line',otherClasses)
    }
}
export class Form extends NamedDiv{
    constructor(name:string,otherClasses:string[]=[]){
        super(name,'form',otherClasses)
    }
}
export class NumberBar extends NamedDiv{
    readonly valEle=new Div(['value'])
    readonly track=new Div(['track'])
    readonly bar=new Div(['bar'])
    readonly activePart=new Div(['active'])
    inputListeners:((value:number)=>Promise<void>)[]=[]
    constructor(
        name:string,
        protected min:number,
        protected value:number,
        protected max:number,
        protected log=false,
        protected fractionDigits=1,
        otherClasses:string[]=[]
    ){
        super(name,'number bar',otherClasses)
        if(log){
            this.min=Math.log(min)
            this.value=Math.log(value)
            this.max=Math.log(max)
        }
        this
        .append(
            this.track.append(
                this.bar.append(this.activePart)
            )
        )
        .append(this.valEle)
        
        this.track.addEventListener('click',async e=>{
            const rate=e.offsetX/this.track.element.offsetWidth
            this.value=this.min+(this.max-this.min)*rate
            this.renderBar()
            const val=this.log?Math.exp(this.value):this.value
            for(let i=0;i<this.inputListeners.length;i++){
                await this.inputListeners[i](val)
            }
        })
        this.renderBar()
    }
    setValue(value:number){
        if(this.log){
            value=Math.log(value)
        }
        if(value<this.min||!isFinite(value)){
            value=this.min
        }else if(value>this.max){
            value=this.max
        }
        this.value=value
        this.renderBar()
    }
    protected renderBar(){
        this.activePart.style.width=this.getRate()*100+'%'
        this.valEle.setText((this.log?Math.exp(this.value):this.value).toFixed(this.fractionDigits))
    }
    getRate(){
        if(this.max<=this.min){
            return 0
        }
        return (this.value-this.min)/(this.max-this.min)
    }
}
export class TimeBar extends NumberBar{
    constructor(name:string,duration=0,otherClasses:string[]=[]){
        super(name,0,0,duration,false,1,otherClasses)
    }
    protected renderBar(){
        this.activePart.style.width=this.getRate()*100+'%'
        this.valEle.setText(TimeBar.prettyTime(this.value)+'/'+TimeBar.prettyTime(this.max))
    }
    setDuration(duration:number){
        if(duration<this.value||!isFinite(duration)){
            duration=this.value
        }
        this.max=duration
        this.renderBar()
    }
    static prettyTime(time:number){
        const m=Math.floor((time%3600)/60).toString().padStart(2,'0')
        const s=Math.floor(time%60).toString().padStart(2,'0')
        const string=m+':'+s
        if(time<=3600){
            return string
        }
        return Math.floor(time/3600).toString()+':'+string
    }
}

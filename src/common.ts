import {Div,NamedDiv,NamedButton} from 'stce'
export * from 'stce'
export class Checkbox extends NamedDiv{
    constructor(name:string,otherClasses:string[]=[]){
        super(name,'checkbox',['show icon'].concat(otherClasses))
    }
}
export class Button extends NamedButton{
    constructor(name:string,otherClasses:string[]=[]){
        super(name,'button',['show icon'].concat(otherClasses))
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
    inputListeners:((value:number)=>Promise<void>)[]=[]
    constructor(
        name:string,
        protected min:number,
        protected value:number,
        protected max:number,
        protected log=false,
        protected fractionDigits=3,
        public isStatic=false,
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
            this.track.append(this.bar)
        )
        .append(this.valEle)
        
        this.track.addEventListener('click',async e=>{
            if(isStatic){
                return
            }
            this.value=this.min+(this.max-this.min)*(e.offsetX/this.track.element.offsetWidth)
            this.renderBar()
            await this.listen()
        })
        this.renderBar()
    }
    setMin(min:number){
        if(this.log){
            min=Math.log(min)
        }
        if(min>this.value||!isFinite(min)){
            min=this.value
        }
        this.min=min
        this.renderBar()
    }
    async listen(){
        for(const listener of this.inputListeners){
            await listener(this.getValue())
        }
    }
    async inputValue(value:number){
        this.setValue(value)
        await this.listen()
    }
    setValue(value:number){
        value=this.log?Math.log(value):value
        if(value<this.min||!isFinite(value)){
            value=this.min
        }else if(value>this.max){
            value=this.max
        }
        this.value=value
        this.renderBar()
    }
    setMax(max:number){
        if(this.log){
            max=Math.log(max)
        }
        if(max<this.value||!isFinite(max)){
            max=this.value
        }
        this.max=max
        this.renderBar()
    }
    protected renderBar(){
        const p=this.getRate()*100+'%'
        this.bar.style.background=`linear-gradient(to right, var(--color-variable) ${p}, var(--color-area) ${p})`
        this.renderValue()
    }
    protected renderValue(){
        const p=Math.pow(10,this.fractionDigits)
        this.valEle.setText(
            (
                Math.round(
                    this.getValue()*p
                )/p
            ).toString()
        )
    }
    getRate(){
        if(this.max<=this.min){
            return 0
        }
        return (this.value-this.min)/(this.max-this.min)
    }
    getValue(){
        return this.log?Math.exp(this.value):this.value
    }
}
export class DataBar extends NumberBar{
    constructor(name:string,used=0,quota=0,isStatic=false,otherClasses:string[]=[]){
        super(name,0,used,quota,false,0,isStatic,otherClasses)
    }
    protected renderValue(){
        this.valEle.setText(DataBar.prettyData(this.value)+' / '+DataBar.prettyData(this.max))
    }
    static prettyData(number:number){
        if(number<1024){
            return number+' B'
        }
        if(number<1048576){
            return Math.round(number/1.024)/1000+' KiB'
        }
        if(number<1073741824){
            return Math.round(number/1048.576)/1000+' MiB'
        }
        return Math.round(number/1073741.824)/1000+' GiB'
    }
}
export class TimeBar extends NumberBar{
    constructor(name:string,passed=0,duration=0,isStatic=false,otherClasses:string[]=[]){
        super(name,0,passed,duration,false,0,isStatic,otherClasses)
    }
    protected renderValue(){
        this.valEle.setText(TimeBar.prettyTime(this.value)+'/'+TimeBar.prettyTime(this.max))
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
import { Div } from "./common.js";
import { st_svg } from "./lib/imgs.js";
import { fonts } from "./lib/fonts.js";
import { all } from "./lib/css.js";

export class Shell extends Div{
    readonly styleEle=document.createElement('style')
    constructor(title='',icon='',customCSS='',classes:string[]=[]){
        super(classes)
        document.head.innerHTML+=`<meta charset='utf8'><meta name='viewport' content='width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0'>`
        if(!document.head.innerHTML.includes("icon")){
            if(icon===''){
                icon=st_svg
            }
            document.head.innerHTML+=`<link rel='icon' href=${JSON.stringify(icon)}>`
        }
        if(title!==''&&document.title===''){
            document.title=title
        }
        document.body.style.margin="0"
        this.styleEle.textContent=fonts+all+customCSS
        document.body.append(this.styleEle)
        document.body.append(this.element)
    }
}
import {st_svg,fonts,css,LRStruct} from '../dist/mod.js'
document.head.innerHTML=`<meta charset='utf8'>
<meta name='viewport' content='width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0'>`+document.head.innerHTML
if(!document.head.innerHTML.includes("title")){
    document.head.innerHTML+=`<title>Simple Text</title>`
}
if(!document.head.innerHTML.includes("icon")){
    document.head.innerHTML+=`<link rel='icon' href=${JSON.stringify(st_svg)}>`
}
document.body.style.margin="0"
const style=document.createElement('style')
style.textContent=fonts+css.all
document.body.append(style)
const lRStruct=new LRStruct()
document.body.append(lRStruct.element)
import {all} from './lib/css'
export interface InitOptions{
    css?:string
    root?:Window
}
export function init(options:InitOptions={}){
    const root=options.root??window
    if(root.document.head.querySelector('meta[charset]')===null){
        const meta=document.createElement('meta')
        meta.setAttribute('charset','utf8')
        root.document.head.append(meta)
    }
    if(root.document.head.querySelector('meta[name="viewport"]')===null){
        const meta=document.createElement('meta')
        meta.name='viewport'
        meta.content='width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0'
        root.document.head.append(meta)
    }
    const style=document.createElement('style')
    style.textContent=all
    root.document.head.append(style)
    if(options.css!==undefined){
        const style=document.createElement('style')
        style.textContent=options.css
        root.document.head.append(style)
    }
}
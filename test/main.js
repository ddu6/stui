import {LRStruct} from '../mod.js'
const lrStruct=window.lrStruct=new LRStruct('Test')
document.head.append(lrStruct.styleEle)
document.body.append(lrStruct.element)
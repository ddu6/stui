import {createASStruct, init} from '../mod.js'
init()
const style = document.createElement('style')
style.textContent = `@import url("../main.css");
@import url("../struct.css");`
document.head.append(style)
document.body.append(createASStruct().element)
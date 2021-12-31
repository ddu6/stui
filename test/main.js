import {createLRStruct,init} from '../mod.js'
const window=open()
window.document.documentElement.dataset.colorScheme='dark'
init({window})
window.document.body.append(createLRStruct({window}).element)
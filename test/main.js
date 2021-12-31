import {createLRStruct,init} from '../mod.js'
const root=open()
root.document.documentElement.dataset.colorScheme='dark'
init({root})
root.document.body.append(createLRStruct({root}).element)
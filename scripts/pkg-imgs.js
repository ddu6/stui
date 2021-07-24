const fs=require('fs')
const path=require('path')
let out=''
for(const fileName of fs.readdirSync(path.join(__dirname,'../imgs'))){
    let [name,format]=fileName.split('.')
    name=name.replace(/-/g,'_')+'_'+format
    if(format==='svg'){
        format='svg+xml'
    }
    out+=`export const ${name}="data:image/${format};base64,${
        fs.readFileSync(path.join(__dirname,'../imgs/'+fileName)).toString('base64')
    }"\n`
}
fs.writeFileSync(path.join(__dirname,'../src/lib/imgs.ts'),out)
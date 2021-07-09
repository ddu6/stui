const fs=require('fs')
const path=require('path')
let out=''
for(const fileName of fs.readdirSync(path.join(__dirname,'../imgs'))){
    const array=fileName.split('.')
    const format=array[array.length-1]
    const name=array[0].replace(/-/g,'_')+'_'+format
    const sformat=format==='svg'?'svg+xml':format
    out+=`export const ${name}=\`data:image/${sformat};base64,${fs.readFileSync(path.join(__dirname,'../imgs/'+fileName)).toString('base64')}\`\n`
}
fs.writeFileSync(path.join(__dirname,'../src/lib/imgs.ts'),out)
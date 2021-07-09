const fs=require('fs')
const path=require('path')
const snames=[]
let out=''
for(const fileName of fs.readdirSync(path.join(__dirname,'../fonts'))){
    const array=fileName.split('.')
    const name=array[0]
    const sname=name.replace(/-/g,'_')
    const format=array[array.length-1]
    snames.push(sname)
    out+=`export const ${sname}=\`@font-face{font-family:"${name}";src:url("data:font/${format};base64,${fs.readFileSync(path.join(__dirname,'../fonts/'+fileName)).toString('base64')}") format("${format}");}\`\n`
}
out+=`export const fonts=${snames.join('+')}`
fs.writeFileSync(path.join(__dirname,'../src/lib/fonts.ts'),out)
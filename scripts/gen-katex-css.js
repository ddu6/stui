const fs=require('fs')
const path=require('path')
fs.appendFileSync(path.join(__dirname,'../css/0.katex.css'),fixURLInCSS(fs.readFileSync(path.join(__dirname,'../node_modules/katex/dist/katex.css'),{encoding:'utf8'}),'https://cdn.jsdelivr.net/npm/katex/dist/'))
function isRelURL(url){
    return (!url.startsWith('data:')
        &&!url.startsWith('#')
        &&!url.startsWith('https://')
        &&!url.startsWith('http://')
    )
}
function relURLToAbsURL(url,dirOrAbsURL){
    try{
        return new URL(url,dirOrAbsURL).href
    }catch(err){
        console.log(err)
        return url
    }
}
function fixURLInCSS(string,dirOrAbsURL){
    return string.replace(/url\(\s*['"]?(.*?)(['"]?)\s*\)/g,(match,url,mark)=>{
        if(typeof url!=='string'){
            return match
        }
        if(mark==='"'||mark==="'"){
            url=url.replace(/\\(.)/g,'$1')
        }
        if(!isRelURL(url)){
            return match
        }
        return `url(${JSON.stringify(relURLToAbsURL(url,dirOrAbsURL))})`
    })
}
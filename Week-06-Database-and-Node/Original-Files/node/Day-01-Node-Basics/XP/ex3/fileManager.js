const fs = require('fs')

const readFile = (name)=> {
    fs.readFile(name, 'utf-8', (err, data)=>{
        if(err) console.log(err)
        
        console.log(data)
    })
}

const writeFile = (name, content)=>{
    fs.writeFile(name, content, (err)=>{
        console.log(err)
    })
}

module.exports = {readFile, writeFile}
const fs = require('fs')


const read = ()=> {
    fs.readFile('file-data.txt', 'utf-8', (err, content)=>{
    if (err) console.log(err)

    console.log(content)
})
}

module.exports = read
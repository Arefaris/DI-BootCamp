import fs from 'fs'

console.log('before')

// try {
//     const data = fs.readFileSync('main.js', 'utf-8')
//     console.log(data)
// }catch(e) {
//     console.log(e)
// }


// fs.readFile('app.js', 'utf-8', (err, data)=>{
//     if(err) {
//         console.log(err)
//         return;
//     }

//     console.log(data)
// })

const users = [ {
    name: 'john',
}, ]


// fs.writeFile('users.json', JSON.stringify(users), 'utf-8', (err)=>{
//     if(err) console.log(err)
// })

// fs.appendFile('users', 'Marry', 'utf-8', err =>{
//     if (err) {
//         co
//     }
// })

fs.copyFile('users', 'users_copy', err=>{})
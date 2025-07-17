const greet = require('./task1/greeting.js')

console.log(greet('john'))

const req = require('./task2/colorful-message.js').default

console.log(req('how are you'))


const read = require('./files/read-files.js')

read()

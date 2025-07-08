import greet from './helpers/greeting.cjs'
import {
    displayColorMessage,
    displayErrorMessage
} from './helpers/colorful-message.js'

console.log(greet('John'))
displayColorMessage()
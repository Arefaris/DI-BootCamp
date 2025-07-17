const arr = require("./products.js")

const search = (name) => {
    const cookie = arr.find((cookie) => cookie.name === name);
    
    if (cookie) {
        return `${cookie.name} price ${cookie.price} category ${cookie.category}`;
    } else {
        return 'Not found';
    }
};


console.log(search('cookie small'))
console.log(search('cookie mid'))
console.log(search('cookie big'))
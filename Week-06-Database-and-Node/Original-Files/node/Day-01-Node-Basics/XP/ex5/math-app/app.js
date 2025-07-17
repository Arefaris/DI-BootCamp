// app.js
const _ = require('lodash');
const math = require('./math');

const nums = [2, 4, 6];

const sum = _.reduce(nums, (acc, num) => math.add(acc, num), 0);
const product = _.reduce(nums, (acc, num) => math.multiply(acc, num), 1);

console.log('Numbers:', nums);
console.log('Sum:', sum);
console.log('Product:', product);

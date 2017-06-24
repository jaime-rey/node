/**
 * Created by Jaime on 17/06/2017.
 */
let m = require('mmm');

console.log('time after first require: '+m.now);

console.log("add: " + m.add(3, 5));
console.log("multiply: " + m.multiply(4, 5));
console.log("factorize: " + m.factorial(4));

setTimeout(()=>{
    m = require('./node_modules/math-module/mmm');
    console.log('time after second require: '+m.now);
}, 5000);

console.log('one event loop cycle');

setTimeout(()=>{
    console.log('diferent cycle');
}, 100);

console.log('same cycle');
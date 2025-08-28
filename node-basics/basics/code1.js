const math = require('./math'); //import in node use require() for import from another file
const { add, subFn } = require('./math');


console.log('Hey there! I\'m JS');


console.log(add(3, 4));
console.log(subFn(3, 4));

console.log(math.add(3, 4));
console.log(math.subFn(3, 4));

console.log(math.Add);
console.log(math.Sub);
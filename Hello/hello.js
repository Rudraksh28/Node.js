// What is Module in Node.js
// In Node.js, any JavaScript file can act as a module, 
// and you can define functionality within that file that can be exported and 
// used in other parts of your application.

// If you don't write ./ then it will find the module in inbuilt or external package list.
// const math = require("math"); 
// You will get error module not found.

// Write ./ if you want to get module from your current directory.
const math = require("./maths");

console.log("Value is : ", math);
// console.log("Value is : ", math.add(3,4));
// console.log("Value is : ", math.sub(8,4));
console.log("Value is : ", math.addFun(3,4));
console.log("Value is : ", math.subFun(8,4));

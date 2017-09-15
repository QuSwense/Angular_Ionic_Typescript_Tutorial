/*
* Example of Typescript 2.5 Data Types Part 2
* Compile with tsc --target es6
*/
/*
* Symbol Types
*/
console.log('****** Symbol Primitive Type ********');
// Declare a symbol
let symbolDefault = Symbol();
let symbolWithKey = Symbol("key");
let symbolForPrivateMethod = Symbol("key");
// Declare a private method with no name and only key value to access
this[symbolForPrivateMethod] = function () {
    console.log('function with symbol key');
};
// Log
this[symbolForPrivateMethod]();
// Save to array
let objectData = {};
objectData[symbolWithKey] = "value1";
objectData["WithKey"] = "value2";
console.log(Object.getOwnPropertyNames(objectData));

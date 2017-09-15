/*
* Example of Typescript 2.5 Data Types Part 2
* Compile with tsc --target es6
*/

/*
* Symbol Types
*/
console.log('****** Symbol Primitive Type ********');

// Declare a symbol
let symbolDefault: symbol = Symbol();
let symbolWithKey: symbol = Symbol("key");
let symbolForPrivateMethod: symbol = Symbol("key");

// Declare a private method with no name and only key value to access
this[symbolForPrivateMethod] = function() {
    console.log('function with symbol key');
}

// Log
this[symbolForPrivateMethod]();

// Save to array
let objectData = {};
objectData[symbolWithKey] = "value1";
objectData["WithKey"] = "value2";

// Symbol hides the property name
// Symbol properties are ignored
console.log(Object.getOwnPropertyNames(objectData));
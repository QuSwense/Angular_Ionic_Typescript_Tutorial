/*
* Example of Typescript 2.5 Data Types
*/
/*
* Boolean Types
*/
console.log('****** Boolean Primitive Type ********');
// This is not a primitive type. Notice the Capital 'B' in 'Boolean'
// This is an object and is boxed
var isBooleanDataType = false;
// This is a native primitive type
var isBooleanDataTypeLowerCase = true;
/*
* Object Boolean type
It has other properties
*/
// Prints normal value
console.log('Returns value: ' + isBooleanDataType);
// Returns a primitive 'boolean' value
console.log('Returns primitive data type which prints value: ' + Boolean(true));
// Can be used as a constructor, prints an object
console.log('Returns an Object: ' + new Boolean(true));
// 
console.log(isBooleanDataTypeLowerCase);
/*
* Number Types
*/
console.log('\n****** Number Primitive Type ********');
// Binary number
var binaryNumber = 11;
// Decimal
var decimalNumber = 6;
// Octal
var octalNumber = 61;
// Hexadecimal
var hexadecimalNumber = 0xfa9;
// Scientific
var scientificNumber = 10e2;
//
console.log('Binary: ' + binaryNumber.toString(2));
console.log('Decimal: ' + decimalNumber);
console.log('Octal as decimal: ' + octalNumber);
console.log('Hexadecimal as octal: ' + hexadecimalNumber.toString(8));
console.log('Scientific: ' + scientificNumber);
/*
* String Types
*/
console.log('\n****** String Primitive Type ********');
var nameStringDouble = "Rambo's brother";
var nameStringSingle = 'John "The" terrible';
var ageInTemplate = 9;
var sentenceTemplate = "I am " + nameStringDouble + " and I will be " + (ageInTemplate + 1) + " years old during Diwali";
console.log('Double quote with Single quote data: ' + nameStringDouble);
console.log('Single quote with Double quote data: ' + nameStringSingle);
console.log('Template Value : ' + sentenceTemplate);
/*
* void Type
*/
console.log('\n****** Void Primitive Type ********');
// No use of such variable as it can only have null or undefined value
var voidVariable = null;
// Use in functions
function tellMe() {
    console.log('Inside tellMe() function');
}
// It returns 'undefined' value
console.log("void function type: " + tellMe());
/*
* null and undefined Type
*/
console.log('\n****** Null and Undefined Type ********');
// Null is an object
var nullData = null;
// Undefined is a type
var undefinedData = undefined;
function returnTypeUndefined() {
    ;
}
console.log("Null type: " + typeof (null));
console.log("Undefined type: " + typeof (undefinedData));
console.log("Type of return for returnTypeUndefined: " + returnTypeUndefined());
/*
* never Type
*/
console.log('\n****** Never Type ********');
function throwException() {
    throw new Error("The Program ends here");
}
function nothrowException() {
    ;
}
var varCheck;
try {
    varCheck = throwException();
}
catch (_a) {
    console.log("Type of return for throwException: " + varCheck);
}

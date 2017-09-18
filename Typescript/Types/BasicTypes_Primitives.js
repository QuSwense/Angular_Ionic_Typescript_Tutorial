"use strict";
exports.__esModule = true;
/*
* Import
*/
var basic = require("../Basic");
/*
* Example of Typescript 2.5 Data Types
*/
/*
* Boolean Types
*/
basic.printHeaderPrimitiveType('Boolean');
// This is not a primitive type. Notice the Capital 'B' in 'Boolean'
// This is an object and is boxed
var isBooleanDataType = false;
// This is a native primitive type
var isBooleanDataTypeLowerCase = true;
// Object type with new
var booleanNewObjectType = new Boolean(true);
// Object type with new
var booleanObjectType = Boolean(false);
basic.printValue({ isBooleanDataType: isBooleanDataType });
basic.printValue({ isBooleanDataTypeLowerCase: isBooleanDataTypeLowerCase });
basic.printValue({ booleanNewObjectType: booleanNewObjectType });
basic.printValue({ booleanObjectType: booleanObjectType });
/*
* Number Types
*/
basic.printHeaderPrimitiveType('Number');
// Binary number
var binaryNumber = 11;
var binaryString = binaryNumber.toString(2);
// Decimal
var decimalNumber = -6;
// Octal
var octalNumber = 61;
//let octalNumber2: number = 075; // Octal literals not available
// Hexadecimal
var hexadecimalNumber = 0xfa9;
// Scientific
var scientificNumber = 10e2;
var scientificString = scientificNumber.toExponential();
// Float
var floatNumber = 56.789;
// Print in Boolean
basic.printValue({ binaryNumber: binaryNumber });
basic.printValue({ binaryString: binaryString });
basic.printValue({ decimalNumber: decimalNumber });
basic.printValue({ decimalNumber: decimalNumber });
basic.printValue({ octalNumber: octalNumber });
basic.printValue({ hexadecimalNumber: hexadecimalNumber });
basic.printValue({ scientificNumber: scientificNumber });
basic.printValue({ scientificString: scientificString });
basic.printValue({ floatNumber: floatNumber });
/*
* String Types
*/
basic.printHeaderPrimitiveType('String');
var nameStringDouble = "Rambo's brother";
var nameStringSingle = 'John "The" terrible';
var ageInTemplate = 9;
var sentenceTemplate = "I am " + nameStringDouble + " and I will be " + (ageInTemplate + 1) + " years old during Diwali";
basic.printValue({ nameStringDouble: nameStringDouble });
basic.printValue({ nameStringSingle: nameStringSingle });
basic.printValue({ ageInTemplate: ageInTemplate });
basic.printValue({ sentenceTemplate: sentenceTemplate });
/*
* void Type
*/
basic.printHeaderPrimitiveType('Void');
// No use of such variable as it can only have null or undefined value
var voidVariable = null;
// Use in functions
function tellMe() {
    console.log('Inside tellMe() function');
}
// It returns 'undefined' value
basic.printValue({ voidVariable: voidVariable });
basic.printValue2("void function type: ", tellMe());
/*
* null and undefined Type
*/
basic.printHeaderPrimitiveType('Null and Undefined');
// Null is an object
var nullData = null;
// Check the type
var nullType = typeof (null);
// Undefined is a type
var undefinedData = undefined;
function returnTypeUndefined() {
    ;
}
basic.printType({ nullData: nullData });
basic.printValue({ nullType: nullType });
basic.printType({ undefinedData: undefinedData });
basic.printValue2("Type of return for returnTypeUndefined", returnTypeUndefined());
/*
* never Type
*/
basic.printHeaderPrimitiveType('Never');
function throwException() {
    throw new Error("The Program ends here");
}
var varCheck;
try {
    varCheck = throwException();
}
catch (_a) {
    console.log("Type of return for throwException: " + varCheck);
}

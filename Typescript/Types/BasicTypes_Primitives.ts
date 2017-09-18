/*
* Import
*/
import * as basic from '../Basic';

/*
* Example of Typescript 2.5 Data Types
*/

/*
* Boolean Types
*/
basic.printHeaderPrimitiveType('Boolean');

// This is not a primitive type. Notice the Capital 'B' in 'Boolean'
// This is an object and is boxed
let isBooleanDataType: Boolean = false;

// This is a native primitive type
let isBooleanDataTypeLowerCase: boolean = true;

// Object type with new
let booleanNewObjectType: Boolean = new Boolean(true);

// Object type with new
let booleanObjectType: Boolean = Boolean(false);

basic.printValue({isBooleanDataType});
basic.printValue({isBooleanDataTypeLowerCase});
basic.printValue({booleanNewObjectType});
basic.printValue({booleanObjectType});

/*
* Number Types
*/
basic.printHeaderPrimitiveType('Number');

// Binary number
let binaryNumber: number = 0b1011;
let binaryString: string = binaryNumber.toString(2);
// Decimal
let decimalNumber: number = -6;
// Octal
let octalNumber: number = 0o75;
//let octalNumber2: number = 075; // Octal literals not available
// Hexadecimal
let hexadecimalNumber: number = 0xfa9;
// Scientific
let scientificNumber: number = 10e2;
let scientificString: string = scientificNumber.toExponential();
// Float
let floatNumber: number = 56.789;

// Print in Boolean
basic.printValue({binaryNumber});
basic.printValue({binaryString});
basic.printValue({decimalNumber});
basic.printValue({decimalNumber});
basic.printValue({octalNumber});
basic.printValue({hexadecimalNumber});
basic.printValue({scientificNumber});
basic.printValue({scientificString});
basic.printValue({floatNumber});

/*
* String Types
*/
basic.printHeaderPrimitiveType('String');

let nameStringDouble: string = "Rambo's brother";
let nameStringSingle: string = 'John "The" terrible';
let ageInTemplate: number = 9;
let sentenceTemplate: string = `I am ${nameStringDouble} and I will be ${ageInTemplate + 1} years old during Diwali`;

basic.printValue({nameStringDouble});
basic.printValue({nameStringSingle});
basic.printValue({ageInTemplate});
basic.printValue({sentenceTemplate});

/*
* void Type
*/
basic.printHeaderPrimitiveType('Void');

// No use of such variable as it can only have null or undefined value
let voidVariable: void = null;

// Use in functions
function tellMe() : void {
    console.log('Inside tellMe() function');
}

// It returns 'undefined' value
basic.printValue({voidVariable});
basic.printValue2("void function type: ", tellMe());

/*
* null and undefined Type
*/
basic.printHeaderPrimitiveType('Null and Undefined');

// Null is an object
let nullData: any = null;
// Check the type
let nullType: string = typeof(null);
// Undefined is a type
let undefinedData: any = undefined;

function returnTypeUndefined(): void {
    ;
}

basic.printType({nullData});
basic.printValue({nullType});
basic.printType({undefinedData});
basic.printValue2("Type of return for returnTypeUndefined", returnTypeUndefined());

/*
* never Type
*/
basic.printHeaderPrimitiveType('Never');

function throwException(): never {
    throw new Error("The Program ends here");
}

let varCheck: never;
try{
    varCheck = throwException();
}
catch {
    console.log("Type of return for throwException: " + varCheck);
}

"use strict";
exports.__esModule = true;
var basic = require("../Basic");
/*
* Arrays (Basic Type)
*/
basic.printHeader('Array');
// Boolean Array
var booleanArray = [true, false, true, true];
// number array
var numberArray = [12, 55, 0xff, 7, 34e2];
basic.printValue2('The second element', booleanArray[1]);
basic.printValue2('Array length', booleanArray.length);
// Reassign
basic.printHeader('Reassign Array');
booleanArray = [false, true];
basic.printValue2('The second element', booleanArray[1]);
basic.printValue2('Array length', booleanArray.length);
basic.printValue({ numberArray: numberArray });
/*
* Tuples (Basic Type)
*/
basic.printHeader('Tuple');
var tupleArray = ["Hello", 20, true, 11];
basic.printValue({ tupleArray: tupleArray });
var tupleTypeData = [true, "Tuple type"];
basic.printValue({ tupleTypeData: tupleTypeData });
var interfaceTupleData = [90, false];
basic.printValue({ interfaceTupleData: interfaceTupleData });
/*
* Enum (Basic Type)
*/
basic.printHeader('Enum');
var ECar;
(function (ECar) {
    ECar[ECar["Maruti"] = 0] = "Maruti";
    ECar[ECar["Tata"] = 1] = "Tata";
    ECar[ECar["Honda"] = 2] = "Honda";
})(ECar || (ECar = {}));
;
var enumCarObj = ECar.Honda;
basic.printValue2('Enum type (value): ', enumCarObj);
basic.printValue2('Enum type (name): ', ECar[enumCarObj]);

"use strict";
exports.__esModule = true;
var basic = require("../Basic");
/*
* Interface Types
*/
basic.printHeader('Interface type');
// interface type in function
function example1(interfaceObject) {
    console.log("example1 called with " + basic.printData(interfaceObject.val1) + " and " + basic.printData(interfaceObject.val2));
}
example1({ val1: "Hello", val2: 90 });
var intObj = { val1: "Using Interface", val2: 10 };
example1(intObj);
basic.printHeader('Interface type - Optional');
function example2(interfaceObject) {
    console.log("example1 called with " + basic.printData(interfaceObject.val1) + " and " + basic.printData(interfaceObject.val2));
}
example2({ val1: "Only me" });
// Once declared cannot be chnaged
var interfaceROObj = { val1: "Fixed", val2: 89 };
var interfaceROObj2 = { val1: "Fixed", val2: 89, val3: true };
// Reassign
interfaceROObj.val2 = 39;
(function exampleRO(data) {
    basic.printValue({ data: data });
})(interfaceROObj2);
basic.printHeader('Interface type - Index');
var indexedObj = ["val1", "val2"];
basic.printValue({ indexedObj: indexedObj });
function createObject() {
    var obj = function (val) {
        return "createObject as Function " + val;
    };
    obj.data = 90;
    obj.func = function () {
        return "func function";
    };
    return obj;
}
var iHybridObj = createObject();
// print the whole object
basic.printValue({ iHybridObj: iHybridObj });
// print as a method
basic.printValue2("Call as method: ", iHybridObj(23));
// Call internal method
basic.printValue2("Call method property: ", iHybridObj.func());
// Print property
basic.printValue2("Print property: ", iHybridObj.data);

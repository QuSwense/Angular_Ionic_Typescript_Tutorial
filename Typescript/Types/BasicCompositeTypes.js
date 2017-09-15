/*
* Arrays (Basic Type)
*/
console.log('\n****** Array Type ********');
// Boolean Array
var booleanArray = [true, false, true, true];
// number array
var numberArray = [12, 55, 0xff, 7, 34e2];
console.log('The second element: ' + booleanArray[1]);
console.log('Array length: ' + booleanArray.length);
// Reassign
console.log('****** Reassign boolean array');
booleanArray = [false, true];
console.log('The second element: ' + booleanArray[1]);
console.log('Array length: ' + booleanArray.length);
console.log('****** number array');
console.log(numberArray);
/*
* Tuples (Basic Type)
*/
console.log('\n****** Tuple Type ********');
var tupleArray = ["Hello", 20, true, 11];
console.log("Tuple array: ", tupleArray);
var tupleTypeData = [true, "Tuple type"];
console.log("Tuple Type: ", tupleTypeData);
var interfaceTupleData = [90, false];
console.log("Tuple Interface Type: ", interfaceTupleData);
/*
* Enum (Basic Type)
*/
console.log('\n****** Enum Type ********');
var ECar;
(function (ECar) {
    ECar[ECar["Maruti"] = 0] = "Maruti";
    ECar[ECar["Tata"] = 1] = "Tata";
    ECar[ECar["Honda"] = 2] = "Honda";
})(ECar || (ECar = {}));
;
var enumCarObj = ECar.Honda;
console.log('Enum type (value): ', enumCarObj);
console.log('Enum type (name): ', ECar[enumCarObj]);

/*
* Arrays (Basic Type)
*/
console.log('\n****** Array Type ********');

// Boolean Array
let booleanArray: boolean[] = [true, false, true, true];
// number array
let numberArray: Array<number> = [12, 0o67, 0xff, 0b0111, 34e2];

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

let tupleArray: [string, number, boolean, number] = ["Hello", 20, true, 11];
console.log("Tuple array: ", tupleArray);

// Create a new Array type using tuple
type Tuple = [boolean, string];
let tupleTypeData: Tuple = [true, "Tuple type"];

console.log("Tuple Type: ",  tupleTypeData);

// Create a interface type of tuple with index numbers
interface ITuple {
    0: number,
    1: boolean
}

let interfaceTupleData: ITuple = [90, false];

console.log("Tuple Interface Type: ",  interfaceTupleData);

/*
* Enum (Basic Type)
*/
console.log('\n****** Enum Type ********');

enum ECar { Maruti, Tata, Honda };
let enumCarObj: ECar = ECar.Honda;

console.log('Enum type (value): ', enumCarObj);
console.log('Enum type (name): ', ECar[enumCarObj]);
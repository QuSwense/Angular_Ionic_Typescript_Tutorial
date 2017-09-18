import * as basic from '../Basic';

/*
* Arrays (Basic Type)
*/
basic.printHeader('Array');

// Boolean Array
let booleanArray: boolean[] = [true, false, true, true];
// number array
let numberArray: Array<number> = [12, 0o67, 0xff, 0b0111, 34e2];

basic.printValue2('The second element', booleanArray[1]);
basic.printValue2('Array length', booleanArray.length);

// Reassign
basic.printHeader('Reassign Array');
booleanArray = [false, true];

basic.printValue2('The second element', booleanArray[1]);
basic.printValue2('Array length', booleanArray.length);

basic.printValue({numberArray});

/*
* Tuples (Basic Type)
*/
basic.printHeader('Tuple');

let tupleArray: [string, number, boolean, number] = ["Hello", 20, true, 11];

basic.printValue({tupleArray});

// Create a new Array type using tuple
type Tuple = [boolean, string];
let tupleTypeData: Tuple = [true, "Tuple type"];

basic.printValue({tupleTypeData});

// Create a interface type of tuple with index numbers
interface ITuple {
    0: number,
    1: boolean
}

let interfaceTupleData: ITuple = [90, false];

basic.printValue({interfaceTupleData});

/*
* Enum (Basic Type)
*/
basic.printHeader('Enum');

enum ECar { Maruti, Tata, Honda };
let enumCarObj: ECar = ECar.Honda;

basic.printValue2('Enum type (value): ', enumCarObj);
basic.printValue2('Enum type (name): ', ECar[enumCarObj]);
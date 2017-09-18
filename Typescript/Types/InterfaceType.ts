import * as basic from '../Basic';

/*
* Interface Types
*/
basic.printHeader('Interface type');

// interface type in function
function example1(interfaceObject: {val1: string, val2: number}) {
    console.log(`example1 called with ${basic.printData(interfaceObject.val1)} and ${basic.printData(interfaceObject.val2)}`);
}

example1({val1: "Hello", val2: 90});

// Interface type
interface IExample {
    val1: string,
    val2: number
}
let intObj: IExample = {val1: "Using Interface", val2: 10};

example1(intObj);

basic.printHeader('Interface type - Optional');

// Optional properties
interface IExample2 {
    val1: string;
    val2?: number;
}

function example2(interfaceObject: IExample2) {
    console.log(`example1 called with ${basic.printData(interfaceObject.val1)} and ${basic.printData(interfaceObject.val2)}`);
}

example2({val1: "Only me"});

// readonly property
interface IExampleRO {
    readonly val1: string;
    val2: number;
    val3?: boolean;
}

// Once declared cannot be chnaged
let interfaceROObj: IExampleRO = {val1: "Fixed", val2: 89};
let interfaceROObj2: IExampleRO = {val1: "Fixed", val2: 89, val3: true};

// Reassign
interfaceROObj.val2 = 39;

(function exampleRO(data: IExampleRO) {
    basic.printValue({data});
})(interfaceROObj2);

basic.printHeader('Interface type - Index');

// Indexable type
interface IIndexable {
    [index: number] : string;
}

let indexedObj: IIndexable = ["val1", "val2"];

basic.printValue({indexedObj});

// Class Type

// Hybrid Types
interface IFuncAndData {
    (val: number): string;
    data: number;
    func(): void;
}

function createObject(): IFuncAndData {
    let obj = <IFuncAndData> function (val: number): string {
        return `createObject as Function ${val}`;
    }
    obj.data = 90;
    obj.func = function() {
        return "func function";
    }

    return obj;
}

let iHybridObj: IFuncAndData = createObject();

// print the whole object
basic.printValue({iHybridObj});
// print as a method
basic.printValue2("Call as method: ", iHybridObj(23));
// Call internal method
basic.printValue2("Call method property: ", iHybridObj.func());
// Print property
basic.printValue2("Print property: ", iHybridObj.data);
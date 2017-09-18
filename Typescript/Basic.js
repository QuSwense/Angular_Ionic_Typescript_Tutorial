"use strict";
exports.__esModule = true;
/*
* By default a single file depicts a module in typescript
* Use 'export' keyword to export anything
*/
function printHeaderPrimitiveType(text) {
    console.log(getHeaderPrimitiveType(text));
}
exports.printHeaderPrimitiveType = printHeaderPrimitiveType;
function printHeader(text) {
    console.log(getHeader(text));
}
exports.printHeader = printHeader;
function printValue(data) {
    printDataValue(Object.keys(data)[0].toString(), data[Object.keys(data)[0]]);
}
exports.printValue = printValue;
function printValue2(header, value) {
    printDataValue(header, value);
}
exports.printValue2 = printValue2;
function printType(data) {
    printDataValue(Object.keys(data)[0].toString(), typeof (data[Object.keys(data)[0]]));
}
exports.printType = printType;
function printData(data) {
    if (isWin10)
        return "\u001B[1;36m" + data + "\u001B[0m";
}
exports.printData = printData;
/*
* Declare all other private methods, types here so that all are in one place
* Good design practice
*/
var isWin10 = true;
/**
 * Get header text
 * @param text
 */
function getHeader(text) {
    if (isWin10)
        return "\u001B[95m****** " + text + " ********\u001B[0m";
    else
        return "****** " + text + " ********";
}
function getHeaderPrimitiveType(text) {
    return getHeader(text + " Primitive Type");
}
function printDataValue(head, value) {
    if (isWin10)
        console.log('\x1b[92m', head, ': \x1b[0m', value);
    else
        console.log(head, ': ', value);
}

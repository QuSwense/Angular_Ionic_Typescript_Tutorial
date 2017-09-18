/*
* By default a single file depicts a module in typescript
* Use 'export' keyword to export anything
*/
export function printHeaderPrimitiveType(text: string) {
    console.log(getHeaderPrimitiveType(text));
}

export function printHeader(text: string) {
    console.log(getHeader(text));
}

export function printValue(data: any) {
    printDataValue(Object.keys(data)[0].toString(), data[Object.keys(data)[0]]);
}

export function printValue2(header: string, value: any) {
    printDataValue(header, value);
}

export function printType(data: any) {
    printDataValue(Object.keys(data)[0].toString(), typeof(data[Object.keys(data)[0]]));
}

export function printData(data: any) {
    if(isWin10)
        return `\x1b[1;36m${data}\x1b[0m`;
}

/*
* Declare all other private methods, types here so that all are in one place
* Good design practice
*/

let isWin10: boolean = true;

/**
 * Get header text
 * @param text 
 */
function getHeader(text: string): string {
    if(isWin10)
        return `\x1b[95m****** ${text} ********\x1b[0m`;
    else
        return `****** ${text} ********`;
}

function getHeaderPrimitiveType(text: string): string {
    return getHeader(`${text} Primitive Type`);
}

function printDataValue(head: string, value: string) {
    if(isWin10)
        console.log('\x1b[92m', head, ': \x1b[0m', value);
    else
        console.log(head, ': ', value);
}
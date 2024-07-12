function addd(a: number, b: number): number {
    return a + b;
}

console.log(addd(2,3))


function echo(message: string): void {
    console.log(message.toUpperCase());
}
(echo("Jan"))
function sub(a: number, b: number) {
    return a-b;
}

console.log(sub(3,2));


function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

console.log(multiply(2,3,3));




function getDay(year: number = new Date().getFullYear(), month: number): number {
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            // leap year
            if (((year % 4 == 0) &&
                !(year % 100 == 0))
                || (year % 400 == 0))
                day = 29;
            else
                day = 28;
            break;
        default:
            throw Error('Invalid month');
    }
    return day;
}

let day = getDay(2019, 2);
console.log(day); 


function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(getTotal()); 
console.log(getTotal(10, 20)); 
console.log(getTotal(10, 20, 30)); 


function calc(a: any, b: any): any {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Invalid arguments');
}

console.log(calc(10, 20));  
console.log(calc('Hello, ', 'world!'));  



function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}


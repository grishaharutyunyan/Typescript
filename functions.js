function addd(a, b) {
    return a + b;
}
console.log(addd(2, 3));
function echo(message) {
    console.log(message.toUpperCase());
}
(echo("Jan"));
function sub(a, b) {
    return a - b;
}
console.log(sub(3, 2));
function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
console.log(multiply(2, 3, 3));
function getDay(year, month) {
    if (year === void 0) { year = new Date().getFullYear(); }
    var day = 0;
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
var day = getDay(2019, 2);
console.log(day);
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log(getTotal());
console.log(getTotal(10, 20));
console.log(getTotal(10, 20, 30));
function calc(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Invalid arguments');
}
console.log(calc(10, 20));
console.log(calc('Hello, ', 'world!'));
function sum(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}



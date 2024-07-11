var namea = 'John';
var age = 25;
var active = true;
var names = ['John', 'Jane', 'Peter', 'David', 'Mary'];
var numbers = [1, 2, 3, 4, 5, 6];
var person;
person = {
    name: "Alo",
    age: 19,
};
var greeting;
greeting = function (name) {
    return "Hi ".concat(name);
};
//typescript number 
var price;
price = 99.5;
var bin = 4;
var anotherBin = 2;
var octal = 8;
var hexadecimal = 0XA;
// let big: bigint = 9007199254740991n;
// TypeScript String
var firstName = "G";
var title = "Backend Developer";
var profile = "I'm ".concat(firstName, ". \nI'm a ").concat(title);
console.log(profile);
//TypeScript Boolean
var hasError = false;
var completed = true;
//TypeScript Object
var employee = {
    firstName: 'Dudu',
    lastName: 'Bubu',
    age: 25,
    jobTitle: 'Web Developer'
};
// let vacant: {};
// vacant.firstName = 'John'; //error will get 
var vacant = {};
console.log(vacant.toString());
//TypeScript Array
var skills = [];
skills[0] = "Programing";
skills.push("Problem solving");
console.log(skills);
var series = [1, 2, 3, 4];
console.log(series.length);
var doubleSeries = series.map(function (e) { return e * 2; });
console.log(doubleSeries);
var scores = ['Programming', 5, 'Software Design', 4];
console.log(scores);
var ab12;
ab12 = ['a', 1, 'b', 2];
console.log(ab12);
//      Typescript Tuple
// A tuple works like an array with some additional considerations:
// The number of elements in the tuple is fixed.
// The types of elements are known, and need not be the same.
var skils;
skils = ['Programming', 5];
var color;
color = [255, 0, 0];
var bgColor, headerColor;
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
//TypeScript enum 
var Month;
(function (Month) {
    Month[Month["Jan"] = 1] = "Jan";
    Month[Month["Feb"] = 2] = "Feb";
    Month[Month["Mar"] = 3] = "Mar";
    Month[Month["Apr"] = 4] = "Apr";
    Month[Month["May"] = 5] = "May";
    Month[Month["Jun"] = 6] = "Jun";
    Month[Month["Jul"] = 7] = "Jul";
    Month[Month["Aug"] = 8] = "Aug";
    Month[Month["Sep"] = 9] = "Sep";
    Month[Month["Oct"] = 10] = "Oct";
    Month[Month["Nov"] = 11] = "Nov";
    Month[Month["Dec"] = 12] = "Dec";
})(Month || (Month = {}));
;
console.log(Month);
function isItSummer(month) {
    var isSummer;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(isItSummer(Month.Jun));
//TypeScript any Type
var someValue;
someValue = 5;
console.log(someValue);
someValue = "Hello";
console.log(someValue);
someValue = true;
console.log(someValue);
someValue = { key: "value" };
console.log(someValue);
//any as argument of function 
function logValue(value) {
    console.log(value);
}
logValue(123); // 123
logValue("A string"); // A string
logValue([1, 2, 3]); // [1, 2, 3]
logValue({ a: 1 }); // { a: 1 }
// array with any elements 
var mixedArray = [1, "two", true, { key: "value" }];
mixedArray.forEach(function (element) {
    console.log(element);
});
var obj = {};
obj.name = "Alice";
obj.age = 30;
obj.isStudent = true;
console.log(obj);
// { name: "Alice", age: 30, isStudent: true }
//TypeScript Never
function raiseError(message) {
    throw new Error(message);
}
raiseError("My dear bubuuuuuu");
//TypeScript Union type

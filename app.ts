let namea: string = 'John';
let age: number = 25;
let active: boolean = true;
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
let numbers : number[] = [1,2,3,4,5,6];

let person :{
    name : string;
    age : number;
};
person = {
    name :"Alo",
    age : 19 ,
};

 
let greeting: (name: string) => string;
greeting = function(name: string) {
    return `Hi ${name}`;
}


//typescript number 

let price: number;
price = 99.5;

let bin = 0b100;
let anotherBin: number = 0B010;
let octal: number = 0o10;
let hexadecimal: number = 0XA;

// let big: bigint = 9007199254740991n;

// TypeScript String


let firstName: string = `G`;
let title: string = `Backend Developer`;
let profile: string = `I'm ${firstName}. 
I'm a ${title}`;

console.log(profile);

//TypeScript Boolean

const hasError: boolean = false;
const completed: boolean = true;

//TypeScript Object

let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'Dudu',
    lastName: 'Bubu',
    age: 25,
    jobTitle: 'Web Developer'
};


// let vacant: {};
// vacant.firstName = 'John'; //error will get 

let vacant: {} = {};

console.log(vacant.toString());

//TypeScript Array

let skills: string[] = [];
skills[0] = "Programing"
skills.push("Problem solving")

console.log(skills);

let series = [1,2,3,4]
console.log(series.length)

let doubleSeries = series.map(e => e *2 )

console.log(doubleSeries);

let scores = ['Programming', 5, 'Software Design', 4]; 
console.log(scores)

let ab12 : (string | number)[];
ab12 = ['a', 1, 'b', 2]; 
console.log(ab12);

//      Typescript Tuple
// A tuple works like an array with some additional considerations:

// The number of elements in the tuple is fixed.
// The types of elements are known, and need not be the same.


let skils : [string,number];
skils = ['Programming',5]

let  color : [number,number ,number];
color = [255,0,0]

let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

//TypeScript enum 

enum Month {
    Jan = 1,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};
console.log(Month)

function isItSummer(month: Month) {
    let isSummer: boolean;
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

  let someValue: any;

someValue = 5;          
console.log(someValue); 

someValue = "Hello";    
console.log(someValue); 

someValue = true;       
console.log(someValue); 

someValue = { key: "value" }; 
console.log(someValue);       


//any as argument of function 


function logValue(value: any): void {
    console.log(value);
}

logValue(123);          // 123
logValue("A string");   // A string
logValue([1, 2, 3]);    // [1, 2, 3]
logValue({ a: 1 });     // { a: 1 }


// array with any elements 



let mixedArray: any[] = [1, "two", true, { key: "value" }];

mixedArray.forEach(element => {
    console.log(element);
});


let obj: any = {};

obj.name = "Alice";
obj.age = 30;
obj.isStudent = true;

console.log(obj);
// { name: "Alice", age: 30, isStudent: true }

//TypeScript Never
function raiseError(message: string): never {
    throw new Error(message);
}

// raiseError("My dear bubuuuuuu")

//TypeScript Union type

function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

//TS string type literal 

let variable1: "a" | "b" | "c";
 
variable1 = "a";
console.log(variable1); // No error
 
// variable1 = "d";
// console.log(variable1); // Error



//TypeScript Type Aliases


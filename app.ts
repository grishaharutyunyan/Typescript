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

let big: bigint = 9007199254740991n;

// TypeScript String
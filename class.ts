class Personn{
    id: number;
    name :string;
    lastname :string;

    constructor(id:number,name:string ,lastname :string ) {
      this.id = id;
      this.name = name;
      this.lastname = name
    }


    getfullName():string{
        return `${this.name} ${this.lastname}`
    }
}

let bubu = new Personn(23,'Bubu','Dudu');
console.log(bubu)


class Personchik {
    private ssn: string;
    private firstName: string;
    private lastName: string;
  
    constructor(ssn: string, firstName: string, lastName: string) {
      this.ssn = ssn;
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  let dudu = new Personchik('123','BuBu','DuDu');
//   console.log(dudu.ssn) => error beacause of this is private 

class Employee {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const employe = new Employee('Alice', 30);

console.log(employe.name);  
console.log(employe.age);   
console.log(employe.greet()); 




class Panda {
    readonly dateBirth : Date;

    constructor(dateBirth:Date){
        this.dateBirth =dateBirth
    }
}

let pandushka  = new Panda(new Date(1999, 12, 25));
// pandushka.birthDate = new Date(1991, 12, 25); // Compile error



class Animal {
    constructor(private name: string, private lastname: string) {}

    getFullName(): string {
        return `${this.name} ${this.lastname}`;
    }

    describe(): string {
        return `This is ${this.name} ${this.lastname}`;
    }    
}


class Dog extends Animal {
    constructor(
        name :string ,
        lastname :string, 
        private title :string ){
            super(name ,lastname)
        }
}


let pupy = new Dog('Chicha','Chacha','Huf Huf');

console.log(pupy.getFullName());
console.log(pupy.describe());
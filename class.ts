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
//   console.log(dudu.ssn) => error
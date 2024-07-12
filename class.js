var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personn = /** @class */ (function () {
    function Personn(id, name, lastname) {
        this.id = id;
        this.name = name;
        this.lastname = name;
    }
    Personn.prototype.getfullName = function () {
        return "".concat(this.name, " ").concat(this.lastname);
    };
    return Personn;
}());
var bubu = new Personn(23, 'Bubu', 'Dudu');
console.log(bubu);
var Personchik = /** @class */ (function () {
    function Personchik(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Personchik.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Personchik;
}());
var dudu = new Personchik('123', 'BuBu', 'DuDu');
//   console.log(dudu.ssn) => error beacause of this is private 
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    Employee.prototype.greet = function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    return Employee;
}());
var employe = new Employee('Alice', 30);
console.log(employe.name);
console.log(employe.age);
console.log(employe.greet());
var Panda = /** @class */ (function () {
    function Panda(dateBirth) {
        this.dateBirth = dateBirth;
    }
    return Panda;
}());
var pandushka = new Panda(new Date(1999, 12, 25));
// pandushka.birthDate = new Date(1991, 12, 25); // Compile error
var Animal = /** @class */ (function () {
    function Animal(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    Animal.prototype.getFullName = function () {
        return "".concat(this.name, " ").concat(this.lastname);
    };
    Animal.prototype.describe = function () {
        return "This is ".concat(this.name, " ").concat(this.lastname);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, lastname, title) {
        var _this = _super.call(this, name, lastname) || this;
        _this.title = title;
        return _this;
    }
    return Dog;
}(Animal));
var pupy = new Dog('Chicha', 'Chacha', 'Huf Huf');
console.log(pupy.getFullName());
console.log(pupy.describe());

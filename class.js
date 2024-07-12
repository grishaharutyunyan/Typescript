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

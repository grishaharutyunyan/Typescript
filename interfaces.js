// TypeScript Interface\
var Rectangle = /** @class */ (function () {
    function Rectangle(id, name, width, height) {
        this.id = id;
        this.name = name;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.width + this.height);
    };
    Rectangle.description = function () {
        return "A rectangle is a shape with four sides and four right angles.";
    };
    return Rectangle;
}());
var myRectangle = new Rectangle(1, "MyRectangle", 10, 5);
console.log(myRectangle.id);
console.log(myRectangle.name);
console.log(myRectangle.area());
console.log(myRectangle.perimeter());
console.log(Rectangle.description());

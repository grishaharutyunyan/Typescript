// TypeScript Interface\


interface Shape {
    readonly id: number;
    name: string;
  
   
    area(): number;
    perimeter(): number;
  }
  
  class Rectangle implements Shape {
    readonly id: number;
    name: string;
    width: number;
    height: number;
  
    constructor(id: number, name: string, width: number, height: number) {
      this.id = id;
      this.name = name;
      this.width = width;
      this.height = height;
    }
  
    area(): number {
      return this.width * this.height;
    }
  
    perimeter(): number {
      return 2 * (this.width + this.height);
    }
  
    static description(): string {
      return "A rectangle is a shape with four sides and four right angles.";
    }
  }
  
  const myRectangle = new Rectangle(1, "MyRectangle", 10, 5);
  
  console.log(myRectangle.id); 
  console.log(myRectangle.name);
  console.log(myRectangle.area()); 
  console.log(myRectangle.perimeter()); 
  
  console.log(Rectangle.description()); 


  ///




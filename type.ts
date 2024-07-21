interface Car {
    brand: string;
    model: string;
    year: number;
}

interface Driver {
    name: string;
    age: number;
    license: boolean;
}

type CarAndDriver = Car & Driver;

const carAndDriver: CarAndDriver = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    name: "Alice",
    age: 30,
    license: true
};


console.log(carAndDriver);


type TypeA = {
    propA: number;
};

type TypeB = {
    propB: string;
};

type IntersectionType = TypeA & TypeB;

const obja: IntersectionType = {
    propA: 42,
    propB: "Hello, TypeScript!"
};

console.log(obja);

// Variable declaration with type annotation
let a1: number = 9; // Declaring a variable with type number
console.log(a1);

let fullname: string = "John Doe"; // Declaring a variable with type string
fullname = "rohit";

let no: number = 10; // Declaring another variable with type number
console.log(no);

// Array with number type
const numbers: number[] = []; // Declaring an array of numbers
numbers.push(1); // Adding an element to the array

// Function with return type annotation
function sum(a: number, b: number): number { // Function with parameters and return type
    return a + b;
}
const result = sum(1, 2); // Calling the function
console.log(result);

// Tuple
let address: [string, number] = ["India", 1]; // Declaring a tuple with fixed types

// Object type
let person: { name: string; age: number }; // Declaring an object type
person = {
    name: "rohit",
    age: 23
};

// Optional properties in object
let person1: { name: string; age?: number } = { // Object with optional property
    name: "rohit",
    age: 23
};

// Function with optional parameter
function add(a: number, b: number, c?: number): number { // Function with optional parameter
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
}
console.log(add(1, 2)); // Calling function without optional parameter
console.log(add(1, 2, 3)); // Calling function with optional parameter

// Interface declaration
interface Person { // Declaring an interface
    name: string;
    age: number;
    address: string;
    getName: () => string;
}

let p: Person; // Declaring a variable of type Person
p = {
    name: "rohit",
    age: 23,
    address: "India",
    getName: function (): string {
        return this.name;
    }
};

interface student { // Declaring another interface
    rollno: number;
    name: string;
    age: number;
}

let p1: Person | student; // Union type
p1 = {  
    rollno: 1,
    name: "rohit",
    age: 23
};
let p2: Person & student; // Intersection type
p2 = {
    rollno: 1,
    name: "rohit",
    age: 23,
    address: "India",
    getName: function (): string {
        return this.name;
    }
};

// Object implementing interface
const user: Person = { // Object implementing Person interface
    name: "Rohit",
    age: 23,
    address: "India",
    getName: function (): string {
        return this.name;
    }
};

console.log(user.getName()); // Calling method from interface

// Type alias
type Count = number | string; // Declaring a type alias
let c: Count;
c = 1; // Assigning a number
c = "rohit"; // Assigning a string
// c = false; // Error: Type 'boolean' is not assignable to type 'Count'

// Never type
type x = number & string; // Never type as no value can be both number and string
const n: [] = []; // Declaring an empty array
// n.push(1); // Error: Cannot add elements to an empty array

// Class
class Car { // Declaring a class
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    getBrand() { 
        console.log(this.brand);
    }
}

let c1 = new Car("BMW"); 
c1.getBrand(); // BMW

// Class in TypeScript with shorthand property declaration
class CarX {
    constructor(public brand) { // Using shorthand for property declaration
    }
    getBrand() { 
        console.log(this.brand);
    }
}
let c2 = new CarX("BMW");
c2.getBrand(); // BMW

// Implements
interface CarInterface { // Declaring an interface
    brand: string;
    model: string;
}

class CarC implements CarInterface { // Class implementing an interface
    constructor(public brand: string, public model: string) {
    }
    getBrand() { 
        console.log(this.brand);
    }
}

// Implements multiple interfaces
interface CarInterface2 { // Declaring another interface
    year: number;
}

class Car1 implements CarInterface, CarInterface2 { // Class implementing multiple interfaces
    constructor(public brand: string, public model: string, public year: number) {
    }
    getBrand() { 
        console.log(this.brand);
    }
}
let c3 = new Car1("BMW", "X5", 2020);
c3.getBrand(); // BMW

// Generics
function gen<T>(a: T, b: T): T[] { // Generic function
    return [a, b];
}

gen<number>(1, 2); // Using generics with number
gen<string>("rohit", "kumar"); // Using generics with string
gen<boolean>(true, false); // Using generics with boolean
gen<any>(1, "rohit"); // Using generics with any
gen<number | string>(1, "rohit"); // Using generics with union type
gen<number | string>(1, 2); // Using generics with union type
gen<Array<number>>([1, 2], [3, 4]); // Using generics with array type

function adduser<T extends { id: string }>(user: T) { // Generic function with constraint
    return user.id;
}

function noRestriction(a: any, b: any): any { // Function without type restriction
    return a + b;
}

// Enum
enum CardinalDirections { // Declaring an enum
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);

// Missing Topic: Type Assertion
let someValue: any = "Hello World"; // Declaring a variable with type any
let strLength: number = (someValue as string).length; // Using type assertion
console.log(strLength); // Logs the length of the string

// Missing Topic: Readonly Properties
interface ReadonlyPerson { // Declaring an interface with readonly properties
    readonly name: string;
    readonly age: number;
}
let readonlyPerson: ReadonlyPerson = { name: "John", age: 30 };
// readonlyPerson.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property

// Missing Topic: Index Signatures
interface StringArray { // Declaring an interface with index signature
    [index: number]: string;
}
let myArray: StringArray = ["Hello", "World"];
console.log(myArray[0]); // Logs "Hello"

// Missing Topic: Type Guards
function isString(value: unknown): value is string { // Type guard function
    return typeof value === "string";
}
let unknownValue: unknown = "Hello";
if (isString(unknownValue)) {
    console.log(unknownValue.toUpperCase()); // Logs "HELLO"
}
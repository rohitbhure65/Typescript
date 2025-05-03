// Variable declaration with type annotation
var a1 = 9; // Declaring a variable with type number
console.log(a1);
var fullname = "John Doe"; // Declaring a variable with type string
fullname = "rohit";
var no = 10; // Declaring another variable with type number
console.log(no);
// Array with number type
var numbers = []; // Declaring an array of numbers
numbers.push(1); // Adding an element to the array
// Function with return type annotation
function sum(a, b) {
    return a + b;
}
var result = sum(1, 2); // Calling the function
console.log(result);
// Tuple
var address = ["India", 1]; // Declaring a tuple with fixed types
// Object type
var person; // Declaring an object type
person = {
    name: "rohit",
    age: 23
};
// Optional properties in object
var person1 = {
    name: "rohit",
    age: 23
};
// Function with optional parameter
function add(a, b, c) {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
}
console.log(add(1, 2)); // Calling function without optional parameter
console.log(add(1, 2, 3)); // Calling function with optional parameter
var p; // Declaring a variable of type Person
p = {
    name: "rohit",
    age: 23,
    address: "India",
    getName: function () {
        return this.name;
    }
};
var p1; // Union type
p1 = {
    rollno: 1,
    name: "rohit",
    age: 23
};
var p2; // Intersection type
p2 = {
    rollno: 1,
    name: "rohit",
    age: 23,
    address: "India",
    getName: function () {
        return this.name;
    }
};
// Object implementing interface
var user = {
    name: "Rohit",
    age: 23,
    address: "India",
    getName: function () {
        return this.name;
    }
};
console.log(user.getName()); // Calling method from interface
var c;
c = 1; // Assigning a number
c = "rohit"; // Assigning a string
var n = []; // Declaring an empty array
// n.push(1); // Error: Cannot add elements to an empty array
// Class
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return Car;
}());
var c1 = new Car("BMW");
c1.getBrand(); // BMW
// Class in TypeScript with shorthand property declaration
var CarX = /** @class */ (function () {
    function CarX(brand) {
        this.brand = brand;
    }
    CarX.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarX;
}());
var c2 = new CarX("BMW");
c2.getBrand(); // BMW
var CarC = /** @class */ (function () {
    function CarC(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    CarC.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarC;
}());
var Car1 = /** @class */ (function () {
    function Car1(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car1.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return Car1;
}());
var c3 = new Car1("BMW", "X5", 2020);
c3.getBrand(); // BMW
// Generics
function gen(a, b) {
    return [a, b];
}
gen(1, 2); // Using generics with number
gen("rohit", "kumar"); // Using generics with string
gen(true, false); // Using generics with boolean
gen(1, "rohit"); // Using generics with any
gen(1, "rohit"); // Using generics with union type
gen(1, 2); // Using generics with union type
gen([1, 2], [3, 4]); // Using generics with array type
function adduser(user) {
    return user.id;
}
function noRestriction(a, b) {
    return a + b;
}
// Enum
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "North";
    CardinalDirections["East"] = "East";
    CardinalDirections["South"] = "South";
    CardinalDirections["West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);
// Missing Topic: Type Assertion
var someValue = "Hello World"; // Declaring a variable with type any
var strLength = someValue.length; // Using type assertion
console.log(strLength); // Logs the length of the string
var readonlyPerson = { name: "John", age: 30 };
var myArray = ["Hello", "World"];
console.log(myArray[0]); // Logs "Hello"
// Missing Topic: Type Guards
function isString(value) {
    return typeof value === "string";
}
var unknownValue = "Hello";
if (isString(unknownValue)) {
    console.log(unknownValue.toUpperCase()); // Logs "HELLO"
}

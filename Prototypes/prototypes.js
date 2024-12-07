//todo ----------PROTOTYPES----------------

//^ Js objects have a special property called prototype
//^ Every js objects have internally linked  to another objects called prototype
//^ prototypes allow objects to inherit properties and methods from other objects.
//^ We can set prototypes using __proto__

//~Example 1 

// const employee = {
//     calcTax() {
//         console.log("Tax rate is 10%");
//     }
// }
// const poojaNG = {
//     salary : 100000
// }
// const preethi = {
//     salary : 10000,
//     calcTax() {
//         console.log("Tax rate is 20%");

//     }
// }
// poojaNG.__proto__ = employee
// preethi.__proto__ = employee

//~ Example 2

// function Animal(name){
//     this.name = name
// }

// Animal.prototype.speak = function() {
//     console.log(this.name + ' makes a noise');
// }

// let Dog = new Animal('dog')
// Dog.speak()

//~ Example 3

// function Person(name){
//     this.name = name
// }
// function Product(name){
//     this.name = name
// }
// Person.prototype.greet = function() {
//     console.log(`Hello ${this.name}`);
// }
// Product.prototype.price  = function() {
//     console.log(`price of the product is ${this.name}`);

// }
// let human = new Person("Poo")
// let human2 = new Person("Preethi")
// human.greet()
// human2.greet()
// let chair = new Product(100)
// chair.price()

//^ Prototypes in js allows objects and functions to share methods and properties efficiently.

//~ Example 4 - prototype chaining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

//^ prototype chaining - when we try to access the property or methods of an object, js first looks at the object itself. If it doesn't find, it looks at the object's prototype and so on . until it reaches the end of the chain

// let person = {
//     greet : function() {
//         console.log("Hello");
//     }
// }
// let student = Object.create(person) //* student inherits from the person
// student.name = "Pooja"
// student.greet()
// console.log(student.name); //* Inherited from person

//^ prototype chain limitations
//! if a property is deeply nested in the prototype chain, accessing it can be slower because javascript has to traverse the chain
//! Modifying a property on a instance doesn't affect the prototype. It only affects the instance.

function Animal() {
}
Animal.prototype.sound = "Animal sound"
const cat = new Animal() 
cat.sound = "Meow"
console.log(cat.sound);
console.log(Animal.prototype.sound);

//~ Example 5

// let student = {
//     sName: "pree",
//     class: 10,
//     wish: function () {
//         console.log("Good morning mam")
//     }
// }
// let candidate = Object.create(student) 
// candidate.grade = " A"
// candidate.wish()
// console.log(candidate.sName);
// console.log(student.class);

//~ Example 6

//^ creating a constructor function and using prototypes

// function Laptop(name, model){
//     this.name = name
//     this.model = model
// }
// Laptop.prototype.checkDetails = function() {
//     console.log(`I have a ${this.name} with model ${this.model}`);
// }
// let newLaptop = new Laptop("Hp", 2001)
// newLaptop.checkDetails()

//~ Exampple 7

function employee(name , designation, salary) {
    this.name = name 
    this.designation = designation
    this.salary = salary
}
employee.prototype.checkEmployee = function() {
    console.log(`${this.name}`);
}
let firstEmp = new employee('Preethi', 'Mbbs', 100000)
console.log(firstEmp);
firstEmp.checkEmployee()

//^ __proto__ vs prototype
//! proto is a property of every object
//! it points to the objects prototype

//! prototype is a property of a function
//! it is used when you create objects using a constructor function or class

function Person(name){
    this.name = name
}
console.log(Person.prototype);
console.log(Person.__proto__);
console.log(Person.__proto__);
const Person1 = new Person("Pooja")
console.log(Person1);
console.log(Person1.__proto__);
console.log(Person.prototype === Person1.__proto__);

//^ Inheriting from prototypes
//! we can create object that inherit from other objects using Object.create

const animal = {
    eats : true,
    walk : function() {
        console.log("Animal walks");
    }
}
const dog = Object.create(animal)
dog.barks = true
console.log(dog.eats); //Inherited property
console.log(dog.barks); //own property
dog.walk()


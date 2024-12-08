//todo --------------CLASS--------------------------------

//^ classes are templates for creating objects
//^ classes encapsulate data and behaviour and provide a cleaner code compared to function constructors.

//~ Example 1 

// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     greet() {
//         console.log(`Hello Im ${this.name} and age is ${this.age}`);
//     }
// }
// const person1 = new Person("Pooja", 10)
// person1.greet()

//~ Example 2 

// class Student {
//     constructor(stuName, grade){
//         this.stuName = stuName
//         this.grade = grade
//     }
//     stuDetails(){
//         console.log(`Student name is ${this.stuName} and grade is ${this.grade}`);
//     }
// }
// const student1 = new Student("Arya", "A")
// student1.stuDetails()

//~ Example 3

// class AudiCar {
//     start() {
//         console.log("start")
//     }
//     stop() {
//         console.log("stop")
//     }
//     setBrand(brand) {
//         this.brand = brand
//     }
// }
// console.log(AudiCar);
// let fortuner = new AudiCar()
// fortuner.setBrand = "fortuner"
// let lexus = new AudiCar()
// lexus.setBrand("lexus")
// lexus.start()
// lexus.stop()

//~ Example 4
//! adding methods

// class Reac{
//     width = 0
//     height = 0
//     constructor(width, height){
//         this.width = width
//         this.height = height
//     }
//     redct() {
//         return this.width * this.height
//     }
// }
// const react1 = new Reac(4,4)
// console.log(react1.redct());

//~ Example 5
//^ getters and setters

// class Person {
//     constructor(name){
//         this._name = name
//     }

//     get name() {
//         return this._name
//     }
//     set name(newName) {
//         if(newName.length > 0){
//             this._name = newName
//         }
//         else {
//             console.log("Name must be not empty");
//         }
//     }
// }
// const person = new Person("Pachu")
// console.log(person.name);
// person.name = "he"
// console.log(person.name);

//~ Example 6 
//^ Inheritance
//! classes can inherit from other classes using the extends keyword
//! This allows class to reuse methods and properties from the parent class

// class Animal{
//     constructor(name){
//         this.name = name
//     }
//     eat() {
//         console.log(`${this.name} is eating`);
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log(`${this.name} is barking`);  
//     }
// }
// const dog = new Dog("Tuffy")
// dog.bark()
// dog.eat()


//~ Example 7
//^ Overriding methods
//! Overriding in js classes occurs when a child class provides a specific implementation of a method that is already defined in its parent class

// class Animal{
//     constructor(name){
//         this.name = name
//     }
//     bark() {
//         console.log(`This animal named ${this.name} barked`); 
//     }
// }
// class Dog extends Animal {
//     bark() {
//         console.log(`This animal not barked`);
        
//     }
// }
// const newDog = new Dog("Bwonie")
// newDog.bark()

//~ Example 8
//^ super keyword
//! Using super keyword to access the parent method

class Animal {
    constructor(name) {
        this.name = name
    }
    sound (name) {
        console.log(`${this.name} Animal makes sound`);
    }
} 
class Cat extends Animal {
    sound(name) {
        super.sound(name)
        console.log("sound ended");
    }
}
const cat = new Cat ("Meow")
cat.sound()

//~Example 9
//^using classes as modules

//^Exporting a class
//! to make a class available for use
//! named exports and defaults exports

//& Named exports : 
// export class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age 
//     }
//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

//& default export

export default class classes {
    constructor(name, age) {
        this.name = name
        this.age = age 
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
        
    }
}

//^ Importing a class
//! You can import the exported class into another file using the import statement.

//& Importing a named statement

// import {classes} from './classes.js'
// const classe = new classes("Ppoo", 89)
// classe.greet()

//& importing a default statement

import classes from './classes.js'
const classe = new classe("Preeth", 90)
classe.greet()
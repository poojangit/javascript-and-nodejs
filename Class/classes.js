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

class Animal{
    constructor(name){
        this.name = name
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}
class Dog extends Animal{
    bark(){
        console.log(`${this.name} is barking`);  
    }
}
const dog = new Dog("Tuffy")
dog.bark()
dog.eat()






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

class AudiCar {
    start() {
        console.log("start")
    }
    stop() {
        console.log("stop")
    }
    setBrand(brand) {
        this.brand = brand
    }
}
console.log(AudiCar);
let fortuner = new AudiCar()
fortuner.setBrand = "fortuner"
let lexus = new AudiCar()
lexus.setBrand("lexus")


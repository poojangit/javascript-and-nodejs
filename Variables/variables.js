// todo ----------VARIABLES-------------------------

// ^ 1.var

// ! Global scope with var----------

// var message = "Good morning"
// function greet(){
//     console.log(message);
// }
// greet()
// console.log(message);

// ! Function scope with var 

// function greet() {
//     var wish = "Happy Birthday"
//     console.log(wish); 

//     if(true){
//         console.log("Still Accessable");
//         var greet = "good night"
//     }
//     console.log(greet);   
// }
// greet()
// console.log(wish); //not accessable

// ! Block scope with var

// {
//     var age = 30
//     console.log(age);
// }
// console.log(age);

// Declared in block-scope and accessed inside the function scope ----------->

// {
//     var cname = "Priya"
// }
// console.log(cname);

// function customer(){
//     console.log(cname); 
// }
// customer()

// ^ 2.let

// ! global scope with let

// let sub = "java"
// console.log(sub);
// function letExample() {
//     console.log(sub);
// }
// console.log(sub);
// {
//     console.log(sub);
    
// }

// ! function scope with let

// function conceptsToCover() {
//     let firstConcept = "scope"
//     console.log(firstConcept);
//     console.log(firstConcept);
// }
// conceptsToCover()
// console.log(firstConcept); //Not accessable

// ! block scope with let

// {
//     let area = 1000
//     console.log(area);
// }
// console.log(area); // not accessable

// {
//     let brand = "Lenovo"
//     function product() {
//         console.log(brand);
//     }
//     product()
// }
// product()
// function product1() {
//     console.log(brand);
// }
// product1() //not accessable

// ^ 3. const

// ! global scope with const

// const number = 100
// function fixedNumber() {
//     console.log(number);
// }
// fixedNumber()
// console.log(number);

// ! function scope with const

// function nonChangingNumber() {
//     const digit = 2
//     console.log(digit);
// }
// nonChangingNumber()
// console.log(digit); //not accessable

// ! block scope with const

// {
//     const college = "VVCE"
//     console.log(college);
// }
// console.log(college); //not accessable





// todo -----------------FUNCTIONS----------------------------------

// ! --------Named functions ---------------

// function wish(name){
//     console.log(`Happy anniversary ${name}`);
// }
// wish('Riya');

// sayGoodBye() //cannot access

// const sayGoodBye = function fareWell() {
//     console.log("Good bye");
// }
// sayGoodBye()

// function sayHello() {
//     console.log("Hello");
// }
// sayHello = "hi"
// sayHello()

// * hoisting in named function ----> hoisted

// details()
// function details(){
//     console.log("Person name is Ayush");
// }

//! Function Expressions 

// const mul = function(a,b) { // anonymous function expression
//     return a + b 
// }
// console.log(mul(10,20));

// const greet = function greeting(){ // named function expression
//     console.log("Hello everyone");
// }
// greet()
// greeting() // error : greeting is not defined


// * hoisting in function expression ----> not hoisted
// pack()    // cannot access 
// const pack = function bag(){
//     console.log("library of books");
// }

//! IIFE

//~ anonymous
// (function() {
//     console.log("Hello Good morning");
// })()

//~ named 

// (function greet() {
//     console.log("Hello Im Named IIFE");
// })
// ()

// * hoisting in IIFE ----> not hoisted
// counter().increment()
// const counter = (function(){
//     var count = 0
//     return {
//         increment : function() {
//             count ++
//             console.log(count); 
//         },
//         decrement : function() {
//             count --
//             console.log(count);
//         }
//     }
// })
// counter().increment()
// counter().decrement()


//! HOF

// function Calculation (n,m, MathOperation){
//     return MathOperation(n,m)
// }
// const addition = (a,b) => a+b
// console.log(Calculation(100,200, addition ));

// * hoisting in HOF ----> hoisted

// console.log(calculation(square, 4));

// function calculation(func, value) {
//     return func(value)
// }
// function square(x) {
//  return x*x
// }
// function cube(a){
//     return a*a*a
// }
// console.log(calculation(square, 4));
// console.log(calculation(cube,3));


//! CallBack function

// function dataFetch(CallBack) {
//     setTimeout(()=> {
//         CallBack("Data fetched!")
//     },1000)
// }
// dataFetch((message)=> console.log(message))

// *  hoisting in callback ----> hoisted
// greet("Lohitha", sayGoodBye)

// function greet(name,callback){
//     console.log("Hello " + name);
//     callback()
// }
// function sayGoodBye() {
//     console.log("Good Bye");
// }

// greet("Lohitha", sayGoodBye)


//! Arrow functions 

// const sub = (a,b) => a-b
// console.log(sub(10,20));

// const greet = () => {
//     console.log("Im arrow function without parameter");
// }
// greet()

// *  hoisting in arrow function ----> not hoisted
// hoistCheck()
// const hoistCheck = () => {
//     console.log("Im checking hoisting in arrow function--> Not accessable");
// }
//! Anonymous functions 

// setTimeout(function(){
//     console.log("Im anonymous");
// }, 1000)

// const add = function(a,b) {
//     return a+b-a/2
// }
// console.log(add(24, 24));

// *  hoisting in anonymous function ----> not hoisted
// greet()
// const greet = function() {
//     console.log("Hello");
// }
// greet()


//! Async functions

// async function fetchData(){
//    const response = await fetch("https://www.api.org")
//    console.log(response);
//    const data =  await response.json()
//    console.log(data);
// }
// fetchData()
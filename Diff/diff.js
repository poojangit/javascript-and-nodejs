// todo ------Differences between synchronous and asyncronous

//! Synchronous part ---------------->

//^ Everything that happens inside a function execution stack is sequential.
// ^ This is a synchronous part of the javascript
// ^ Javascript's main thread takes care of everything that is inside the function execution context before its start looking into elsewhere.

// function f1() {
// }
// function f2() {
//     f1()
// }
// function f3() {
//     f2()
// }
// f1()
// f2()
// f3()

//! Asynchronous part ----------------->

// ^ Async - Not occuring at the same time
// ^ In javascript, Asynchrous operations can be triggered only with two things
// ~ 1. Browser API/ WEB API - setTimeout. click handler, mouse handler
// ~ 2. Promises - promises are the unique objects that allow us to make asynchronous operations.

// ~ 1. with Browser APIs 

// & :::::EVENT LOOP ::::::
// ^ when the code finds the browser api from the code , it pushes it into a callback queue
// ^ It pulls the callback function from the callback queue to the call stack only when the call stack is empty.
// ^ Now the call back function from the call stack , it gets executed and again the loop continues

// function testAsync(){
//     console.log("first code");
// }
// function second(){
//     console.log("Second code");
// }
// setTimeout(testAsync, 2000);
// second()
// -------------------------------------------------------------
// function f1() {
//     console.log('f1');
// }
// function f2() {
//     console.log('f2');
// }
// function main() {
//     console.log('main');
//     setTimeout(f1,0)
//     f2()
// }
// main()

// ~ 2. with Promises 

// ^ The promise constructor takes function as an argument and that function is called executor function
// ^ Handler methods that promise provide - then, catch & finally
// & ::::::EVENT LOOP::::::::::
// ^ whenevevr there is a promise , the executor function for a promise, gets placed into the Job Queue/MicroTasks.
// ^ The first preference b/w callback queue and job queue is job queue.

// const promise = new Promise(function(resolve, reject){
//     resolve('I am a resolved promise!!')
// })
// promise.then(result => console.log(result))
// ----------------------------------------------------------------------------

// function f1() {
//     console.log('f1');
// }
// function f2() {
//     console.log('f2');
// }
// function main() {
//     console.log('main');
//     setTimeout(f1,0) // goes to the callback queue
//     new Promise(function(resolve, reject){ // goes to a microtask queue
//         resolve("Promise got resolved");
//     }).then(result => console.log(result))
//     f2()
// }
// main()
// ------------------------------------------------------------------

// function f1() {
//     console.log('f1');
// }
// console.log("Lets fo it");

// setTimeout(function(){
//     console.log('in set time out')
// },0)

// f1()
// f1()
// f1()
// f1()

//todo ----------Differences between Regular function and arrow function

// ^ Arrow function::::::::::
// ^ 1. also called fat arrow function. Introduced in ES6.

// let add = (x,y) => x+y // Regular exp
// console.log(add(1,2));

// let add = x => x+x   //arrow function
// console.log(add(10));


// !Argument binding -------------


// let myFunc = {        //Regular function
//     showArgs() {
//         console.log(arguments);
//     }
// }
// myFunc.showArgs(1,2,3,4)

// let myFunc = {        // arrow function does not have an argument binding.
//     showArgs : () => {
//         console.log(...arguments);
//     }
// }
// myFunc.showArgs(1,2,3,4,5)

// ! Use of this key word

// ^ Arrow functions does not have their own this keyword

// let me = {
//     name : "Pooja",
//     thisInArrow:() => {
//         console.log("My name is " + this.name); //No this binding here
//     },
//     thisInRegular() {
//         console.log("My name is " + this.name); //this works here
//     }
// }
// me.thisInArrow()
// me.thisInRegular()

// ! using new keyword

// ^Regular function created using function declaration and function expression are constructable and callable.
// ^Regular function can be called using new keyword.

// ^Arrow functions can only be callable and not constructable
// ^Arrow function can never be used as constructor functions
// ^Arrow functions can never be invoked with new keyword

// let add = (x,y) => console.log(x+y);
// new add(10,20)  // add is not a constructor

// ! No dublicate named parameter

// ^Arrow functions can never have a dublicate named parameters, whether in strict or non-strict mode.

// function add(x,x){}

// 'use strict';
// function add(x,x){}

// (x,x) => {}
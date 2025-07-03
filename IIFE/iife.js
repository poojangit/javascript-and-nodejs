//todo -------IIFE---------------

//^ It is a function in javascript that runs immediately after it is defined.
//^ It does not require any explicit function call
//**why IIFE? */
//! To avoid polluting the global scope
//! to make things private
//! to run async code with await at the top level
//**Real time use case */
//! Initializing application config
//! Creating singleton services
//! Hiding internal variables in a library
//! Top-level await Workaround in Nodejs

//~Example 1
// (
//     function() {
//         console.log("Hello im IIFE!");
//     }
// )()

//~Example 2

// (function(name){
//         console.log(`My name is ${name}`);
//     }
// )("Pooja")

//~Example 3

(function(){
    var message = "This is a message"
    console.log(message);
})();

//~Example 4

// const counter = (function(){
//     let count = 0
//     return {
//         increment : function() {
//             count++;
//             console.log(count);
//         },
//         reset : function() {
//             count = 0
//             console.log("counter resetted");
//         }
//     }
// })()
// counter.increment()
// counter.increment()
// counter.reset()
// counter.increment()

//~ Example 5 --Arrow function IIFE---------------

// (()=> {
//     const message = "Arrow function iife"
//     console.log(message)
// })();

//~ Example 6 --- IIFE for Module Pattern (Pre-ES6)

// const MyModule = (function() {
//     let privateVar = "secret"
//     function privateFunc() {
//         return `Accessing: ${privateVar}`
//     }
//     return {
//         publicMethod() {
//             return privateFunc()
//         }
//     }
// })();
// console.log(MyModule.publicMethod());

//~ Example 7 ----Async/await in IIFE

// (async()=> {
//     const data = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     const result = await data.json()
//     console.log(result);
// })();

//~ Example 8 ---Named IIFE(for recursion & debugging)

const fact = (function factorial(n){
    if(n<=1){
        return 1
    }
    return n*factorial(n-1)
})(5)
console.log(fact)


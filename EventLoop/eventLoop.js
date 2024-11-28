// todo ----------EVENT LOOP ----------------

// ^ How Js executes the code using call stack
//& Javascript is a single threaded
//& Js will have only one call stack and can do one task at a time
//& the call stack is present inside the js engine.

// function a () {
//     console.log("Event loop");
// }
// a()
// console.log("End");

//& when the javascript code runs the global execution context(GEC) will get created.
//& the GEC runs the code line by line
//& First it will start with function a declaration
//& Then when we get the function invocation that is a() , The execution context will get created upon the GEC
//& now it will check the invoked function call a() and executes its function and a will get printed.
//& Then EC will get popped out
//& Again in GEC , the remaining code runs and "end will get printed"

//^ Main Job of the call stack

//& Anything which comes inside the call stack it quickly gets executed and does not wait

//^ Web APIs/Browser APIs
//& setTimeOut
//& DOM APIs
//& fetch()
//& Local Storage
//& console
//& Location

//^ Event Loop and call back queue

// console.log("start");
// setTimeout(function cb() {
//     console.log("Im CallBack");
// },1000)
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");

// console.log("start");
// document.getElementById("btn").addEventListener("click", function cb() {
//     console.log("Im callback");
// })
// console.log("end");

//^ Microtask queue in js(Highest priority)
//^ Promises goes inside the microtask.

console.log("start");
setTimeout(function cbS(){
    console.log("cb set time out");
},5000)
fetch("https://api.netflix.com").then(function cbF(){
    console.log("cb netflix");
})
console.log("end");







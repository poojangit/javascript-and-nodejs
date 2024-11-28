//todo ----------CALLBACKs---------------------

//^ 1. CallBacks are the functions that is passed as an  argument to another function.
//^ 2. It is used for handling the asynchronous operations such as fetching dta from an API or reading files.

// Basic example of callback------------>
// function product(laptop){
//     console.log("Im inside product");
//     laptop()
// }
// function myLaptop() {
//     console.log("This is my laptop");
// }
// product(myLaptop)

//!Examples

//^ 1. Synchronous callbacks ----------->

// function order(name, callback){
//     console.log(`Order a ${name}` );
//     callback()
// }
// order("chocolate" , function(){
//     console.log("Ordered successfully");
// })

//^ 2. Asynchronous callbacks ---------->

// function timeManagement(callback){
//     setTimeout(() => {
//         callback()
//     }, 5000);
// }
// timeManagement(()=>{
//     console.log("Time up");
// })

// function speek(callback) {
//     setTimeout(function() {
//         callback()
//     },2000)
// }
// speek(function() {
//     console.log("You can start to speak");
// })

//^ 3. Using Event handling

// document.getElementById("btn").addEventListener("click", function() {
//     console.log("Did you just click?");
// })
//todo -------IIFE---------------

//^ It is a function in javascript that runs immediately after it is defined.
//^ It does not require any explicit fumction call
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
    var message = "This ia a message"
    console.log(message);
})()

//~Example 4

const counter = (function(){
    let counter = 0
    return {
        increment : function() {
            counter++;
            console.log(counter);
        },
        reset : function() {
            counter = 0
            console.log("counter resetted");
        }
    }
})()
counter.increment()
counter.increment()
counter.reset()
counter.increment()

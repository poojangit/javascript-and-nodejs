//todo -------------HOF--------------

//^ Higher order function takes another function as an argument or return a function as a result

//~ Example 1 ------------------

function greet(name){
    return function(message){
        console.log(`Hello ${name} ${message}`);
    }
}
const greetWithName = greet("Pooja")
greetWithName("Good Morning")

//~ Example 2 ------------------




//Todo ---------Decorators and Forwarding
//^ Decorators is a wrapper function that takes another function(or class/methods/property) and enchances or modifies its behavior.
//^ Forwarding is a way to pass arguments or properties from one function or class to another
//^ Decorators are a powerful feature in JavaScript that allow you to modify the behavior of classes and methods.
//^ They can be used to add functionality, modify parameters, or even change the return value of a function.

//**use cases */
//^ 1. Loging: You can use decorators to log the execution time of a function or method.
//^ 2. Validation: You can use decorators to validate the parameters of a function or

//~Example - 1------Decorators
//^ wraps and extends another function/method's behavious

function logDecorator(fn){
    return function(...args){
        console.log(`calling a function ${fn.name} with args: `, args);
        return fn(...args)
    }

}
function add(a,b){
    return a+b
}
const decorator = logDecorator(add)
console.log(decorator(1,3));

//~ Example 2 -----Forwarding---------
//^ passes the original arguments and this to the inner function 

function logAndForward(fn){
 return function(...args){
    console.log("Calling with", args);
    return fn.apply(this,args)
 }
}
const multiply = (a,b) => a*b
const wrapped = logAndForward(multiply)
console.log(wrapped(2,4));



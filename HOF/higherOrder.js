//todo -------------HOF--------------

//^ Higher order function takes another function as an argument or return a function as a result

//~ Example 1 ------------------

// function greet(name){
//     return function(message){
//         console.log(`Hello ${name} ${message}`);
//     }
// }
// const greetWithName = greet("Pooja")
// greetWithName("Good Morning")

//~ Example 2 ------------------

// function x(){
//     console.log("Hello");
// }
// function y(x){
//     x()
// }

//~ Example 3 

//! Basic logic

// const radius = [3,1,2,4]
// const calcArea = function (radius) {
//     const output = []
//     for(let i=0; i<radius.length;i++){
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output
// }
// console.log(calcArea(radius));

// const calcCircumferance = function (radius) {
//     const output = []
//     for(let i=0; i<radius.length;i++){
//         output.push(2*(Math.PI * radius[i]))
//     }
//     return output
// }
// console.log(calcCircumferance(radius));

// const calcDiameter = function (radius) {
//     const output = []
//     for(let i=0; i<radius.length;i++){
//         output.push(2*radius[i])
//     }
//     return output
// }
// console.log(calcDiameter(radius));

//! using hof

const radius = [3,1,2,4]

const area = function(radius){
    return Math.PI*radius*radius
}
const circumferance = function(radius){
    return 2*Math.PI*radius
}
const diameter = function(radius){
    return Math.PI*radius
}

// const calculate = function (radius, logic){
//     const output = []
//     for(let i=0; i<radius.length;i++){
//         output.push(logic(radius[i]))
//     }
//     return output
// }
// console.log(calculate(radius,area));
// console.log(calculate(radius, circumferance));
// console.log(calculate(radius,diameter));

console.log(radius.map(area));

//~ Example 4

function add5(x) {
    return x + 5
  }
  
  function multiplyBy2(x) {
    return x * 2
  }
  
  function compose(f, g) {
    return function(x) {
      return f(g(x))
    }
  }
  
  const add5AndMultiplyBy2 = compose(multiplyBy2, add5);
  console.log(add5AndMultiplyBy2(3))

//~ Example 5

function delayTheExecution(message){
    return function(delay){
        setTimeout(()=> {
            console.log(message);
        },delay)
    }
}
const delayedMessage = delayTheExecution("This is my delayed message")
delayedMessage()


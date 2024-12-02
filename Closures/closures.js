//todo ----------CLOSURES---------------------------

//^ Closure is a function that has access to its lexical scope in which it has been defined even when the function is executed outside the scope.
//^ whenever we are declaring function inside another function we are actually creating a closures.

//~ Example 1

// function outerFunction(outerVariable){
//     return function innerFunction(innervariable){
//         console.log(`Outer : ${outerVariable} Inner : ${innervariable}`);
//     }
// }
// const closureFunction = outerFunction("Hello")
// closureFunction("world")

//~ Example 2

// function developer() {
//     var name = 'pooja'
//     function displayName() {
//         console.log(name);
//     }
//     return displayName
// }
// var devName = developer()
// devName()

//~ Example 3

// function x() {
//     var a = 7
//     function y() {
//         console.log(a);
//     }
//     y()
// }
// x()

//~ Example 4

// function x() {
//     var a = 7
//     function y() {
//         console.log(a);
//     }
//     return y
// }
// var z = x()
// console.log(z);
// z()

//~ Example 5
// function x() {
//     var a = 7
//     function y() {
//         console.log(a);
//     }
//     a = 100
//     return y
// }
// var z = x()
// console.log(z);
// z()

//~ Example 6

function z() {
    var b = 1000
    function x() {
        var a = 7
        function y() {
            console.log(a, b);
        }
        y()
    }
    x()
}
z()

//^ Uses of closures

//! Functions like once
//! memoize
// ! setTimeouts
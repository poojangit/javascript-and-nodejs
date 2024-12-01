//todo ----------CLOSURES---------------------------

//^ Closure is a function that has access to its lexical scope in which it has been defined even when the function is executed outside the scope.
//^ whenever we are declaring function inside another function we are actually creating a closures.

//~ Example 1

function outerFunction(outerVariable){
    return function innerFunction(innervariable){
        console.log(`Outer : ${outerVariable} Inner : ${innervariable}`);
    }
}
const closureFunction = outerFunction("Hello")
closureFunction("world")
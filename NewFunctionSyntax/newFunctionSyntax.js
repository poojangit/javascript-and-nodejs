//todo --------New function syntax--------------

//^ new Function() creates a new function object dynamically from a string
//^ Better to use New function syntax instead of eval()
//^ where eval() runs in both local and global scope but new Function() runns in global scope only
//^ new Function() is safer than eval()


//~ Example 1 -----------------

let func = new Function('a','b', "return a+b")
console.log(func);
console.log(func(2,3))

//~ example 2 -----------------

const greet = new Function ('console.log("hello pooja")')
greet()

//~ Example 3 ---------------

for(let i=0 ; i<3 ; i++) {
    const func = new Function('return ' + i)
    console.log(func());
}

//~ Example 4 - no closure access

// let x = 10
// const show = new Function('return x')
// console.log(show()); //! error

//~ Example 5 --Simple expression evaluator 

function evaluateExpression(a,b , operator){
    // const exp = `return ${a} ${operator} ${b}`
    const evaluvate = new Function(`return ${a} ${operator} ${b}`)
    return evaluvate()
    // return new Function()
}
console.log(evaluateExpression(1,3, '+'))

//~ example 6 --- Custom sort order

const users = [
    {name : "Pooja", age : 12},
    {name : "Preethi", age : 77},
    {name : "Pachuu", age : 22}
]
function customSortByAge(arr, prop){
  const dynamic = new Function("a", "b", `return a['${prop}'] - b['${prop}']`)
  return arr.sort(dynamic)
}
console.log(customSortByAge(users, "age"));

//~ Example 7 ---Dynamic function generator

function multiplier(number){
    return new Function('x ', `return x * ${number}`)
}
const fact = multiplier(3)
console.log(fact(10));

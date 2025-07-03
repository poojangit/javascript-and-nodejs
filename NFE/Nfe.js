//todo -------NFE - Named function expression----------------

//^ it is when we assign a function with name to a variable
//* Best use-case:
//^ self recursive functions
//^ Encapsulation where internal logic needs a name but shouldn't pollute outer scope

//~ Example 1 ------

const sayHello = function greet(message) {
    console.log(`Hello! Pooja ${message}`);
}
sayHello("How are you")

//~ Example 2-------
//^ allows internal recursion 

const greet = function sayHi(name){
    if(!name){
        return sayHi("Guest")
    } 
    console.log(`hello ${name}`);
    
}
greet();
greet("Preethi")

//~ Example 3 -------

const welcomeThem = (name) => {
    console.log(name);
}
welcomeThem("Welcome to bridgelabz")

//~ Sum of array

const sumArray = (...arr)=> arr.reduce((acc, curr) => acc+curr, 0)
console.log(sumArray(2,3,6,9));

//~ Find Maximum without loops

const findMax = (arr) => Math.max(...arr)
console.log(findMax([1,38,28]));

//~ Palindrome check

const isPalindrome =(str) => {
    const cleanStr = str.toLowerCase()
    const reverseStr = cleanStr.split("").reverse().join('')
    return cleanStr === reverseStr
}
console.log(isPalindrome("Madam"))

//~ Fibonacci using recursion(Function+algo)

const fib = (n)=>{
    if(n<=1) {
        return n
    }
    return fib(n-1)+fib(n-2)
}
console.log(fib(8));

//~ Flatten a nested array (Logical)
 
const flatten = (arr) => {
    return arr.reduce((flat, curr) => {
        return flat.concat(Array.isArray(curr) ? flatten(curr) : curr)
    },[])
}
console.log(flatten([1,[2,3,[3,5]]]))

//~ Word frequency counter 

const wordFrequency = (text) => {
    return text.toLowerCase().split(" ").reduce((freq, word) => {
        freq[word] = (freq[word] || 0) + 1
        return freq
    }, {})
}

console.log(wordFrequency("Hello pooja hello all"));

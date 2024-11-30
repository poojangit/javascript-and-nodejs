//todo----------ES6(2015)-------------------------

//! Arrow functions

const add = (a, b) => a + b
console.log(add(10, 20));

//! let and const

// let a = 10
// const b = 90

//! Template literal

const cName = "shadow"
console.log(`My cat name is ${cName}`);

//! Destructuring

const [a, b] = [1, 2]
const { pName } = { pName: "Laptop" }
console.log(pName);

//! Default Parameters

function greet(name = 'Guest') {
    console.log(`Hello, ${name}`);
}

//! Rest and Spread Operators

function sum(...nums){
    return nums.reduce((a,b) => a+b,0)
}
const arr1 = [1,2,3]
const arrr2 = [...arr1, 4,5]
console.log(arrr2);

//! Promises

//! Modules(import/export)

// import {React} from 'react'

//! classes

class Candidate {
    constructor(cName){
        this.cName = cName
    }
}

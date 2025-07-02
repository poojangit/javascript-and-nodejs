console.log("This is a simple JavaScript code snippet.");

console.log(100);
console.log(20, 'Hello World', true, null, undefined, [1, 2, 3]);
const x = 10;
console.log(x);
console.error("This is an error message.");
console.warn("This is a warning message.");
console.info("This is an informational message.");
console.table([{Name : "pooja", email : "pooja@gmail.com"}, {Name : "pooja1", email : "hello@gmail.com" }]);
console.group("Group 1");

// console.error(x)
console.groupEnd("hi") //alt+up/down key for moving the code

const style = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', style)
console.log('%cHello World', style);
console.log('%cHello World', style); // shift+alt+up key for coping
console.log('%cHello World', style);

//todo Data types --------------------------

let firstName = 'Pooja';
let lastName = 'ng';
let age = 20;
console.log(firstName, lastName);
age = 21;
console.log(age);
let score;
score = 1;
console.log(score);
if(true){
    score = score + 1;
}
console.log(score);

const y = 500;
console.log(y);

const arr = [1,2,3,4]
arr.push(5);
console.log(arr);

const person = {
    name : "Deepika"
}
console.log(person);
person.name = "Laksmi"
person.email = "lax@gmail.com"
console.log(person);

//declare multiple values at once
let a, b, c;
console.log(a);

//Primitive Data types
//String
const fName = "Pooja"
//Number
const age1 = 20
const temp = 29.28

//Boolean
const hasPets = true;

//Null
const aptNumbe = null;

//undefined
const pen = undefined

// Symbol 
const id = Symbol('id')

//Bigint
const n = 126127163712n;

//todo primitive vs Reference types--------------------

const nums = [1,2,3,4,5]
const emp = {
    eName : 'Preethi'
};
const output = fName
console.log(output, typeof fName);
console.log(age1 , typeof age1);
console.log(temp , typeof temp);
console.log(hasPets, typeof hasPets);
console.log(aptNumbe, typeof aptNumbe);
console.log(pen , typeof pen);
console.log(id, typeof id);
console.log(n , typeof n);
console.log(nums, typeof nums );
console.log(emp , typeof emp);

//Stack vs Heap
const name = "Pooja"
const age2 = 25;

const Person = {
    name : "Pachhu",
    age2 : 19
}
let newName = name;
newName = "preeethi"
let newPerson = Person
newPerson.name = "Dheeraj"
console.log(name, newName);
console.log(newPerson);

//todo type conversion --------------

let amount = '100'
//Change String to number
// amount = parseInt(amount)
// amount =+ amount;
// amount = Number(amount);
console.log(amount, typeof amount);

let price = 100.9;
// price = price.toString();
// price = String(price)
// price = parseInt(price)
console.log(price, typeof price);

price = parseFloat(price);
console.log(price, typeof price);

let num = 11;
let k = "hello";
k = parseInt(k);
num = Boolean(num)
console.log(num , typeof num );
console.log(k, typeof k);

console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('pooja' /2);

//todo 1. Arithmetic Operators and comparison operators -------------
let q ;
q = 5+1;
q= 50-2
q= 4/2
q = 7%2
q = 7*2
q = 'Hii' + " " + 'hii'
q = 2**3
q = q++;
q  = ++q;
q =+ q;
// q =-q;
// q %= q
// q /= q
q **= 5

q = 2==='2'
q = 10 >0
q = 10 >=29
console.log(q);

//todo Type Coercion-----------------

let r ;
r = 5 + '5';
r = 5 + Number('5')
r = 5 * '5'
r = 5 + null
r = Number(null)
// r = 8-- - -true
// r = 8++ -1
console.log(r);
console.log( typeof null);


// const student = {
//     studentName : "Pooja",
//     studentAge : 15,
//     printMarks : function() {
//         console.log( `${this.studentAge}`)
        
//     }
// };

//todo --Working with string -----------

const animal = "dog";
const bird = "crow";
console.log(animal + " and " + bird + " dancing together"  );

//! template literals

console.log(`${animal} and ${bird} are enjoying the rainy season`);

// String properties and methods
let i;
const s = "hello pooja"
const h = new String(s);
i = s[9]
console.log(i);
i = s.__proto__
console.log(i);

i = s.toUpperCase()
console.log(i);

i = s.length
i = s.toLowerCase()
i = s.toLocaleUpperCase()
i = s.charAt(10)
i = s.indexOf('h')
i = s.substring(1,8)
i = s.slice(-7)
i = '         hello'
i = i.trim()
i = s.replace('pooja', 'Preethi')
i = s.includes('hello')
i = s.split('')

console.log(i);
console.log(h);

//todo ---capitalize challenge---------

const myString = 'developer'
let myNewString 

//solution1
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1)
//solution2
myNewString = myString[0].toUpperCase() + myString.substring(1)
//soultion3
myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`
console.log(myNewString);

//todo---- Numbers--------------
let e;
const num1 = new Number(9.36)
 e = num1.toString();
 e = num1.toString.length
 e = num1.toFixed(2)
 e = num1.toPrecision(2)
 e = num1.toExponential(2)
 e = num1.toLocaleString('en-US')
 e = num1.valueOf()
 e = Number.MAX_VALUE
 e = Number.MIN_VALUE
console.log(num1);
console.log(e, typeof e);

//todo--------Math Object --------

let m;
m = Math.sqrt(9)
m = Math.abs(-52)
m = Math.round(4.5)
m = Math.ceil(4.9)
m = Math.floor(2.8)
m = Math.pow(2,8)
m = Math.min(4,2,8)
m = Math.max(34, 20, 43)
m = Math.random()
m = Math.floor(Math.random()*100+1)
console.log(m);

//todo --------Number Challenge----------

let w,t;
w = Math.floor(Math.random()*100+1);
t = Math.floor(Math.random()*50+1)
//sum
const sum = w+t
const sumOutput = `${w} + ${t} = ${sum}`

//diff
const diff= w-t
const diffOutput = `${w} - ${t} = ${diff}`

// get the product
const pro= w*t
const proOutput = `${w} * ${t} = ${pro}`

// quotient
const quot= w/t
const quotOutput = `${w} / ${t} = ${quot.toFixed(2)}`

//remainder
const rem= w%t
const remOutput = `${w} % ${t} = ${rem}`

console.log(w);
console.log(sumOutput);
console.log(diffOutput);
console.log(proOutput);
console.log(quotOutput);
console.log(remOutput);

//todo -----Date Object ----------

console.log("-----Date-----------");

let d ;
d = new Date()
d = d.toString()
d = new Date(2021,0,10, 12,30, 8)
// d = d.toISOString()
d = new Date('2021-07-10')
d = new Date('2012-07-20 12:30:00')
d = Date.now()
d = new Date()
d = d.getTime()
d = d.valueOf()
d = new Date(750161850782)
// d = new Date('07-10-2022 12:30:00')
d = Math.floor(Date.now() /1000)
console.log(d);
console.log(typeof d);

//todo  ---------Date object methods--------

let u;
let o = new Date();
u = o.toString();
u = o.getTime()
u = o.valueOf()
u = o.getFullYear()
u = o.getMonth() + 1
u = o.getDate()
u = o.getHours()
u = o.getMinutes()
u = o.getSeconds()
u = o.getMilliseconds()
u = `${o.getFullYear()} - ${o.getMonth() + 1} - ${o.getDate()}`
u = Intl.DateTimeFormat('en-US').format(o)
u = Intl.DateTimeFormat('en-GB').format(o)
u = Intl.DateTimeFormat('default', {month: 'long'}).format(o)
u = o.toLocaleString('default', {month: 'short'})
u = o.toLocaleString('default', {
    weekday : 'long',
    year : 'numeric',
    month : 'long',
    day : 'numeric',
    hour : 'numeric',
    minute : 'numeric',
    second : 'numeric',
    timeZone : 'America/New_York'
})
console.log(u);

//todo ---------Arrays and Objects --------------------

let p;
//array literals
const numbers = [23,47,18,8,19,9]
const mixed = [12,'Pooja', true, null]

//array constructor
const fruit = new Array('apple', 'grape', 'orange');
p = numbers[0];
p = numbers[0] + numbers[3]
p = `My favorite fruit is an ${fruit[2]}`
p = numbers.length
fruit[2] = 'kiwi'
// fruit.length = 2
fruit[3] = 'Jackfruit'
fruit[fruit.length] = 'blueberry'
fruit[fruit.length] = 'peach'
console.log(numbers);
console.log(fruit);
console.log(p);

//todo ------ Array methods ------------

let l;
const arr1 = [23, 33, 82, 281, 9]
arr1.push(30)
arr1.pop()
arr1.unshift(99)
arr1.shift(99)
// arr1.reverse()
console.log(arr1.includes(9));
console.log(arr1.indexOf(82));
// console.log(arr1.slice(1,4));
// console.log(arr1.splice(1,4));
l = arr1.slice(1,4).reverse().toString().charAt(0)

console.log(arr1);
console.log(l);

//todo ------Nesting , concatinating and concatination-------------

let x1;
const fruits1 = ['apple', 'berry', 'raspberry', 'banana']
const veggies = ['tommato', 'carrot', 'beans']
console.log(fruits1);
x1 = fruits1[3][2]
const edibleItems = [fruits1, veggies]
x1 = edibleItems[1][2]
x1 = fruits1.concat(veggies)
console.log(veggies);
console.log(edibleItems);

// spread operator (...)
x1 = [...fruits1, ...veggies]
// Flatten Arrays 
const arr2 = [1,3,[3,7], [24, [4, 4]]]
console.log(arr2.flat().flat());

//static methods on array object 

x1 = Array.isArray('hello')
x1 = Array.from('22716')
const b1 = 1
const b2 = 2
const b3 = 3
x1 = Array.of(b1, b2,b3)
console.log(x1);

const arr3 = [1,2,3,4,5]
const x2 = arr3.reverse()
x2.push(0)
x2.unshift(6)
console.log(x2);

const arr4 = [1,2,3,4,5]
const arr5 = [5,6,7,8,9,10]
const x3 = arr4.slice(0,4).concat(arr5)

console.log(x3);

//todo ------Object Literals----------------
let f;
const person1 = {
    name : 'Pooja',
    age : 20,
    isAdmin: true,
    address: {
        street : 'potheri',
        city : 'kattankulthur',
        state : 'Tamil nadu',
    },
    hobbies: ['skeching', 'music']
}
f = person1.name;
f = person1['age']
f = person1.address.state
f = person1.hobbies[0]
person1.name = "Preethi"
person['isAdmin'] = false
delete person1.age
person1.hasChildren = true
person1.greet = function() {
    console.log(`Hello ${this.name}!!`);
}
person1.greet()
const person2 = {
    'first name' : 'Dheeraj',
    'last name' : 'kumar',
}
f = person2['first name']

console.log(person1);
console.log(f);

//todo ---------Object spread and method----------

let x4
const todo = new Object()
todo.id = 1
todo.name = 'Complete Js'
todo.completed = false
x4 = todo

const person3 = {
    address: {
        pincode : 603203,
        state : 'karnataka',
        coords : {
            lat : 24.66226,
            lng : 72.26
        },
    },
}
x4 = person3.address.coords.lat

const obj1 = {a:1, b:2}
const obj2 = {c:3, d:4}
const obj3 = {...obj1, ...obj2}
const obj4 = Object.assign({}, obj1, obj2)
const todos = [
    {id : 1, name: 'comple js'},
    {id : 1, name: 'complete angular'}
]
x4 = todos[0].name
x4 = Object.keys(todo)
x4 = Object.values(todo)
x4 = Object.entries(todo)
x4 = todo.hasOwnProperty('name')
console.log(x4)
// console.log(todo);

//todo --------Destructring and naming

const friName = 'Pooja';
const lName = 'N G'
const age3 = 30;

const person4 = {
    firstName: firstName,
    lastName: lastName,
    age : age
}
console.log(person4)
console.log(person4.age);

//todo ---Destructuring ---------

const todo1 = {
    id1 : 1,
    title : 'can we be Strangers again?',
    user: {
        name3 : 'Pooja',
    }
}

const {id1, title, user: {name3}} = todo1
console.log(id1, title);

const num2 = [1,2,3];
// const[a4,b4,c4] = num2;
const[a4,,c4] = num2;
console.log(c4);

//* Destructuring in functional parameter

function greet({name, age}){
    console.log(`Hello ${name} are you aged ${age}?`);
}
greet({name : 'pooja', age : '34'})


//* Fuction 

function sayHello() {
    console.log("Hello, World!");
}
sayHello();

function add(num1 , num2) {
    console.log(num1 + num2);
}
add(5, 10);

function subtract(num1, num2){
    return num1 - num2;
}
console.log(subtract(10, 5));

//* parameters and arguments

//Default parameters
function registerUser(user="Guest") {
    // if (!user) {
    //     user = 'Guest';
    // }
    return `${user} has been registered successfully!`;
}

console.log(registerUser());

//rest parameters
function sum1(...numbers){
    let total = 0
    for(let i of numbers){
        total +=i
    }
    return total;
}
console.log(sum1(1,2,3,4,5,6,7,8,9,10));

//* for..in
const person5 = { name : 'Pooja', age: 20, city: 'Chennai' };
for(let key in person5) {
    console.log(`${key}: ${person5[key]}`);
}

// not recommended for arrays
const arr6 = ["a", "b", "c", "d"];
for(let index in arr6) {
    console.log(`Index ${index}: ${arr6[index]}`);
}

//* for... of
for(let char of "Hello") {
    console.log(char);
}

//^ ---------Callback Functions ----------------

wishThem("Hello, Pooja!");

function wishThem(message) {
    console.log(message);
}

let greet2 = function(name) {
    console.log(`Hello, ${name}!`);
}
greet2("Deepika");

const greet3  = (n)=> 
 `Hello ${n}`
console.log(greet3("poo"))


function sum1 (...nums){
    return nums.reduce((total,n) => total + n, 0)
}
console.log(sum1(1,3,4));


function animal1 (callback, name){
    callback(`Hello, ${name}`)
}
animal1((message)=> console.log(message),"dog")


function callbackDemo(callbackFunction, greetings){
    console.log((callbackFunction() + `Hello ${greetings}`))
}
function message() {
    return `Here is my greeting to you - `
}
callbackDemo(message, "Good morning")


function calculate(number1, number2, operation){
    console.log(operation(number1, number2));
}
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b
}
calculate(1,2, add)
calculate(4,2, sub)

function myFilter(arr, callback){
    const result = []
    for(let i of arr){
        if(callback(i)){
            result.push(i)
        }
    }
    return result

}
const numbers11 = [1,2,3, 4, 5]
const evenNumbers = myFilter(numbers11, function(n11){
    return n11%2==0;
})
console.log(evenNumbers);


const app=()=>
{
    setTimeout(()=>
    {
        for(let i=0;i<3;i++)
        {
            console.log(i);
        }
    },1000)
}

for(var j=0;j<3;j++)
{
    console.log(j);
}

function calculation1(...number12) {
    return number12.reduce((sum10, a12) => sum10 + a12 )
}
console.log(calculation1(25,62, 72))
// let arrays=[1,2,3,4,5];
// console.log(calculation1(arrays));

// let arrays=[1,2,3,4,5];
// let sum13= arrays.reduce((total, n) => total +n )
// console.log(sum13);

// app();

//* Execute a callback after delay
function delayMesage(callback){
    return setTimeout(()=>{
        callback()
    }, 2000)
}
// delayMesage(()=> {{
//     console.log("Hello Pooja how come you do this");
// }})

// function chainTwoCallback(cb1,cb2){
//     return cb1()+cb2()
// }
// chainTwoCallback(()=> {
//     console.log("Im callback 1");  
// }, ()=> {
//     console.log("Im callback 2");
    
// })

//* simulate login using callback 

// function login(username, callback) {
//     if(username){
//         return callback(username)
//     }
// }
// let userName = "Dheeraj"
// login(userName, (name)=> {
//     console.log(`Login to ${name} is successfull`);   
// })

//* Nested callbacks (simulating async calls)

// function Step1(callback){
//     console.log("Start");
//     setTimeout(callback, 1000)
// }
// function Step2(callback){
//    console.log("Processing");
//    setTimeout(callback, 1000)
// }
// function Step3(callback) {
//     console.log("Done");
//     setTimeout(callback, 1000)
    
// }
// Step1(()=> {
//     Step2(()=> {
//         Step3()
//     })
// })

//^ ---------IIFE function -------------

// (console.log("Hello From IIFE"))()

// ((name)=> {
//     console.log(`Hello ${name}`);   
// })("Poo")

// ((...number) => {
//  let result = number.map((n)=> Math.pow(n,2))
//  console.log(result);
// })(2,3,4)

//^ -------Promise--------

//* Creating a promise

// const myPromise = new Promise((resolve, reject) => {
//     const success = true;
//     if(success) {
//         resolve("Task completed");
//     }
//     else {
//         reject("Task Failed!")
//     }  
// })

// console.log(myPromise);

//* Using .then() and .catch()

// const myPromise = new Promise((resolve, reject) => {
// const success = true;
//     if(success) {
//         resolve("Task completed");
//     }
//     else {
//         reject("Task Failed!")
//     }  
// }).then((result)=> {
//     console.log(result); 
// }).catch((error) => {
//     console.error(error);
// })

//* Chaining promises

// const add1 = (num) => {
//     return new Promise((resolve)=> {
//         resolve(num+10)
//     })
// }
// add1(5).then((result) => {
//     console.log(result);
//     return result*2
// }).then((newResult)=> {
//     console.log(newResult);
// }).catch((error) => console.error(error))

//* Converting callbacks to promise

// function callbackpromise(callback){
// setTimeout(()=> {
//     callback(("Hee is your data"))
// },1000)
// }
// callbackpromise((data)=> { console.log(`Hey ${data}`)})

// function getPromiseData() {
//     return new Promise((resolve, reject) => {
       
//         setTimeout(()=> {
//             const error = false
//             if(!error){
//                 resolve("Here is your data")
//             } else {
//                 reject("error downloading the data")
//             }
//         }, 1000)
//     })
// }
// getPromiseData().then((data) => console.log(data)).catch((data)=> console.log(data))

//^ --------HOF ----------

// function operation(a,b, callback){
//    console.log(`${a} + ${b} = ${callback(a,b)}`);
  
// }
// add = (x,y) => x+y
// operation(10,20, add);

function operationFunction(fact){
    return function factorial(number){
        return number*fact
    }
}
const data = operationFunction(3)
console.log(data(7));

const factorial = function fact(n){
    return n < 2 ? 1 : n*fact(n-1)
}
const result = factorial(5)
console.log(result);

//*---------Generator function -------

function* generator() {
    yield "Pooja"
    yield 2
}
const gen = generator().next().value
console.log(gen);

 //^---------SET---------------

 const setDemo = new Set();
 setDemo.add(2)
 setDemo.add(7)
 setDemo.delete(2)
 setDemo.clear()
console.log(setDemo.size);
console.log( setDemo.has(7));
 console.log(setDemo);
 
 const numbers1 = [12,3,4,4,4,45]
const uniqueValue = [...new Set(numbers1)]
console.log(uniqueValue);

//^ ---------MAP----------------
const mapDemo = new Map()
mapDemo.set(1, "Pooja")
mapDemo.set(2, "Preethi")
mapDemo.set(3, "Preethi")
console.log(mapDemo.get(1));
mapDemo.delete(1)
console.log(mapDemo.size);
console.log(mapDemo);

//^ -------Weak Map-------------

// const weakMapDemo = new WeakMap()
// let obj = {
//     id: 1,
// }
// weakMapDemo.set(obj, "secreat")
// console.log(weakMapDemo.get
//     (obj)
// );

//-------

// const privateData = new WeakMap() 
// class User {
//     constructor(name){
//         privateData.set(this,{secret: "123", name})
//     }
//     getSecret() {
//         return privateData.get(this).secret
//     }
// }
// const user = new User("Pooja")
// console.log(user.getSecret());

// const weakMap = new WeakMap();

// let obj = {
//     name : "Pooja"
// }
// weakMap.set(obj, "Engineer")
// console.log(obj);
// console.log(weakMap.get(obj));

// const arr11 = [10,20,30]
// for(let value of arr){
//     console.log(value);
// }
// const str = "JS"
// for(let char of str){
//     console.log(char);
// }

// console.log(Symbol.iterator);

//* --------Iterable-----------

const customIterable = {
    *[Symbol.iterator](){
        yield "Hello",
        yield "Pooja"
    }
}
for(let word of customIterable){
    console.log(word);
    
}

//^------Beginer questions --------

function CapitalizeWord(sentence){
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase()+ word.slice(1)).join(" ")
}
console.log(CapitalizeWord("hey pooja, how are you"));

function reverseString(str){
    return str.split("").reverse().join("")
}
console.log(reverseString("Pooja hey"));

function palindromeCheck(string) {
    string = string.toLowerCase()
    const reversedString = string.split('').reverse().join('')
    return string==reversedString
}
if(palindromeCheck("madam")==true){
    console.log("It is a palindrome ");
}
console.log(palindromeCheck("madam"));

function findLargestNumber(...numbers){
    return numbers.reduce((max, curr) => (curr>max ? curr: max))
}
console.log(findLargestNumber(1,2,3,4,5));

function findLargestUsingFilter(arr){
    const max = Math.max(...arr)
    console.log(max);

}
findLargestUsingFilter([12,34, 4, 21, 89])

//* -----find vowels---------

function countVowels(str){
    const vowels = "aeiouAEIOU"
    let count = 0
    for(let char of str) {
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}
console.log(countVowels("Pooja"));

function countVowels1(str) {
    const vowels = "aeiouAEIOU"
    const s = str.split("").filter(char => vowels.includes(char)).length
    return s;
}
console.log(countVowels1("heoy"));

function flattenArray(arr){
 let result = []
 for(let element of arr){
    if(Array.isArray(element)){
        result = result.concat(flattenArray(element))
    } else {
        result.push(element)
    }
 }
 return result
}
console.log(flattenArray([27,7,[65,97,[89,56]]]));

function flattenArray2(arr) {
 return arr.flat(Infinity)
}
console.log(flattenArray2([27,7,[65,97,[89,56]]]));

//^ ---------Curring---------------

function add(a) {
 return function(b){
    return function(c){
        return a+b+c;
    }
 }
}
console.log(add(1)(2)(5));

const add2 = a => b => a+b
console.log(add2(1)(7));

const greet1 = greeting => name => `${greeting}, ${name}`
console.log(greet1("Hello")("Pooja"));

//real world example

function logger(level){
    return function(message){
        console.log(`[${level}] ${message}`);
    }
}
const error = logger("ERROR")
error("Somethig went wrong!")
const info = logger("INFO")
info("Server started!")

console.log(typeof Infinity);

//^-------------Async & await---------


async function myFunction() {
  const result = await someAsyncFunction();
  console.log(result);
}
function someAsyncFunction(){
    return "hello"
}
myFunction()

async function greet() {
    return "Hellooooooooooooo"
}
greet().then(console.log)

// function wishLater(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
// }
// async function wishThem() {
//     await wishLater(1000);
//     console.log("HEEEEE");
// }
// wishThem()

async function fetchData() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const data = await response.json()
        console.log(response);
        console.log(data) 
    } catch(error){
        console.error("Error: ", error)
    }
}
fetchData()

function add1(a,b){
    return a+b
}
add1(2,4).then(console.log)
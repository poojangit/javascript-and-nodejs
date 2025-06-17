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
































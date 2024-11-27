//Todo ------------DATA TYPES(Primitive)-----------------

//^ 1. number -----------------------

num1 = 55
num2 = 45.89
num3 = NaN

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);

//^ 2. string ------------------------

str1 = "Pooja"
str2 = 'hi'
age = 14
str3 = `I am ${age} old`

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);

//^ 3. boolean -----------------------

isAdult = true
isMarried = false

console.log(typeof isAdult);
console.log(typeof isMarried);

//^ 4. null --------------------------

let pincode = null
console.log(typeof pincode); // typeof null is Object

//^ 5. undefined --------------------

let phoneno 
let parentname = undefined
console.log(typeof phoneno);
console.log(typeof parentname );

//^ 6. Symbol-------------------------

let uniqueId = Symbol("id")
let uniqueValue = Symbol("id")
console.log( typeof uniqueId);
console.log(typeof uniqueValue);
console.log(uniqueId);
console.log(uniqueValue);

console.log(uniqueId == uniqueValue);
console.log(uniqueId === uniqueValue);

//^ 7. bigint -----------------------
let largeNum = 12221212n
console.log(typeof largeNum);

// !------------------------------------------------------------------------------

let n1 = "1"
let n2 = 1
console.log(n1==n2);
console.log(n1===n2);














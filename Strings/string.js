//todo ---------------String in Js----------------------

//^ Creating string ---------------------->

//! single quote

// let productName = 'Mobile'
// console.log(productName);

//! double quote

// let bookName = "Beauty and the beast"
// console.log(bookName);

//! template literals

// let age = 20
// console.log(`My age is ${age}`);

//^ String methods ----------------------->

//! to return a length of a string
let storyName = 'Life of pie IT'
let bookName = " IT ENDS WITH US "
console.log(storyName.length);

console.log(storyName.charCodeAt(1));

console.log(storyName.substring(1,2));

console.log(bookName.toLowerCase());

console.log(storyName.toUpperCase());

console.log(bookName.toLocaleLowerCase());

console.log(bookName.toLocaleUpperCase());

console.log(bookName.endsWith("S")); //returns boolean

console.log(bookName.concat(storyName));

console.log(bookName.charAt(1)); //return character

console.log(bookName.match(storyName));

console.log(bookName.slice(1,4));


















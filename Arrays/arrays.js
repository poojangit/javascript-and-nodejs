//todo --------ARRAYS IN JS----------------------------

//^ Arrays are the ordered collections of elements that can store multiple value inside the []

//* Array creation -------------------->
//! Arrays can be created in two ways
//! 1. Using square brackets

//~ Example 1
// let array = [12,13,14,15]
// console.log(array);
// console.log(array.length);
// console.log(array[0]);
// array[0] = 17
// console.log(array);

//~ Example 2
// let stringArr = ["hi", "hello"]
// console.log(stringArr);
// stringArr[0] = "mobile"
// console.log(stringArr);
// num = 10
// console.log(num);
// num = 20
// console.log(num);

// str = "name"
// console.log(str);
// str = "J"
// console.log(str);
// str[1] = "u"
// console.log(str);
// console.log(str[1]);

//! 2. using the array constructor

//~ Example 3
// let emptyArray = new Array()
// console.log(emptyArray);

//~ Example 4
// let fixedSizeArray = new Array(5)
// console.log(fixedSizeArray);

//~ Example 5
// let arrayWithInitialElements = new Array(["pencil", "eraser", "scale", "sharpner"])
// console.log(arrayWithInitialElements);

//~ Example 6
// let arrayWithSingleElement = new Array(5)
// console.log(arrayWithSingleElement);
// arrayWithSingleElement = ["10"]
// console.log(arrayWithSingleElement);
// console.log(arrayWithSingleElement.length);
// console.log(arrayWithSingleElement[0]);

//~ Example 7
// let usingArrayOf = Array.of(5,10)
// console.log(usingArrayOf);

//* Array Methods ------------------------->
//&(common array methods)--->
//! push()
//! pop()
//! shift()
//! unshift()
//! concat()

//!push() -> add the elements to the end of an array
// let pushMethod = [1,2,3,4,5]
// pushMethod.push(100)
// console.log(pushMethod);

//! pop() -> removes the element from the end of an array
// let popMethod = [10,20,30,40]
// console.log(popMethod.pop());
// console.log(popMethod);

//! shift() -> removes the element from the begininng of an array
// let shiftMethod = [11,12,13,14,15]
// console.log(shiftMethod);
// console.log(shiftMethod.shift());
// console.log(shiftMethod);

//! unshift() -> add the elemnet from the biginning of an array
// let unshiftMethod = [100,200,300]
// unshiftMethod.unshift(1)
// console.log(unshiftMethod.unshift(1));
// console.log(unshiftMethod);

//! concat() -> adds or merges two different array
// let concatMethod1 = [1,2,3]
// let concatMethod2 = [10,20,30]
// console.log(concatMethod1.concat(concatMethod2));

//&(Iteration methods)-------->
//! forEach()
//! map()
//! filter()
//! reduce()
//! reduceRight()
//! some()
//! every()
//! find()
//! findIndex()

//! forEach()-> Iterates over each array elements

//~ Example 8
// let vegitables = ["carror", "raddish", "onion"]
// vegitables.forEach(function cooking(veggies, index) {
//     console.log(`${veggies} at index no ${index} are ready to cook`);
// })

//~ Example 9
// let nums = [1, 2, 3]
// let data = nums.forEach(function mul(number) {
//     return number * 2 //cannot use break, continue, return in forEach()
// })
// console.log(data); //undefined

//~ Example 10
// let users = [
//     {
//         userName: "pooja",
//         age: 10
//     },
//     {
//         userName: "priya",
//         age: 20
//     }
// ]
// console.log(users);
// users.forEach((user)=> {
//     console.log(`${user.userName} age is ${user.age}`);
// })

//! map() -> creates new array iterating over each element in an array

//~ Example 11
// let firstMapping = [1,2,3,4]
// let result = firstMapping.map(function add (m){
//     return m + m
// })
// console.log(result);

//~ Example 12
// let num = [10,20,30]
// let result = num.map(nums => nums*100)
// console.log(result);

//~ Example 13
// let users = [
//     {
//         userName: "pooja",
//         age: 10
//     },
//     {
//         userName: "priya",
//         age: 20
//     }
// ]
// console.log(users);
// let greet = users.map(names => names.userName+" How are you")
// console.log(greet);

//! filter() - returns a new array by filtering the conditions

//~ Example 14
// let products = ["bottle", "charger", "laptop","book"]
// let filteredResults = products.filter((result)=> result.length == 4)
// console.log(filteredResults);

//~ Example 15
// let users = [
//     {
//         userName: "pooja",
//         age: 10
//     },
//     {
//         userName: "priya",
//         age: 20
//     }
// ]
// console.log(users);
// let result = users.filter( function validAge(names){
//     return names.age == 10
// })
// console.log(result);

//! reduce() - iterates over each element and accumulate and returns a single value

//~ Example 16
// let nums = [1,2,3,4]
// let sum = nums.reduce(function(accumulate, current){
//     return accumulate+current
// },0)
// console.log(sum);

//~ Example 17
// let vegitables = ["carror", "raddish", "onion", "onion"]
// let count = vegitables.reduce((acc, curent) => {
//     acc[curent] = (acc[curent] || 0) + 1
//     return acc
// },{})
// console.log(count);

//& Transformation methods

//! slice()
//! splice()
//! sort()
//! reverse()

//! slice() - returns a shallow copy of an array into a new array without modifying the original array

//~ Example 18
// let arr = [1,2,3,4,5,6,7,8,9]
// let slicedArr = arr.slice(1,3)
// console.log(slicedArr);
// console.log(arr);

//~ Example 19
// let arr = [1,2,3,4,5,6,7,8,9]
// let slicedArr = arr.slice(-3)
// console.log(slicedArr);
// console.log(arr);

//! splice() - adds, removes, replaces elements in the array by modifing the original array

//~ Example 20
// let arr = [1,2,3,4,5,6,7,8,9]
// let splicedArr = arr.splice(1,2, 'a','b','c')
// console.log(splicedArr);
// console.log(`original array ${arr}`);

//! sort() 

//~ Example 21
// let fruits = ["kiwi", "orange","apple"]
// let sortedArr = fruits.sort()
// console.log(sortedArr);

//~ Example 22
// let nums = [10,2,7]
// console.log(nums.sort()); // cannot sort

//~ Example 23
// let nums = [10,2,7]
// let sorted = nums.sort((a,b) => a-b)
// console.log(sorted);

//~ Example 24
// let users = [
//     {
//         userName: "pooja",
//         age: 30
//     },
//     {
//         userName: "priya",
//         age: 60
//     },
//     {
//         userName : "adan",
//         age : 10
//     }
// ]
// let sortedArray = users.sort((a,b)=> a.age -b.age)
// console.log(sortedArray);

//! reverse

//~ Example 25
// let nums = [10,20,30,40]
// console.log(nums.reverse());

//~ Example 26
// let users = [
//     {
//         userName: "pooja",
//         age: 30
//     },
//     {
//         userName: "priya",
//         age: 60
//     },
//     {
//         userName : "adan",
//         age : 10
//     }
// ]
// const reversedData = users.reverse()
// console.log(reversedData);

//* Looping over array ------------->

//! using normal for loop 
//~ Example 27
// let products = ["Mobile", "Laptop", "Earphones", "Charger"]
// for(let i = 0 ; i<products.length ; i++) {
//     console.log(products[i]);
// }

//& for-of
//! Iterated over values of an iterable
//! use when you need values directly

//~ Example 28
// for(let pro of products){
//     console.log(pro.toUpperCase()); 
// }

//~ Example 29

// let marks = [85, 98, 44, 37, 76, 60]
// let sum = 0
// for(let m of marks){
//    sum = sum + m
// }
// console.log(sum);
// let avg = sum/marks.length
// console.log(avg);

//~ Example 30
// let prices = [250, 645, 300,900, 50]
// let new_prices = []
// let i = 0
// for(let val of prices){
//     offer = val*10 / 100
//     prices[i] = prices[i] - offer
//     console.log(`Offer price ${prices[i]}`);
// }

//& for-in
//! Iterates over keys or indexes of an object or array
//! Use when you need keys or property names

//~ Example 31
// let prices = [250, 645, 300, 900, 50]
// let new_prices = []
// let i = 0
// for(let val of prices){
//     offer = val*10 / 100
//     prices[i] = prices[i] - offer
//     console.log(`Offer price ${prices[i]}`);
// }

//~ Example 32
// let flower = ['rose', 'lilly', 'marrigold']
// for(let petals in flower){
//     console.log(petals, flower[petals]);
// }

//~ Example 33
// let users = {
//     userName: "pooja",
//     age: 30
// }
// for (let keys in users) {
//     console.log(`${keys} : ${users[keys]}`);
// }


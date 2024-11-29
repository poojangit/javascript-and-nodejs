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









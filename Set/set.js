//todo ----------SET-------------------------

//^ set is a collection of unique values. 
//^ It can store any type of values, weather primitive or object references.

let mySet = new Set()

// mySet.add(10)
// mySet.add(20)
// mySet.add(20)
// mySet.add("Helloo")

// console.log(mySet);
// console.log(mySet.size);
// console.log(mySet.has(1));
// console.log(mySet.has(10));
// console.log(mySet.delete(1));
// mySet.delete(10)
// console.log(mySet.delete(10));
// console.log(mySet);
// mySet.clear()
// console.log(mySet.clear());
// console.log(mySet);


//! Iterarting over a set

// let set = new Set([1,2,3,4])

// for(let value of set){
//     console.log(value);
// }

//& Set operations
//! union
//! Intersection
//! difference

// let setA = new Set([1,2,3])
// let setB = new Set([4,5,6])
// let union = new Set([...setA,...setB])
// console.log(union);

//! Intersection

// let setA = new Set([1,2,3,4,5])
// let setB = new Set([1,2,3])
// let intersection = setA.has(setB)
// console.log(intersection);
// let result = new Set([...setA].filter(x=> setB.has(x)))
// console.log(result);

//! difference

// let setA = new Set([1,20,2,3,4])
// let setB = new Set([2,3,4,10])
// let difference = new Set([...setA].filter(x => !setB.has(x)))
// console.log(difference);

//& Removing dublicates of a array 

let numbers = [1,1,12,3,4,5,4,5]
let uniqueNum = [...new Set(numbers)]
console.log(uniqueNum);

//& usecases 
//! Removing dublicates from an array
//! checking existence of a value
//! Storing unique data

//& Limitations
//! no direct access
//! no key value pair


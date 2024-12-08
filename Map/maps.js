//todo ---------MAP-----------------------------

//^ Map is a collection of key and value pair, where keys can be of any type

//^ Creating a map

let myMap = new Map()
console.log(myMap);

// const map = new Map([
//     ['name' , 'Alice'],
//     ['age', 10]
// ])
// console.log(map);

//^ key features
//! keys can be of any data type
//! Maintains insertion order
const map = new Map()
map.set('first',1)
map.set('second',2)
console.log([...map]);

//! size property
console.log(map.size);

//^ Methods and properties
//! set(key, value)
//! get(key)
//! has(key)
//! delete(key)
//! clear()
//! size 

myMap.set('name', "Pooja")
myMap.set(1, 'Number')
myMap.set(true, 'Boolean')

console.log(myMap);
console.log(myMap.get('name'));
// console.log(myMap.has(1));
// console.log(myMap.delete(1));
// console.log(myMap);
// console.log(myMap.size);
// myMap.clear()
// console.log(myMap);

//~ Example 2

// let map = new Map([
//     ['a',1],
//     ['b',2],
//     ['c',3],
//     ['d',4],
//     ['d', 4]
// ])
// map.forEach((key, value) => {
//     console.log(key, value);
// })
// for(let [key,value] of map){
//     console.log(key, value);
// }

//~ Example 3


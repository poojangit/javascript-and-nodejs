//todo ----------ES10--------------------

//! Array.prototype.flat

// const arr = [1,2,[3,4,[5,6]]]
// console.log(arr);
// console.log(arr.flat(1));
// console.log(arr.flat(2));

//! Arrays.prototype.flatMap() 

const arr = [1,2,3,4,5]
console.log(arr.flatMap(x => [x,x*2]));

//! Array.prototype.trimstart() and trimend

const greet = "       Hello      "
console.log(greet);
console.log(greet.length)
console.log(greet.trimEnd().length)
console.log(greet.trimStart());
console.log(greet.trimStart().length);

//! function.prototype.tostring

function wish() {
    return "Good morning to string"
}
console.log(wish.toString());

//! JSON.stringify()

console.log(JSON.stringify('\uD800'));
// 




// const  a = {m : 1}
// a.m = 2
// console.log(a);
// a = {b : 10}

//~ Shallow copy
// let obj1 =  {a:1,b : {c:2}}
// let obj2 = {...obj1}
// console.log(obj2);
// obj2.b.c = 42
// console.log(obj2.b.c);

//~ deep copy
// let obj1 = {a:1, b: {c:2}}
// let obj2 = JSON.parse(JSON.stringify(obj1))
// obj2.b.c = 42
// console.log(obj1.b.c);

//~ destructuring
// const [a,b] = [1,2]
// const {name, age} = {name : 'Pooja', age : 23}

// function person(name, age) {
//     return `${name} ${age}`
// }
// const user = person("Pooja", 1)
// console.log(user);

//~Rest

// function number(...nums){
//     return nums.reduce((a,b) => a+b)
// }
// console.log(number(1,2));

//~ spread
// const array = [1,2,3]
// const arr1 = [...array]
// console.log(array);

//~ promise

// const promise = new Promise((resolve, reject) => {
//     if (true)
//         resolve(console.log("Resolved"))
//     else
//         reject(console.log("promise has not resolved"))
// })

//~ aync and await

// async function dataFetch(){
//    const resonse =  await fetch("https://api.github.com/users/poojangit")
//    console.log(resonse);
//    const data = resonse.json()
//    console.log(data);
// }
// console.log(dataFetch());

//~ Higerorder function

// function program (operate){
//     return function(x){
//         return operate(x) * 2
//     }
// }
// const double = program((x) => x+ 1)
// console.log(double(2));

//~ Callback function 

// function setaTime(callback){
//     setTimeout(callback("hello"), 1000)
// }
// setaTime((data) => console.log(data))

//~ call, apply and bind

// const obj = {name : "Pooja"} ;
//    function greet(greeting) {
//      return `Hello ${greeting} ${this.name}`
//    }
// console.log(greet.call(obj, "P00"));


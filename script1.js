function greet(callback) {
  callback("Pooja");
}
const sayHello = (name) => {
  console.log(`Hello ${name}`);
};
greet(sayHello);

// const promise = new Promise((resolved, rejected) => {
//     resolved("Resolved")
// })
// promise.then(console.log)

// async function dataFetch(){
//    try{
//     let respose = await fetch("https://api.github.com/users/poojangit")
//     let data = await respose.json()
//     console.log(data);

//     console.log(respose);
//    } catch(error) {
//     console.log("Error : "+error);
//    }
// }
// dataFetch().then().catch("Error")

function outer() {
  let name = "Pooja";
  return function inner() {
    console.log(name);
  };
}
// let fn = outer()
// fn()

outer()();

function HOF(a, b, callback) {
  return callback(a, b);
}
HOF(3, 4, (x, u) => console.log(x + u));

const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(num => num*2)
// console.log(doubled);
// const even = numbers.filter(num => num%2 === 0)
// console.log(even);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

const products = [
  { name: "Pone", price: 1000 },
  {
    name: "Laptop",
    price: 270000,
  },
];
const prices = products.map((p) => p.price);
console.log(prices);
const expensive = products.filter((costly) => costly.price > 90000);
console.log(expensive);
const total = prices.reduce((sum, price) => sum + price);
console.log(total);

// const person = {
//     greet() {
//         return "Hello"
//     }
// }
// const student = Object.create(person)
// console.log(student.greet())

//call
const person = {
  name: "Pooja",
};
function greet(sayHello) {
  console.log(`${sayHello}, ${this.name}`);
}
greet.call(person, "Hello", "Pooja");
greet.apply(person, ["Hello", "Pooja"]);
const greetPooja = greet.bind(person, "Hey");
greetPooja("How");

function* gen() {
  yield "Pooja";
  yield "Pree";
}
const gen1 = gen();
console.log(gen1.next().value);
console.log(gen1.next().value);

const button = document
  .getElementById("click")
  .addEventListener("click", () => {
    alert("Button clicked");
    document.getElementById("click").style.backgroundColor = "red";
  });
console.log(button);

//^ use strict -----------


"use strict";
x = 3.14;
console.log(x);

function test() {
    // "use strict"
    y=20
}
test()


function show() {
    "use strict"
    console.log(this);
}
show()

"use strict"
delete Object.prototype

"use strict"
let eval = 3.14
document.getElementById('demo').innerHTML = "Hello Pooja"
document.getElementById('click').addEventListener('mouseover', function(event) {
    const name = "Pooja"
    document.getElementById('demo').innerHTML = `${name}, did you hover?`
})

document.getElementById("myInput").addEventListener("keydown", function(event){
    console.log("You pressed: " , event.key)
})

document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    document.getElementById("output").innerHTML = "Form submitted"
})

// window.addEventListener("load", function() {
//     this.alert('Page has fully loadded!')
// })

// let name = prompt("What is your name ?", "Guest")
// console.log("Hello, " + name);

// let shouldDelete = confirm("Are you sure should i delete it? ")
// if(shouldDelete){
//     console.log("Deleted")
// } else {
//     console.log("Cancelled!")
// }

//^------Update key in js---------

const myMap = new Map()
myMap.set("oldkey", "value")

const value = myMap.get("oldkey")
myMap.delete("oldkey")
console.log(myMap);
myMap.set("newkey", value)
console.log(myMap);

//^-------------

const arr = []
console.log(arr);

const name1 = "" || "Guest"
console.log(name1);

const age = 18
const isAduct = age>=18 && "Allowed"
console.log(isAduct);

const vinayMap = new Map()

vinayMap.set("name", "vinay")
vinayMap.set("city", "Bengaluru")

const data = vinayMap.get("name")
console.log(data);
console.log(vinayMap.has("name"));

const username = undefined ?? null
console.log(username);

const check = (null || undefined)  ?? "goo"
console.log(check);

let fruits = ["apple", "grape", "banana"]
// const animateAll = (animate) => {
//   setTimeout(()=> {
//     animate(fruits[0]) 
//     setTimeout(()=> {
//       animate(fruits[1])
//       setTimeout(()=> {
//         animate(fruits[2])
//       },1000)
//     },1000)
//   },1000)
// }
// const animate = (fruit) => {
//   console.log("animating", fruit);
// }
// animateAll(animate)

// const delay = (ms)=> new Promise(resolve => setTimeout(resolve,ms))
// const animate = (fruit) => {
//   console.log("Animating " , fruit);
  
// }
// async function animateAll(){
//   try{
//     for(const fruit of fruits){
//       await delay(1000)
//       animate(fruit)
//     }
//   } catch(error) {
//     console.log(error);
//   }
// }
// animateAll()

// const myTasks = ["Wake up", "Brush" , "Study", "Office", "code", "eat", "sleep"]
// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
// const shows = (tasks) => {
//  console.log("This is my task - " + tasks);
// }
// async function showAll() {
//   try {
//     for(const task of myTasks){
//       await delay(1000)
//       shows(task)
//     }
//   } catch(error){
//     console.log(error);
//   }
//   }
//   showAll()

  const nums = [1,2,3,5]
  const hasEven = nums.some(n=> n%2 ==0)
  const alleven = nums.every(n=> n%2 ==0)
  console.log(hasEven);
  console.log(alleven);
  
  const person1 = {
    firstName : "Elon",
    lastName : "Musk"
  }
  const person2 = {
    firstName : 'Ratan',
    lastName : "Tata"
  }
  function fullName(greet){
    console.log(`${greet} ${this.firstName} ${this.lastName}`);
    
  }
  fullName.call(person1, "Hello")
  fullName.apply(person1, ["Hey"])

  function outer() {
    let count = 0
    return function inner(){
      count++
      console.log("Counting: " + count);
    }
  }
  const counter = outer()
counter()
counter()
  

function array1(arr){
return arr.map(a=> a*2)
}
console.log(array1([1,2,3]))

async function loadUser() {
  try{
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    const user = data.results[0]
    console.log(data);
    console.log(response)
    console.log(user);
    
    document.getElementById('name').textContent = `${user.name.first} ${user.name.last}`
    document.getElementById('email').textContent = `${user.email}`
    document.getElementById('photo').src = user.picture.large
    
  }catch(error){
    console.log("Failed to fetch user; " , error);
    
  }
}
loadUser()
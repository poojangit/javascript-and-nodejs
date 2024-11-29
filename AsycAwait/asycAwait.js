// todo ---------ASYNC/AWAIT------------------------

//^ Async and await are the java features used to handle asynchronous operations and more better than promises
//^ used to handle the promise


//^ 1 . Basic Example 
//! this async function always return as promise

// async function basicExample() {
//     return "Hello Pooja"
// }
// basicExample().then(result => console.log(result))
// console.log(basicExample());


//^ 2. Example on Async and await
//! await can only be used inside the async function
// async function fetchData () {
//     const response = await fetch("https://dummyjson.com/products")
//     const data = response.json()
//     console.log(data);
//     console.log(response);
// }
// fetchData()

//^ 3. with try/catch

// async function fetchData() {
//     try {
//       const response = await fetch("https://dummyjson.com/produc")
//       if(!response.ok){
//         console.log(`HTTP error status ${response.status}`);

//       }
//       console.log(response.status);

//       const data = response.json()
//       console.log(response);
//       console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
//     finally{
//         console.log("ends here");
//     }
// }
// fetchData()

//^ 4. Example-------->

// const p = new Promise((resolve, reject)=> {
//     resolve("Promise resolved value")
// })
// async function handlePromise(){
//     const val = await p
//     console.log(val);
// }
// handlePromise()

//^ 5 Example ----------->

// const p = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//         resolve("Promise resolved value")
//     },5000)
// })
// const p2 = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//         resolve("Promise resolved value")
//     },10000)
// })
// async function handlePromise(){
//     console.log("Starting");
//! Js engining waiting for the promise to get resolved
//     const val = await p
//     console.log("Hello Java");
//     console.log(val);

//     const val2 = await p2
//     console.log("Hello Python");
//     console.log(val2);
// }
// handlePromise()

// function getData() {
//! Js engine will not wait for the promise to get resolved
//     p.then((res)=> console.log(res))
//     console.log("Hello Javascript");
// }
// getData()

//^ 6. Real world example for async/await alomg with handling error

// const API_URL = "https://api.github.com/users/poojangit"
// console.log(API_URL);
//  async function handlePromise() {
//     const response = await fetch(API_URL)
//     try{
//         const data = await response.json()
//         console.log(data)
//     }
//     catch(error){
//         console.log(error);
//     }
//     console.log(response);
// }
// handlePromise()

//~ another way of handling error - traditional way

const API_URL = "https://api.githu.com/users/poojangit"
// console.log(API_URL);
async function handlePromise() {
    const response = await fetch(API_URL)
    const data = await response.json()
    console.log(data)
    console.log(response);
}
handlePromise().catch((err)=> console.log(err))


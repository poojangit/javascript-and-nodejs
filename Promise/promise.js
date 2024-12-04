//todo----------PROMISES------------------

//^ Promises are the objects in js that represents eventual completion or faillure of an aynchronous operation

//^ Creating a promise

// const promise = new Promise((resolve, reject) => {
//     const success = true
//     if (success) {
//         resolve("promise resolved")
//     }
//     else {
//         reject("Not resolved")
//     }
// })
// console.log(promise);

//^ Handling a promise(then, catch, finally)

// promise.then((result) => {
//     console.log(result);
// }).catch((result)=> {
//     console.log(result);
// }).finally((final) => {
//     console.log("Completed");
// })

//^ 1. Example with Aysnchronous program

// function collectData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true
//             if(success){
//                 resolve("data collected")
//             }
//             else{
//                 reject("errow while getting data")
//             }
//         },2000)
//     })
// }
// collectData().then((result)=> {
//     console.log(result);
// }).catch((result)=>{
//     console.log(result);
// }).finally(()=> {
//     console.log("Completed"); 
// })

//^ 2. Example with another aysnc program

// function user(id, userId){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             userId()
//             if(id){
//                 resolve(`Id no ${id}`);
//             }
//             else {
//                 reject("Not found");
//             }
//         }, 2000)
//     })
// }
// user(10,() =>{
//     console.log("Id recieved!");
// }).then((result)=> {
//     console.log(result);
// }).catch((error)=> {
//     console.log(error);
// }).finally(()=> {
//     console.log("Ends here");
// })

//^ 3. Example of Chanining promises

// const promiseChain = new Promise((resolve, reject)=>{
//     resolve(10)
// })
// promiseChain.then(number =>{
//     console.log(`First number ${number}`);
//     return number*2
// }).then(number => {
//     console.log(`Second number ${number}`);
// }).finally(()=> {
//     console.log("Ended");
// })

//^ 4. Example of fetching the data using promises

// fetch('https://dummyjson.com/products')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log('Error', error))

//^ 5. Example using promise.all

// const promise1 = Promise.resolve("First promise resolved");
// const promise2 = new Promise((resolve, reject)=> setTimeout(resolve,2000,"Second promise"))
// const promise3 = Promise.resolve("Third promise")
// Promise.all([promise1,promise2,promise3])
// .then(result => console.log(result))
// .catch(error => console.log(error))

//! Create a function fetchData that simulates fetching data from an API and returns a promise that resolves after 2 seconds with a success message.

function fetchData() {
    console.log("Fetching data.........");
    
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve("Success")
        }, 2000)
    })
}

fetchData().then(result => console.log(result))
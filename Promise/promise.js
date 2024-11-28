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
//                 console.log(`Id no ${id}`);
//             }
//             else {
//                 console.log("Not found");
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
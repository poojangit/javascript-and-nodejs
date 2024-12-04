//todo ---------Promise.race--------------------

//^ Returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects.
//^ It does not wait for the rest of then promise to complete.

//~ Example 1
// const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'First'))
// const promise2 = new Promise((resolve) => setTimeout(resolve,200,'second'))
// Promise.race([promise1,promise2]).then((result) => console.log(result))

//~ Example 2
// const promise1 = new Promise((_,reject) => setTimeout(reject,1000,'Error'))
// const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'success!'))
// Promise.race([promise1,promise2]).then((result)=> console.log(result)
// ).catch((error) => console.log(error)
// )

//~ Example 3

const promise1 = new Promise((resolve) => setTimeout(resolve, 300, 'Done'));
const promise2 = Promise.reject('Immediate error');

Promise.race([promise1, promise2])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

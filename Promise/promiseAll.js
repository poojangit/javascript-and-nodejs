//todo ----------- Promise.all----------------------

//^ waits for all the promises in an array to resolve or rejects if any promise fails.

//~ Example 1

const promise1 = Promise.resolve(10)
const promise2 = Promise.resolve(20)
const promise3 = Promise.resolve(30)
const promise4 = Promise.resolve(40)

const promiseResult = Promise.all([promise1,promise2,promise3,promise4])
promiseResult.then((value) => console.log(value)
).catch((error)=> console.log(error)
)

//~ Example 2


// const promise1 = Promise.resolve(10)
// const promise2 = Promise.resolve(20)
// const promise3 = Promise.reject(30)console.log(promiseResult);
// const promise4 = Promise.resolve(40)

// const promiseResult = Promise.all([promise1,promise2,promise3,promise4])
// console.log(promiseResult);
// promiseResult.then((values) => console.log(values)).catch((error) => console.log(error))




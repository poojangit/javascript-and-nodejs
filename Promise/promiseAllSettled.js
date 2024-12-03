//todo -----------promise.allSettled() -------------------------

//^ Waits for all the promises to settle(either resolve or reject) and return an array of their results.

//~ Example 1

// const promise1 = Promise.resolve(100)
// const promise2 = Promise.resolve(200)
// const promise3 = Promise.resolve(300)

// const promiseResult = Promise.allSettled([promise1,promise2,promise3])
// console.log(promiseResult);
// promiseResult.then(value=> console.log(value)).catch(error => console.log(error)
// )

//~ Example 2

const promise1 = Promise.resolve(100)
const promise2 = Promise.reject("error")
const promise3 = Promise.resolve(300)

const promiseResult = Promise.allSettled([promise1,promise2,promise3])
console.log(promiseResult);
promiseResult.then(value=> console.log(value)).catch(error => console.log(error)
)

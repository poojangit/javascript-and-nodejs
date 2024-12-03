//TODo --------Promise.any---------------------

//^ waits for the first resolved promise and ignores rejections unless all promises rejects.

// const promise1 = Promise.resolve(10000)
// const promise2 = Promise.resolve(2000)
// const promise3 = Promise.resolve(3000)
// const promiseResult = Promise.any([promise1,promise2,promise3])
// console.log(promiseResult);
// promiseResult.then((value)=> console.log(value)).catch(error => console.log(error)
// )

// const promise1 = Promise.reject(10000)
// const promise2 = Promise.reject(2000)
// const promise3 = Promise.resolve(3000)
// const promiseResult = Promise.any([promise1,promise2,promise3])
// console.log(promiseResult);
// promiseResult.then(value => console.log(value)
// ).catch(error => console.log(error)
// )

const promise1 = Promise.reject(10000)
const promise2 = Promise.reject(2000)
const promise3 = Promise.reject(3000)

const promiseResult = Promise.any([promise1,promise2,promise3])
console.log(promiseResult);
promiseResult.then(value => console.log(value)
).catch(error => console.log(error)).finally(console.log("Executed the data")
)

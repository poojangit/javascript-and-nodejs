//todo -----------ASYNCRONOUS-------------------

//!---------------using callbacks-------------

function fetchData(callBack){
    setTimeout(()=> {
        callBack("Data fetched!!")
    }, 1000)
}
fetchData((message) => console.log(message))

//!--------------using promises--------------

const promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        console.log("Promise Resolved!!");
    }, 1000)
})
promise.then((data) => console.log(data))

//! --------------using async/await

async function fetchData(){
    const response = await fetch("https://api.com")
}
console.log(fetchData());


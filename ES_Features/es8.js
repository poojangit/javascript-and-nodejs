//todo -----------ES8-----------------------

//! async/await

const fetchData = async() => {
    try {
        const response = await fetch('https://api.github.com/users/poojangit')
        console.log(response);
        const data = response.json()
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
fetchData()
console.log("Hello");

//! Object.entries()

// const person = { name: 'Pooja', age: 25 };
// console.log(Object.entries(person));

//! Object.values()

const person = { name: 'Pooja', age: 25 };
console.log(Object.values(person));
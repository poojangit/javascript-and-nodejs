//todo --------------LOCAL STORAGE-----------------

//^ Local storage is a web storage API that is provided by browsers that allows us to store data persistently in the browser

//& Key features

//! Persistant storage
//! key-value pair
//! synchronous API
//! size limit 

//& Methods

//! 1. setItem

localStorage.setItem('userName', 'Pooja')

//! 2. getItem

let userName = localStorage.getItem('userName')
console.log(userName);

//! 3. removeItem

// localStorage.removeItem('userName')

//! 4. clear()

// localStorage.clear()

//! 5. length

console.log(localStorage.length);

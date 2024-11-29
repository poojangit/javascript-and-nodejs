// todo ---------ASYNC/AWAIT------------------------

//^ Async and await are the java features used to handle asynchronous operations and more better than async and await 


//^ 1 . Basic Example 

// async function basicExample() {
//     return "Hello Pooja"
// }
// basicExample().then(result => console.log(result))

//^ 2. Example on Async and await

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


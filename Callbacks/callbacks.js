//todo ----------CALLBACKs---------------------

//^ 1. CallBacks are the functions that is passed as an  argument to another function.
//^ 2. It is used for handling the asynchronous operations such as fetching dta from an API or reading files.

// Basic example of callback------------>
function product(laptop){
    console.log("Im inside product");
    laptop()
}
function myLaptop() {
    console.log("This is my laptop");
}
product(myLaptop)

function greet(name, callback){
    callback(`Hello , Welcome ${name}`);
}

greet("Pooja",(message)=> {
    console.log(message)
})
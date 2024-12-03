//todo ----------Generators-------------------

//^ Generators are the function that can be paused and resumed, allowing us to control the execution flow
//^ yield - pauses the function and returns a value
//^ next() - resumes the execution from where it was paused

//~ Example 1 : 

function* generatorExample() {
    yield 'Hello'
    yield 'God'
}
const gen = generatorExample()
console.log(gen);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

//~ Example 2


function* infiniteNumbers() {
    let i = 0
    while (true) {
        yield i++
    }
}
const infinite = infiniteNumbers()
console.log(infinite.next());
console.log(infinite.next());
console.log(infinite);
console.log(infinite.next());
console.log(infinite.next());

//~ Example 3

function* colorGenerators() {
    yield "Black"
    yield "Blue"
    yield "Orange"
}
for (let color of colorGenerators()) {
    console.log(color);
}

//~ Example 4

function* dataFetching(){
    console.log("fetching data....");
    yield new Promise(resolve => setTimeout(() => resolve('Data loaded'),5000))
}
// console.log(dataFetching());
const fetch = dataFetching()
fetch.next().value.then(data => console.log(data))





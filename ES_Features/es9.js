//todo----------ES9----------------------

//! Asynchronous Iteration (for-await-of)

// const fetchData = async() => [
//     Promise.resolve('Data 1'),
//     Promise.resolve('Data 2')
// ]

// async function printData() {
//     for await(const data of fetchData()) {
//         console.log(data);
//     }
// }
// console.log(printData());
// console.log(fetchData());

//!  Rest/Spread Properties for Objects

const person = {name : 'Pooja', age : 20, city : 'Bengaluru'}
const [name, ...rest] = person.name
console.log(rest);
const newPerson = {...person, country : 'India'}
console.log(newPerson);

//! finally in promise

//! RegExp 
const datePattern = /(?<day>\d{2})-(?<month>\d{2})-(?<year>\d{4})/;
const match = datePattern.exec('30-11-2024');
console.log(match.groups);
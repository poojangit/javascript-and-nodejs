//todo --------Scheduling--------------

//^ Scheduling means telling a javascript to run a piece of code after sometime
//^ After certain delay - setTimeOut
//^ At regular intervals - setInterval
//^ As soon as the current stack is clear - setImmediate/process.nextTick

// const time = setTimeout(()=> {
//     console.log("Ran after some time");
// },2000)
// time

// const repeatedTime = setInterval(()=> {
//     console.log("Runs every 1 sec"); 
// }, 1000)

// setTimeout(()=> clearInterval(repeatedTime), 5000)

// setImmediate(()=> {
//     console.log("runs after current operation, before I/O ");
// })

//~ Example - 4

// let debounceTimer
// function onUserInput() {
//     clearTimeout(debounceTimer)
//     debounceTimer = setTimeout(() => {
//         console.log("search triggered!");
//     }, 3000)
// }

//~ Task scheduler app

// class TaskScheduler{
//     constructor() {
//         this.tasks = []
//     }
//     addTasks(taskname, delay) {
//         const task = {taskname, delay}
//         this.tasks.push(task)
//         setTimeout(()=> {
//             console.log(`added tasks ${taskname} after ${delay}ms`);  
//         }, 1000)
//     }
//     showTasks() {
//         console.log("Scheduled tasks : ");
//         this.tasks.forEach(a => console.log(`${a.taskname} in ${a.delay}ms`))
        
//     }
// }
// const t = new TaskScheduler()
// t.addTasks("\nSend email", 2000)
// t.addTasks("do pending works", 3000)
// t.showTasks()

//~ Event loop + scheduling

// console.log("1");
// setImmediate(() => {
//     console.log("I'm set Immediate");
// }, 3000)

// setTimeout(()=> {
//     console.log("I'm set time out");
// }, 3000)

// setInterval(() => {
//     console.log("I'm setInterval")
// },2000)


// process.nextTick(()=> {
//     console.log("Im process next tick");
// }, 2000)

//~ Example 

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

process.nextTick(() => console.log("D"));

console.log("E");

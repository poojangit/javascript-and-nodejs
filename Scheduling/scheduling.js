//todo --------Scheduling--------------

//^ Scheduling means telling a javascript to run a piece of code after sometime
//^ After certain delay - setTimeOut
//^ At regular intervals - setInterval
//^ As soon as the current stack is clear - setImmediate/process.nextTick

const time = setTimeout(()=> {
    console.log("Ran after some time");
},2000)
time

const repeatedTime = setInterval(()=> {
    console.log("Runs every 1 sec"); 
}, 1000)

setTimeout(()=> clearInterval(repeatedTime), 5000)
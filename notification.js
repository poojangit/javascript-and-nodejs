// const input = document.getElementById('notify');
// const message = input.value

// function notification() {
//    const x = Notification.requestPermission().then(function(result){
//     console.log(result);
    
//     if(result === 'granted'){
//         popupNotify()
//     } else {
//         console.log('Permission Denied');
        
//     }
//    })
// }

// function popupNotify(){
//     const notification = new Notification('New Notification', {
//         body : input.value || "This is a default notification message"
//     })
//     notification.onclick = function () {
//         console.log(message + "Notification Clicked");
        
//     }
// }

//& -------Requesting Permission-------------

// if("Notification" in window){
//     Notification.requestPermission().then(permission => {
//         console.log("Permission status : ", permission);
        
//     })
// }

//& --------Showing a notification --------

// if(Notification.permission === 'granted'){
//     new Notification("Hello Pooja", {
//         body : "You have a new message!",
//     })
// }

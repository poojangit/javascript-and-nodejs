//todo -------------EVENT HANDLING---------------------

// ^ It is a process of resposnding to the users interation or events like clicks, key presses, mouse movements , form submissions etc.

document.getElementById("submit").addEventListener("click", function(){
    console.log("You have submitted the form"); 
})

//! click - button click
//! mousehover - hover effect
//! keydown - typeing in a input field
//! submit - form submission
//! load - window or image load

// document.getElementById("input").addEventListener('keyup', function() {
//     console.log("You stoped writting");
// })

document.getElementById("input").addEventListener('keydown', function(event) {
    console.log("You started writing" , event.key);
})

// document.getElementById("input").addEventListener('keypress', function() {
//     console.log("start");
// })

const movingIcon = document.getElementById("moving_piece");
let lastknownscrollposition = 0

function JourneyMovement(){
    movingIcon.style.right = "250px";
}

document.addEventListener('scroll', function(){
 lastknownscrollposition = window.scrollY

 if(lastknownscrollposition >= 100) {
    JourneyMovement();
    console.log("scroll")
 } 
})


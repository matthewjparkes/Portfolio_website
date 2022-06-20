const movingIcon = document.getElementById("moving_piece");
const impImage = document.getElementById("step1_image");
let lastknownscrollposition = 0

function JourneyMovement(topCoord, rightCoord){
    movingIcon.style.top = topCoord;
    movingIcon.style.right = rightCoord;
}




document.addEventListener('scroll', function(){
 lastknownscrollposition = window.scrollY
 if(lastknownscrollposition >= 100 && lastknownscrollposition < 400) {
    JourneyMovement("435px", "825px");
    console.log("scroll");
    impImage.style.right = "240px";
    impImage.style.visibility = "hidden";
 } else if (lastknownscrollposition <= 100){
    JourneyMovement("10px", "250px");
    impImage.style.right = "175px";
    impImage.style.visibility = "visible";
 } else if (lastknownscrollposition >= 400 && lastknownscrollposition < 800){
    JourneyMovement("850px", "250px" );
    impImage.style.right = "240px";
    impImage.style.visibility = "hidden";
 } else if (lastknownscrollposition >= 800 && lastknownscrollposition < 1200){
    JourneyMovement("1285px", "825px" );
    impImage.style.right = "240px";
    impImage.style.visibility = "hidden";
 }
}
)


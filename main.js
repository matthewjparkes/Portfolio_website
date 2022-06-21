//Getting Elements
const Assyrian1 = document.getElementById("Assyrian1");
const Assyrian2 = document.getElementById("Assyrian2");
const Raindrop = document.getElementById("Raindrop");
const SQL = document.getElementById("SQL");
const Maki = document.getElementById("Maki");
const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");
const para3 = document.getElementById("para3");

function MoveObjectRight(object){
   object.style.right = "0px";
}

function MoveObjectLeft(object){
   object.style.right = "100px";
}



para1.onmouseover = function(){
   MoveObjectRight(Assyrian1);
   MoveObjectRight(Assyrian2);
}
para1.onmouseleave = function(){
   MoveObjectLeft(Assyrian1);
   MoveObjectLeft(Assyrian2);
}
para2.onmouseover = function(){
   MoveObjectRight(Maki);
   
}
para2.onmouseleave = function(){
   MoveObjectLeft(Maki);
   
}
para3.onmouseover = function(){
   MoveObjectRight(Raindrop);
   MoveObjectRight(SQL);
}
para3.onmouseleave = function(){
   MoveObjectLeft(Raindrop);
   MoveObjectLeft(SQL);
}

















// const movingIcon = document.getElementById("moving_piece");
// const impImage = document.getElementById("step1_image");
// let lastknownscrollposition = 0

// function JourneyMovement(topCoord, rightCoord){
//     movingIcon.style.top = topCoord;
//     movingIcon.style.right = rightCoord;
// }




// document.addEventListener('scroll', function(){
//  lastknownscrollposition = window.scrollY
//  if(lastknownscrollposition >= 100 && lastknownscrollposition < 400) {
//     JourneyMovement("435px", "825px");
//     console.log("scroll");
//     impImage.style.right = "240px";
//     impImage.style.visibility = "hidden";
//  } else if (lastknownscrollposition <= 100){
//     JourneyMovement("325px", "250px");
//     impImage.style.right = "175px";
//     impImage.style.visibility = "visible";
//  } else if (lastknownscrollposition >= 400 && lastknownscrollposition < 800){
//     JourneyMovement("850px", "250px" );
//     impImage.style.right = "240px";
//     impImage.style.visibility = "hidden";
//  } else if (lastknownscrollposition >= 800 && lastknownscrollposition < 1200){
//     JourneyMovement("1285px", "825px" );
//     impImage.style.right = "240px";
//     impImage.style.visibility = "hidden";
//  }
// }
// )


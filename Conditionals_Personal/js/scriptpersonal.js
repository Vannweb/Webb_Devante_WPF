// Devante Webb 12/11/2014 Conditionals Personal, Memory Card Capacity
// asks for the users memory card size(in mb because i dont know how to convert from gigs to megs
var cardCap = Number(prompt("How much memory does your memory card have?(in megs)"));
// asks for the users number of pictures
var pictureNum = Number(prompt("How many pictures have you taken today?"));
// asks for the users camera type
var cameraType = prompt("Is your camera a DLSR shooter(Y/N)");
// if the camera is a DLSR we go through this block
if(cameraType == "Y"){
    var raw = prompt("Did you shoot in Raw or JPEG(enter Raw or JPEG)"); // asks if you shot in raw or jpeg
    if(raw == "Raw"){ //if Raw is selected the number of picture are multiplied by 20 because of bigger file size
         picSize = pictureNum * 24;
    }else{
         picSize = pictureNum * 5; // otherwise it's 5, jpegs are smaller
    }
}else{
    picSize = pictureNum * 5; // if it's not a dlsr we just multiply by the known average size of most jpegs
}
if(picSize >= cardCap){ // if the picsize is at the cap or over we alert the user that he may need to purchase a new card
    result = cardCap - picSize;
    alert("You have " + result + " mbs of memory, Consider replacing your memory card! " );
}else{ // otherwise we just inform them of how much memory they have left.
    result = cardCap - picSize;
    alert("You have " + result + " mbs of memory left");
    console.log("You have " + result + " mbs of memory left");
}


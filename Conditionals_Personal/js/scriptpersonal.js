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
    if(raw == "Raw"){
         picSize = pictureNum * 24;
    }else{
         picSize = pictureNum * 5;
    }
    console.log(picSize);
}else{
    picSize = pictureNum * 5;
}
if(picSize >= cardCap){
    result = cardCap - picSize;
    alert("You have " + result + " mbs of memory, Consider replacing your memory card! " );
}else{
    result = cardCap - picSize;
    alert("You have " + result + " mbs of memory left");
}


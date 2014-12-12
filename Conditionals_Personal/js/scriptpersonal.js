// Devante Webb 12/11/2014 Conditionals Personal, Memory Card Capacity

var cardCap = Number(prompt("How much memory does your memory card have?(in megs)"));
var pictureNum = Number(prompt("How many pictures have you taken today?"));
var cameraType = prompt("Is your camera a DLSR shooter(Y/N)");

if(cameraType == "Y"){
    var raw = prompt("Did you shoot in Raw or JPEG(enter Raw or JPEG)");
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
    alert("You have " + result + " gigs of memory, Consider replacing your memory card! " );
}else{
    alert("You have " + result + " gigs of memory left");
}


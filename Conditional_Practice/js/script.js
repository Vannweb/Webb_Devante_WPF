//Conditional Logic

var kidHeight = 52;
var minHeight = 48;
var parentHeight = 45; // The height of the kid if they need a parent

// if the child is old enough print to the console you can ride!
// if the kid is over 48 inches in height
if(kidHeight > minHeight){
    console.log("You can ride the coaster!");
}else if(kidHeight > parentHeight){
    console.log("You can ride, but only with a parent present.");
}else{
    console.log("Sorry kid, you've got some growing to do first!")
}

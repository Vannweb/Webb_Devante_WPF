//Conditional Logic


var age = 11;
var book;

// If the child is under 10 they get green eggs and ham, otherwise they get the time machine
/*
if(age <10){
    book = "green eggs and ham";
}else{
    book = "Time machine";
}
console.log(book);
*/
book = (age < 10) ? "green Eggs and Ham" : "The Time Machine";
console.log(book);
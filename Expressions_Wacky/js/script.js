// Devante Webb 6/12/2014, Expressions Wacky
// In the beginning I welcome the user enthusiastically

alert("WELCOME WANDERER!");
alert("You've stumbled upon a wonderful secret.");
alert('If you cooperate, we can unlock massive magical potential within you.');

var name = prompt('First, please enter your first name:'); // I ask for the users first name
var gender = ["Son", "Daughter"]; // I add an array. containing both sexes to reference the users gender later
// I ask for the users gender input, this allows to include both sexes in an efficient way
var sex = prompt("Okay, are male or female \n 0 for male, \n 1 for female"); // it allows me multiple paths
var fatherName = prompt("Now enter your fathers first name:"); // I ask for the users fathers names
//I ask for the users fathers profession here
var fatherProfession = prompt("Now enter your fathers profession(psst, or your dream profession either will work)")
var favColor = prompt("Now enter your favorite color:"); //Here I ask for the users favorite color
// I ask for the users favorite element next
var favElement = prompt('Finally, enter your favorite element i.e. flame, water, air, earth:');
// Finally here I add the users input together to form the message that I print for them to see.
alert("We now dub thee " + name + ". " + gender[sex] + " of " + fatherName + ", the " + fatherProfession + "" +
" \n \nThe " + favColor + " " + favElement +
" Sorcerer!");
// To wrap up my project I also print it to the console.
console.log("We now dub thee " + name + ". " + gender[sex] + " of " + fatherName + ", the " + fatherProfession + "" +
" \n \nThe " + favColor + " " + favElement +
" Sorcerer!");
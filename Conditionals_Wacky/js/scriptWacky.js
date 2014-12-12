// Devante Webb 12/11/2014 Conditionals Wacky, Social Media Checking

alert("Today we will explore how much you use social networking"); // here we greet the user
// we ask for the number of times the user checks there social media
var loginsDay = Number(prompt("How many times do you think you check you social media a day?"));
// we ask for the number of times a week the user thinks he uses it
var loginsWeek = Number(prompt("How many days a week do you check your social media?"));

addictionNumber = loginsDay * loginsWeek; // we multiply the day by the weeks
// here we determine if the number is between 0 and 20
if(addictionNumber >= 0 && addictionNumber <= 20){
    // we output this message if it does
    alert("You check your social media roughly " + addictionNumber + " times in a week. You're doing pretty good!");

}
if(addictionNumber >= 21 && addictionNumber <= 50){ // here we determine if it's between 21 and 50
    // we then output the following mesage after calculations
    alert("You check your social media roughly " + addictionNumber + " times in a week. It's a bit excessive but not too bad!");
}
if(addictionNumber >=51 && addictionNumber <=100){ // here we determine if the total falls between 51 and 100
    // then output more of a silly message
    alert("You check your social media roughly " + addictionNumber + " times in a week. Whoa, I think it's time to relax a little");

} // finally we determine if it falls after 100 checks
if(addictionNumber >=101) {
    // we then output a series of silly alerts to our social media addicted user.
    alert("You check your social media roughly " + addictionNumber + " times in a week!!");
    alert("...");
    alert("Look there is help out there. I won't judge you but...");
    alert("I can't just let you keep tweeting and liking your life away.");
    alert("We can beat this together.");
}
console.log("You check your social media roughly " + addictionNumber + " times in a week!!!");
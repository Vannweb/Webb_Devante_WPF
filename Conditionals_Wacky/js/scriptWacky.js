// Devante Webb 12/11/2014 Conditionals Wacky, Social Media Checking

alert("Today we will explore how much you use social networking"); // here we greet the user
// we ask for the number of times the user checks there social media
var loginsDay = Number(prompt("How many times do you think you check you social media a day?"));
// we ask for the number of times a week the user thinks he uses it
var loginsWeek = Number(prompt("How many days a week do you check your social media?"));

addictionNumber = loginsDay * loginsWeek;

if(addictionNumber >= 0 && addictionNumber <= 20){
    alert("You check your social media roughly " + addictionNumber + " times in a week. You're doing pretty good!");

}
if(addictionNumber >= 21 && addictionNumber <= 50){
    alert("You check your social media roughly " + addictionNumber + " times in a week. It's a bit excessive but not too bad!");
}
if(addictionNumber >=51 && addictionNumber <=100){
    alert("You check your social media roughly " + addictionNumber + " times in a week. Whoa, I think it's time to relax a little");

}
if(addictionNumber >=101){
    alert("You check your social media roughly " + addictionNumber + " times in a week!!");
    alert("...");
    alert("Look there is help out there. I won't judge you but...");
    alert("I can't just let you keep tweeting and liking your life away");

}
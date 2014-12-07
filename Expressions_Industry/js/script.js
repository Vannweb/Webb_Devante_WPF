// Devante Webb 6/12/2014, Expressions Industry determining Product Quantity(I work at Gamestop)
//I inform the user of the purpose of this website
alert("Welcome Partner, today we're going to determine how many games we need of a certain product for the upcoming month.");
var gameNames =["Assassins Creed", "The Last of Us", "Halo"]; // here I make an array containing the game names
/*next I have the user enter the value of the game so it can be used as a reference number to repeat the name of the game
throughout the course of my coding*/
var Game = prompt("Enter which game we're recording, 0 for Assassins Creed, 1 for The Last of Us, 2 for Halo:");
/* The next four lines I collect data from the user and have it recorded in the corresponding weeks.*/
var firstWeek = prompt("How many copies of " + gameNames[Game] + " did you sell in week one?");
var secondWeek = prompt("How many copies of " + gameNames[Game] + " did you sell in week two?");
var thirdWeek = prompt("How many copies of " + gameNames[Game] + " did you sell in week three");
var fourthWeek = prompt("Lastly, how many copies of " + gameNames[Game] + " did you sell in week four?");

// again this didn't work -  var gameSales =[firstWeek, secondWeek, thirdWeek, fourthWeek];

// this is what i had at first, didn't work out - sumOfgameSales = gameSales[0] + gameSales[1] + gameSales[2] + gameSales[3];

/* I was so exited for this assignment because I figured out how to do a lot of things on my own, I actually felt
like I was progressing. However I've come to a pretty stubborn road block and I'm frustrated and finally giving up. you
see when I try to add the data I've received from the user through prompts, it simply records the data like 10101010 or
50505050 instead os 40 or 200 respectively. I can't figure out how to remedy this as it only occurs with addition
if i subtract, multiply, or divide, it works flawlessly. I'm hoping you can provide some insight for me, anything
 would help, thank you!
 */
// ~~That being said if you change the symbol from plus, to any other operation, the code works just fine
var sumOfgames = (firstWeek + secondWeek + thirdWeek + fourthWeek); //here I add the 4 pieces of data together

Average = sumOfgames / 4; // Here I divide the sum of the games by 4 to gain the average
// I multiply the average by .5 then add the average to make up for games purchased, so the user can make sure he or she
result = Average * .5 + Average; // (cont.) has extra copies next month


//Lastly I print to both the user and the console

alert("You need to purchase " + result + " copies of " + gameNames[Game] + " Next month.");

console.log("You need to purchase " + result + " copies of " + gameNames[Game] + " Next month.");

//Devante Webb 12/11/2014 Group 3: Movie Ticket Discounts

//Prompts the user for their age
var age = Number(prompt("Please enter your age:"));
//prompts the user for the time
var time = Number(prompt("Please enter the time you're going to see the movie(in whole numbers please): "));
/* if the age of the person is below 10 OR 55 and above OR the time is greater than or equal to 3 and less than or equal
 5 then your ticket price will come up as 7*/
if(age >= 55 || age < 10 || time >= 3 && time <= 5 ){
    alert("Your ticket is 7 dollars");
    console.log("Your ticket is 7 dollars");
}else{ //else the price will come up as 12
    alert("Your ticket is 12 dollars");
    console.log("Your ticket is 12 dollars");
}
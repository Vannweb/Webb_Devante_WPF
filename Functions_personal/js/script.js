// Devante Webb 12/18/2014 Functions Personal

// Welcome the user to the page
alert("Hello this is the temperature regulator. It's our job to keep you comfortable.");
//Ask the user for the temperature
var temp = Number(prompt('What is the temperature currently?'  ));
//Asks the user if they are hot or cold
var condition = String(prompt('Are you too hot or cold?"Please enter Hot or Cold"'));
//ASks the user for a comfortable temperature
var preference = Number(prompt("At what temperature do feel comfortable"));
//if statement for the too hot condition
if(condition == "Hot"){
    while (temp > preference){ //while loop to lower the temperature
        temp--; // decrements temperature
    }
}if(condition == "Cold"){ //If statement for the too cold condition
    while (temp < preference){ // loop to increase the temperature
        temp++ //increment the temperature
    }
}//Tenary to print out either the too cold condition or the too hot condition with a message to the user
//acknowledging his or her preference.
(condition == "Cold") ? alert("Alright! We've set the temperature to " + temp + "\n It'll be warmer soon!") : alert(" Okay! We've set the temperature to " + temp + "\n It'll be cooler shortly." )
console.log(temp); //prints the temperature




// Devante Webb 12/11/2014 Group 1: Celsius or Fahrenheit Converter

// Asks the user for the temp
var userTemp = Number(prompt("Please enter the temperature:"));
// asks the user for the unit of the temp
var userDegree = prompt("Please indicate Fahrenheit or Celsius by entering 'F' or 'C' respectively: ");
// uses an if statement to see if C or F was entered, if C the conversion to F happens
if (userDegree == "C"){
    //Uses the mathematical formula to convert C to F
    var result = userTemp * 9/5 + 32;
    alert("The temperature is " + result + " degrees Fahrenheit" ); //Prints out to user result
    console.log("The temperature is " + result + " degrees Fahrenheit" )
}else{ //If C isn't entered the conversion to C happens instead
    var result = (userTemp - 32) * 5 / 9; // The formula for F to C
    alert("The temperature is " + result + " degrees Celcius"); //Prints to the user the results
    console.log("The temperature is " + result + " degrees Celcius")
}
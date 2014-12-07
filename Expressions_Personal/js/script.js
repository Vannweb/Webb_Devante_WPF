// Devante Webb 6/12/2014, Expressions Personal, How much did you spend in gas
// With this line I welcome the guest and give them information about this sites purpose
alert ("Welcome! Here, we will calculate how much you spent in gas this week.");
// we get to business here, I ask the user how far they've traveled
var distanceTraveled = prompt("Please enter the distance, in miles, that you drove this week:");
// Here I ask what the price of gas is in the Users area
var areaGas = prompt("Now, How much does gas cost in your area?");
// finally here I ask how many miles the users car can get out of one gallon of gas
var milesGallon = prompt("Finally, how many miles can your car drive on each gallon of gas?")
// in the next line I divide the distance traveled by the cars gas mileage to see how many gallons the user expended
distanceTraveled /= milesGallon; // I also used a different assignment operator for the sake of the assignment only
// then here I multiply the amount of gas used by the price of gas in the area to find the total.
var result = distanceTraveled * areaGas;
// extra step, I alert the user of his or her results here
alert("You spent $" + result + " on gas this week.")
// lastly I print the result to the console
console.log(result);


// Devante Webb Friday, Dec 5th 2014 Slice of Pie Part 2
var pizzaCount = 5; // the amount of Pizzas ordered
var pizzaSlices = pizzaCount * 8; // the amount of slices each pizza contains.
var partyPeople = 9; // The amount of people at the party


var dogPizza = pizzaSlices % partyPeople; // pizza slices the dog gets.
var peoplesPizza = pizzaSlices/partyPeople; //The result of the amount of slices each person is eating.
// Print out how much pizza the dog gets
console.log("Sparky gets " + dogPizza + " slices of pizza." );
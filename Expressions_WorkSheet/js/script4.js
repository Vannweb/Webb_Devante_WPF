// Devante Webb Friday, Dec 5th 2014 Shopping Bill Assignment
var groceryTotals = [88, 64, 99, 31, 80]; // "given" grocery store totals array
//adding the total of all the grocery prices, Note(is there a simpler way to write all of this??)
var weeksTotal = groceryTotals[0]+groceryTotals[1]+groceryTotals[2]+groceryTotals[3]+groceryTotals[4];
var result = weeksTotal / 5; // dividing the total by the number of weeks
// print out the total and the average spent.
console.log("You have spent a total of $" + weeksTotal + ' on groceries over 5 weeks. That is an average of $'+ result
+ " per week."  );


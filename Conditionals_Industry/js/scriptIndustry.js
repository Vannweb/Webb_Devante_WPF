// Devante Webb 12/11/2014 Industry Conditionals
// Welcome the user
alert("Please tell me about your progress today.");
// ask how many games have been sold today
var gameSales = Number(prompt("How many games have you sold today?"));
// prompt for system sales totals
var systemSales = Number(prompt("How many gaming systems have you sold today?"));
// game products sales( this is like merchandise that it's a game or system, if it wasn't apparent enough
var gameProducts = Number(prompt("How much non-gaming merch have you sold today?"));
// on sundays in the store, our sales don't matter considering how early we close and how late we open, it's in a mall
var today = prompt("What day is today? \n Sun, Mon, Tue, Wed, Thu, Fri, Sat:");
// if it's sun or you sale enough consoles, or you sale enough games, your sales will look fine in the system
if( today == "Sun" || systemSales >= 4 || gameSales >= 24 ){
    alert("Sales today are great, please continue");
}// if your products are out selling the games and systems, it looks really good in the system as they often don't sale as well
if(gameProducts > gameSales && gameSales < 24 && systemSales < 3){ //
    alert("excellent work selling the non-game merch")
} //if games sales are low and system sales are low it'll look bad, otherwise we get a sales are steady reading
(gameSales < 24 && systemSales < 3) ? alert("sales are low, please upsale products") : alert("Sales are steady today");
//: alert("Please upsell non-gaming Merchandise");

// Devante Webb 12/11/2014 Group 2: Determining Username and Password
// Prompt for username
var userName = prompt("Please enter your username:");
var userPass = prompt("Please enter your password:"); // prompt for password
var name = "EddardStark"; // defining the name variable
var pass = "Winter is Coming"; // defining the password variable

if (userName != name){ //if the name entered does not match name var then this alert happens
    alert("The username you entered was not found, please refresh and try again.");
    console.log("The username you entered was not found, please refresh and try again.");
}else if (userPass != pass){ // if the password entered does not match pass var then this alert happens
    alert("The password you entered does not match our records, Please refresh and start again");
    console.log("The password you entered does not match our records, Please refresh and start again");
}else{ // if both the name and password check out then the user gets this message
    alert("Welcome Eddard of House Stark!");
    console.log("Welcome Eddard of House Stark!");
}
// Devante Webb 12/18/2014 Functions Personal

alert("Hello this is the temperature regulator. It's our job to keep you comfortable.");
var temp = Number(prompt('What is the temperature currently?'  ));
var condition = String(prompt('Are you too hot or cold?"Please enter Hot or Cold"'));
var preference = Number(prompt("At what temperature do feel comfortable"));
if(condition == "Hot"){
    while (temp > preference){
        temp--;
    }
}if(condition == "Cold"){
    while (temp < preference){
        temp++
    }
}
(condition == "Cold") ? alert("Alright! We've set the temperature to " + temp + "\n It'll be warmer soon'") : alert(" Okay! We've set the temperature to " + temp + "\n It'll be cooler shortly'" )
console.log(temp);




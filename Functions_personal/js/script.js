// Devante Webb 12/18/2014 Functions Personal

alert("Hello this is the temperature regulator. It's our job to keep you comfortable.");
var temp = Number(prompt('What is the temperature currently?'  ));
var condition = String(prompt('Are you too hot or cold?"Please enter Hot or Cold"'));

if(condition == "Hot"){
    while (temp > 65){
        temp--;
    }
}if(condition == "Cold")

console.log(temp);




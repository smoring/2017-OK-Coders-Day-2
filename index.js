var name = "Susan";
var age = 25;

console.log("My name is " + name + " and I am age " + age);

// Need to find out how many years until drinking age
var drinkingAge = 21 - age;

if ( age < 21 ) {
	console.log("...and I can have beer in " + drinkingAge + " Years");
} else if (age === 21){
	console.log("yeah... celebrate");
} else {
	console.log("leave me alone I am drinking");
}

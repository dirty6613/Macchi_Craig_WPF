/*
Craig Macchi
2/8/14
Expression Worksheet
*/

//Dog Years

//Calculate how old Sparky the pit bull is in dog years based on his actual age.

var actualAge = 7;

//multiply actual age * 7
var dogAge = actualAge * 7;

//print out the converted results

console.log("Sparky is " + actualAge + " human years old which is " + dogAge + " in dog years.");


//Slice of Pie part 1

//calculates how much pizza each partygoer will get at the party.

var slices = 12;
var people = 5;
var totalPizza = 1;

//multiplies totalPizza * slices divided by people
results = (totalPizza * slices) / people;

// print out results
console.log("Each person ate " + results + " slices of pizza at the party.");

//Slice of Pie part II

//modulo operator to calculate Sparky's slices
sparkySlices = (totalPizza * slices) % people;

//print out resluts
console.log("Sparky got " + sparkySlices + " slices of pizza");

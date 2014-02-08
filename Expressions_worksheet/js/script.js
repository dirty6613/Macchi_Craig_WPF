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


//Average shopping bill

//array
var groceryTotals = [100, 120, 95, 90, 140];


//calculate total amount & average weekly amount
var total = groceryTotals[0] + groceryTotals[1] + groceryTotals[2] + groceryTotals[3] + groceryTotals[4];
average = total/5;

console.log("You have spent a total of $" + total + " on groceries over 5 weeks.  That is an average of $" + average + " per week.");
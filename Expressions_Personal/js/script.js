//Personal Calculator

var costHouse = prompt("I am calculating the amount of money needed to save each week to have enough money for a down payment on a house.  \nPlease enter the cost of the house.");
var percentDown = prompt("Please enter what percent needs to be provided for down payment. (enter percentage as decimal)");
//calculates amount down.
var amountDown = costHouse * percentDown;
var weeksUntilClosing = prompt("Please enter how many weeks until closing.");
//calculats amount to save per week.
var amountPerWeek = amountDown/weeksUntilClosing;
var result = "The amount needed to save each week is " + amountPerWeek + ".";
//displays results
alert(result);
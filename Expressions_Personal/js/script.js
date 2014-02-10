//Personal Calculator for calculating amount of money needed to save per week for down payment on a house.

//cost of house variable input
var costHouse = prompt("I am calculating the amount of money needed to save each week to have enough money for a down payment on a house.  \nPlease enter the cost of the house.");
//percentage of down payment that is required
var percentDown = prompt("Please enter what percent needs to be provided for down payment. (enter percentage as decimal)");
//calculates amount down.
var amountDown = costHouse * percentDown;
//amount of weeks until closing
var weeksUntilClosing = prompt("Please enter how many weeks until closing.");
//calculats amount to save per week.
var amountPerWeek = amountDown/weeksUntilClosing;
//actual results
var result = "The amount needed to save each week is " + amountPerWeek + ".";
//displays results
alert(result);
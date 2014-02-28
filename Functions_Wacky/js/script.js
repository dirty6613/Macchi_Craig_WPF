/*	Craig Macchi
	2/27/2014
	Functions Wacky */

//This is a sleep calculator, it calculates the amount of time you sleep.
//start app with description
alert("This is a sleep calculator.  Besides the time your wasting doing this calculation, would you like to know how many hours you waste sleeping?");

//function with hours of sleep for each day
function sleepDaily(am, pm){
	//hours added for the day
	hoursDaily = am + pm;
	//return to function
	return hoursDaily;	
}
var a = prompt("How many hours did you sleep from 12:00am to 11:59am?");
var p = prompt("How many hours did you sleep from 12:00pm to 11:59pm?");
//call function with total of daily
var dailyTotal = sleepDaily(a, p);

console.log(dailyTotal);



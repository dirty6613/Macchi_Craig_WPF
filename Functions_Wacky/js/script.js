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
//input for hours slept in am
var a = prompt("How many hours did you sleep from 12:00am to 11:59am?");
//input for hours slept in pm
var p = prompt("How many hours did you sleep from 12:00pm to 11:59pm?");
//call function with total of daily
//function call in variable
var dailyTotal = sleepDaily(parseInt(a), parseInt(p));
//calc hours slept to hours per week
var weeklyTotal = dailyTotal * 7;
//calc hours slept to day per month
var monthlyTotal = Math.round((weeklyTotal * 4)/24);
//calc hours slept to days per year
var yearlyTotal = Math.round((weeklyTotal * 52)/24);

//console log output of hours and days spent sleeping
console.log("If you maintain sleeping " + dailyTotal + " hours daily, you'll sleep "  + weeklyTotal + " hours in the next 7 days!  You'll sleep " + monthlyTotal + " days of the next 28 days!  And you'll sleep " + yearlyTotal + " days of 365 this year!");
//alert output of hours and days spent sleeping
alert("If you maintain sleeping " + dailyTotal + " hours daily, you'll sleep "  + weeklyTotal + " hours in the next 7 days!  You'll sleep " + monthlyTotal + " days of the next 28 days!  And you'll sleep " + yearlyTotal + " days of 365 this year!");


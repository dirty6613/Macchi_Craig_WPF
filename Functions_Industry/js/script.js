/*	Craig Macchi
	2/27/2014
	Functions Industry */
	
//DOT Compliance Evaluator
//I manage drivers and it is against the law for them to work over 60 hours in a 7 day week.  We must document their hours, for each day.  This will assist with that process.

//function for driver input
//had to change input variables to Int - Could you tell me what other options I could have used?  If I didn't do that the input was being treated as a string...?
function driverLog(Sun, Mon, Tues, Wed, Thurs, Fri, Sat){
	hours = parseInt(Sun) + parseInt(Mon) + parseInt(Tues) + parseInt(Wed) + parseInt(Thurs) + parseInt(Fri) + parseInt(Sat);
	//if statement to calculate if under 60 hours
	if (hours > 60){
		hoursLeft = hours - 60;
	}else{
	//else option to calculate if over 60 hours	
		hoursLeft = 60 - hours;
	}
	//return data for function
	return hoursLeft;
}
//alert to describe reason for application
alert("It is against the law for drivers to work over 60 hours in a 7 day week.  We must document their hours, for each day.  This will assist with that process to prevent a driver from breaking the law.  \nPlease enter how many hours you worked in the last 7 days.");
//prompts to gain driver hours
var sunV = prompt("How many hours worked on Sunday?");
var monV = prompt("How many hours worked on Monday?");
var tuesV = prompt("How many hours worked on Tuesday?");
var wedV = prompt("How many hours worked on Wednesday?");
var thursV = prompt("How many hours worked on Thursday?");
var friV = prompt("How many hours worked on Friday?");
var satV = prompt("How many hours worked on Saturday?");
//var to call function
var totalHoursLeft = driverLog(sunV, monV, tuesV, wedV, thursV, friV, satV);
//ternary operator -  onsole log output for hours worked and hours left if under 60 hours or output for hours over if worked over 60 hours
(hours < 60) ? console.log("You have worked " + hours + " hours.  You have " + totalHoursLeft + " hours left!") : console.log("You have worked " + hours + " hours.  You are " + totalHoursLeft + " hours over the legal limit, you must stop working immediately!");
//ternary operator - alert output for hours worked and hours left if under 60 hours or output for hours over if worked over 60 hours
(hours < 60) ? alert("You have worked " + hours + " hours.  You have " + totalHoursLeft + " hours left!") : alert("You have worked " + hours + " hours.  You have " + totalHoursLeft  + " hours over the legal limit, you must stop working immediately!");

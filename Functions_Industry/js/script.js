/*	Craig Macchi
	2/27/2014
	Functions Industry */
	
//DOT Compliance Evaluator
//I manage drivers and it is against the law for them to work over 60 hours in a 7 day week.  We must document their hours, for each day.  This will assist with that process.

//function for driver input
//had to change input variables to Int - Could you tell me what other options I could have used?  If I didn't do that the input was being treated as a string...?
function driverLog(Sun, Mon, Tues, Wed, Thurs, Fri, Sat){
	hours = parseInt(Sun) + parseInt(Mon) + parseInt(Tues) + parseInt(Wed) + parseInt(Thurs) + parseInt(Fri) + parseInt(Sat);
	if (hours > 60){
		hoursLeft = hours - 60;
	}else{
		hoursLeft = 60 - hours;
	}
	return hoursLeft;
}

alert("It is against the law for drivers to work over 60 hours in a 7 day week.  We must document their hours, for each day.  This will assist with that process to prevent a driver from breaking the law.  \nPlease enter how many hours you worked in the last 7 days.");

var sunV = prompt("How many hours worked on Sunday?");
var monV = prompt("How many hours worked on Monday?");
var tuesV = prompt("How many hours worked on Tuesday?");
var wedV = prompt("How many hours worked on Wednesday?");
var thursV = prompt("How many hours worked on Thursday?");
var friV = prompt("How many hours worked on Friday?");
var satV = prompt("How many hours worked on Saturday?");

var totalHoursLeft = driverLog(sunV, monV, tuesV, wedV, thursV, friV, satV);
if (hours < 60){
console.log("You have worked " + hours + " hours.  You have " + totalHoursLeft + " hours left!");
alert("You have worked " + hours + " hours.  You have " + totalHoursLeft + " hours left!");
}

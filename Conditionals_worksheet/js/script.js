// Activity: Conditionals Worksheet
// Craig Macchi
// 2/14/14

/*
Label the section of code appropriately
Write the givens as variables
The result should be calculated using variables, not literal values when possible.
Create code that will make decisions based on the value of the givens
Print the result of the decision-making to the console.
Use only code and techniques learned in this class.
*/

// Stuff your face I

// Must weigh 250 lbs to enter the heavy-weight division
var competitorsWeight = 180;
var minWeight = 250;

// if weight is greater than or equal to 250?
if (competitorsWeight >= minWeight){
	
	//if weight is equal to or greater than 250
	console.log("The competitor qualifies for the heavyweight division.");
}else{
	//if the weight is under 259
	console.log("The competitor needs to gain some weight!");
}


//Group 1
//Celsius to Fahrenheit converter

//convert Celsius to Fahrenheit or Fahrenheit to Celsius based on user input
var tempInput = "f";
var tempF = 90;
var tempC = 100;


/*var tempInput = console.log("This is a converter to convert Fahrenheit to Celsius or Celsius to Fahrenheit. \nPlease enter \n\"C\" to convert Celsius to Fahreneit \nor \n\"F\" to convert Fahrenheit to Celsius.");
*/
//what option has the user entered for temp conversion?
//for Fahrenheit to Celsius
if (tempInput === "F" || tempInput === "f"){

	/* var tempF = */
	console.log("Please enter your temperature in Fahrenheit");
	tempDesc = "Celsius";
	results = ((tempF -  32)  *  5/9).toFixed(2);

//for Celsius to Fahrenheit	
}else if (tempInput ==="C" || tempInput === "c"){
	
	/* var tempC = */
	console.log("Please enter your temperature in Celsius");
	tempDesc = "Fahrenheit";
	results = (tempC * 9/5 + 32);
//for incorrect selection	
}else{
	console.log("You have entered an incorrect character!  Please refresh your page.");
}

//output results
	console.log("The temperature is " + results + " degrees " + tempDesc + ".");


//Group 2
//Check the Login

var user = "John";
var userPass = "JDpass";
var username = "John";
var password = "JDpass";

//Check if username and password are correct
if (username === user && password === userPass){
	console.log("Welcome, " + user);
}
//if incorrect user
if (username !== user){
	console.log("User not found.  Try again.");
}
//if incorrect password
if (username === user && password !== userPass){
	console.log("Password does not match our records.");
}
// Craig Macchi
// 2/14/2014
//Assignment: Conditional Industry

//A telemarketing sales prompt based on potential buyer's responses
//set variable for gender
var gender = prompt("Is the person male or female.");
//convert to lowercase
var gender = gender.toLowerCase();
//if statement to convert male to Mr.
if (gender === "male"){
	gender = "Mr."
}
//if statement to convert female to Mrs.
if (gender === "female"){
	gender = "Mrs."
}
//set variable for potential customer's last name
var lastName = prompt("Please enter person's last name");
//set variable to intitial football question
var football_question = prompt("Hello, " + gender + lastName + "! \nDo you watch football?");
//convert to lowercase
var football_question = football_question.toLowerCase();
//set var for football responses
if (football_question == "yes"){
	//convert to lowercase
	var fantasy_question = prompt("That's great! Then you should definitely know about fantasy football...right?");
}
if (football_question == "no"){
	var fantasy_question = prompt("I understand, football isn't everyone's game, but you must know someone who does enjoying watching football over the weekends and enjoys fantasy football?");
}
//set var for responses
var fantasy_question = fantasy_question.toLowerCase();
if (fantasy_question == "yes"){
	alert("Yes, it is pretty popular.  What is becoming even more popular is our new fantasy football game called the Gridiron God Challenge.  Let me tell you about it!");
}
if (fantasy_question == "no"){
	alert("No, that's okay.  Let me tell you a little about our fantasy football game, called the Gridiron God Challenge");
}
//set variable for amount of memberships + tell descritpion of game
var memberships = prompt("The Gridiron God Challenge is a weekly pick'em fantasy football game. It has no salary cap, no draft and allows you to pick a line-up each and every week!  \nEach week you select 10 players and the highest score wins the weekly cash prize....if you score the highest score for the season you win the grand cash prize and become the Gridiron God Champion!  \nLet's get you started with your membership this year.  \nEach membership for the season cost $10.00.  But we are offering a strong promotion for buying multiple memberships.  After the first membership, we offer each additional membership at half-off!  That's right, take an additional 50% off of each membership you buy after the first one, so " + gender + lastName + " How many memberships would you like to buy?");
//math for memberships
//var for cost
mCost = 10.00;
//calc for memberships if more than 1 to incorporate the 50% off - ternary operator
(memberships > 1) ? amountDue = mCost + (((memberships - 1) * (mCost/2))) : amountDue = mCost * memberships;

//output total due and thank customer to console
console.log("Your total due today is $" + amountDue + ". \nWe appreciate your time and business!");
//Output total due and thank customer to alert box
alert("Your total due today is $" + amountDue + ". \nWe appreciate your time and business!");


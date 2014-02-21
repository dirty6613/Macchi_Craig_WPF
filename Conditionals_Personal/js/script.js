// Craig Macchi
// 2/14/2014
//Assignment: Conditional Personal

//Calculating weeks until we have enough money for next tattoo

//set value of tatoo
//alert to explain the saving process
alert("We want to get our next new tatto.  We are going to save 5% of our weekly pay This caclulator will let us know when we have enough money to get our next tattoo.");
//set var for tatto cost
var tattoo = prompt("How much is the tattoo you want to get?");
//set var for weekly income
var weeklyIncome = prompt("What is your weekly pay salary?");
//calculations
//amount of cash saved toward tatto
var cashSaved = prompt("How much money do you have saved?");
//amount saved each week
var weeklyAmountSaved = (weeklyIncome * .05);
//weeks untils
var money = (tattoo - (cashSaved + weeklyAmountSaved));
//if we don't have enough money, money will be greater than 0
if (money > 0){
	//output message
	message = "You don't have enought money.  You still have $" + money + " to go."; 
	}else{
		//if we have enough
	message = "You have enough money for your $" + tattoo + " tattoo!  You don't need to save anymore!";
}
//output console
console.log(message);
//output alert
alert(message);
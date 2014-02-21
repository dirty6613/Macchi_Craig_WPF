// Craig Macchi
// 2/14/2014
//Assignment: Conditional Wacky

// Child Support Calculator
//set var for empty string
var empty = "";
//set var for how many kids
var kids = prompt("How many kids do you have?");
//check if empty string
if (kids === empty){
	var kids = prompt("You forgot to input something, please input: \nHow many children do you have?");
}
//check if input of any kids
if (kids>0){
	//how many kids do they have sole custody of?
	var kidsLiveWith = prompt("How many children do you have sole custody of?");
	//var for how many kids they pay child support on
	var csKids = kids - kidsLiveWith;
	//if no kids
	if (csKids !== 0){
		//if true output
		//gather income
		var income = prompt("You have child support, how much money do you make weekly?");
		//if income greater than 999
		if (income > 999){
			//output message to log and alert
			//var percent
			var percent = 0.30;
			//calc for results
			var results = income * percent;
			//calc per kid
			var kResults = results * csKids;
			//output message
			var message = "You fall into the highest bracket and must pay 30% (" + percent +") of your income.  You would pay $" + results + " weekly for eack kid, totaling $" + kResults +".";
			//output message to log
			console.log(message);
			//output alert
			alert(message);
			//if income is less than 1000 and greater than 499
		}else if (income < 1000 && income > 499){
			//var percent
			var percent = 0.20;
			//calc for results
			var results = income * percent;
			//calc per kid
			var kResults = results * csKids;
			//output message
			var message = "You fall into the mid-tier bracket and must pay 20% (" + percent +") of your income.  You would pay $" + results + " weekly for eack kid, totaling $" + kResults +".";
			//output to log
			console.log(message);
			//output alert
			alert(message);
			//if income is less than 500 and more than 0
		}else if (income < 500 && income > 0){
			//var percent
			var percent = 0.10;
			//calc for results
			var results = income * percent;
			var kResults = results * csKids;
			//output message			
			var message = "You fall into the lowest bracket and must pay 10% (" + percent +")  of your income.  You would pay $" + results + " weekly for eack kid, totaling $" + kResults +"." ;
			//output to log
			console.log(message);
			//output alert
			alert(message);
		}else{
			var message = "You make " + income + ".  You are in danger of falling behind on your child support.  You need get a job!!!!!";
			console.log(message);
			alert(message);
		}
			
	}else{
		//if false output
		var message = "Your kids live with you, you don't have any child support";
		console.log(message);
		alert(message);
	}
//if they have no kids
}else{
	//var for output results
	var message = "You have no children, currently.  Great, you get to keep all your money!"
	//output to console
	console.log(message);
	//output alert
	alert(message);
}
//Wacky Calculator - MASH
  //variable for incorrect selection
	  var incorrect ="That is an incorrect option! \nPlease reload your page!";

//selection option if they would like to play game
var play = prompt("Would you like to play the game MASH?  \n\nSelect 1 for yes or 2 for no.");
if (play == 1)
  {
	  //array for housing options
	  var house = ["Mansion", "Apartment", "Shack", "House"];
	  //prompt to select house by number
	  var selectHouse = prompt("Please select a number from 1 to 20");
	  if (selectHouse > 0 && selectHouse < 6){
		  house = (house[0]);
		  }
		  else if (selectHouse >5 && selectHouse <11){
			  house = (house[1]);
		  }
		  else if (selectHouse >10 && selectHouse <16){
			  house = (house[2]);
		  }
		  else if (selectHouse >15 && selectHouse <21){
			  house = (house[3]);
		  }
		  else {
			  result = prompt(incorrect);
			  return;}
		//options for gender
		spouse = ["Man","Woman"];
		//prompt to select what gender a person likes  
var gender = prompt("You live in a(n) " + house + "\nDo you like men or women?  \nSelect 1 for men or 2 for women.");
	if (gender == 1) {
		spouse = (spouse[0]);}
	
	else if (gender == 2){
		spouse = (spouse[1]);}
		else  { 
		var result=prompt(incorrect);
		return;}
		 //options for spouse income
	var spouseIncome = ["Rich","Poor"];
	// selection for income
	var income = prompt("You chose a " + spouse + ".  Please select a number between 1-20.");
	if (income > 0 && income < 11){
		spouseIncome = (spouseIncome[0]);
		}else if (income > 10 && income <21){
			spouseIncome = (spouseIncome[1]);
		} else { 
		var result=prompt(incorrect);
		return;}
	//options for spouse looks
	var spouseLooks = ["Ugly", "Good-looking"];
	// selection for looks
var looks = prompt("You have a " + spouseIncome + " " + spouse + "!  Please select a number between 1-20.");
	if (looks > 0 && looks < 11){
		spouseLooks = (spouseLooks[0]);
		}else if (looks > 10 && looks<21){
			spouseLooks = (spouseLooks[1]);
		} else { 
		var result=prompt(incorrect);
		return;}
result = "You have a " + spouseLooks + ", " + spouseIncome + " " + spouse + " and you live together in your " + house + "!  \nThank you for playing!";

  }else if (play == 2)
  {
  var result = "Sorry you didn't want to play, maybe next time!!!"
  } else
  {var result = prompt(incorrect); 
  return;}
//output message
alert(result);
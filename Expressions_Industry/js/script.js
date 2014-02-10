//Industry-specific Calculator for calculating amount of memberships needed for website payout and how much money would be made or loss based on memberships.

//amount of money given away
var prizeMoney = prompt("I am calculating the amount of memberships needed annually for GridironGod.com to break even of money given away and how much money would be gained or lossed based on memberships. \nPlease enter the amount of money given away.");

//cost per membership
var cost = prompt("Please enter the cost of memberships.");

//how many members
var members = prompt("Please enter how many members signed up.");

//calculates money made or lost
var money = (cost * members) - prizeMoney;
if (money >= 0)
  {
  var result = "The amount of money made is $" + money;
  }
else
  {
  var result = "The amount of money lost is $" + (money*= -1);
  }
alert(result)
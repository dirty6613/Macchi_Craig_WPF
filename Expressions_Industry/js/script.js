//Industry-specific Calculator for calculating amount of memberships needed for website payout and how much money would be made or loss based on memberships.

var prizeMoney = prompt("I am calculating the amount of memberships needed annually for GridironGod.com to break even of money given away and how much money would be gained or lossed based on memberships. \nPlease enter the amount of money given away.");
var cost = prompt("Please enter the cost of memberships.");
var membersNeeded = prizeMoney / cost;
var result = "The amount of members needed to break even is " + membersNeeded + " paid members";
alert(result);
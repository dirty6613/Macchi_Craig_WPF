/*	Craig Macchi
	2/27/2014
	Functions Personal */	
//A basketball score tally calculator
//establish global variable for score
var score;
//function for 1 point
function fg1(){
	score =+ 1;
}
//function for 2 pointer
function fg2(){
	score =+ 2;	
}
//function for 3 pointer
function fg3(){
	score =+ 3;
}

while (score !== "end"){
var score = prompt("Input amount of points just scored.  Type \"end\" to end game.  The score is " + teamA + "to " + teamB + ".");
}
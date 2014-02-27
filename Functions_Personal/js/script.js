/*	Craig Macchi
	2/27/2014
	Functions Personal */	
//A basketball score tally calculator
//establish global variable for score
var score;
var b = 0;
var a = 0;
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
function teamA(){
	if(score == 1){
	a += 1;
	}else if(score == 2){
	a += 2;
	}else if (score == 3){
	a += 3;
}
return a;
}
function teamB(){
	if(score == 1){
	b += 1;
	}else if(score == 2){
	b += 2;
	}else if (score == 3){
	b += 3;
	
}
return b;
}

while (score !== "end"){
var team = prompt("Input team who scored: a or b");
if (team === "a"){
	var totalA = teamA();
}
if (team === "b"){
	var totalB = teamB();
}
var score = prompt("Input amount of points just scored.  Type \"end\" to end game.");
alert("The score is " + totalA + " to " + totalB + ".");
}
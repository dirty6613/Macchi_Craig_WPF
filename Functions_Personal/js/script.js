/*	Craig Macchi
	2/27/2014
	Functions Personal */	
//A basketball game score tally calculator for during a game
//establish global variable
var score;
var TotalH = 0;
var TotalA = 0;
//function for Away team scores
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
//function for Home team scores
function teamH(){
	if(score == 1){
	h += 1;
	}else if(score == 2){
	h += 2;
	}else if (score == 3){
	h += 3;
	
}
return h;
}

while (score !== "end"){

var score = prompt("Input amount of points just scored.  Type \"end\" to end game.");
var team = prompt("Input team who scored: \'h\' for Home or Away for \'a\'");
if (team === "a"){
	var totalA = teamA();
}
if (team === "h"){
	var totalH = teamH();
}
console.log("The score is " + totalH + " to " + totalH + ".");
alert("The score is " + totalH + " to " + totalA + ".");
}
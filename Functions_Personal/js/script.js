/*	Craig Macchi
	2/27/2014
	Functions Personal */	
//A basketball game score tally calculator for during a game
//establish global variable
var score;
var a = 0;
var h = 0;
//function for Away team scores
function teamA(){
	//if 1 pt
	if(score == 1){
	a += 1;
	//of 2 pts
	}else if(score == 2){
	a += 2;
	//if 3 pts
	}else if (score == 3){
	a += 3;
}
// return value to function
return a;
}
//function for Home team scores
function teamH(){
	//if 1 pt
	if(score == 1){
	h += 1;
	//if 2 pts
	}else if(score == 2){
	h += 2;
	//if 3 pts
	}else if (score == 3){
	h += 3;
	
}
// return value to function
return h;
}
//while loop to continously refresh until user prompts end of game, by typing end.
while (score !== "end"){
//Input for score.  Only 1 for free throw, 2 for field goal, or 3 for 3-pointer.  Type end when the game is complete.
var score = prompt("Input amount of points just scored.  \nEnter 1, 2, or 3. \nType \"end\" to end game.");
//input for team who scored.  Enter h for Home Team or a for Away team.
var team = prompt("Input team who scored: \'h\' for Home or Away for \'a\'");
//if statement for away team to call TeamA function
if (team === "a"){
	var totalA = teamA();
}
//if statement for home team to call TeamH function
if (team === "h"){
	var totalH = teamH();
}
//output to console log for current score
console.log("The score is " + totalH + " to " + totalA + ".");
//output to alert for current score
alert("The score is " + totalH + " to " + totalA + ".");
}
//if statement for when the game is over
if (score === "end"){
	//output to console log for ending game results
	console.log("It is the end of the game!  The Home team scored  " + totalH + " points to the Away team scoring" + totalA + " points.");
	//output to alert for ending game results
	alert("It is the end of the game!  The Home team scored  " + totalH + " points to the Away team scoring " + totalA + " points.");
}
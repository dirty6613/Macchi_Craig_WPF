/*	Craig Macchi
	2/24/2014
	Functions Worksheet */

// Circumference
//Call circleCircum function to calc circumference
var x = circleCircum(5);

// Calculate the Circumference of a Circle
function circleCircum(r){
	//var for calc
	var d = r * 2;
	var n = 3.14;
	//calc of circle circum
	var circle = n * d;
	//return value of circle
	return circle;
}
//output to log
console.log("The circumference of the circle is " + x + ".");

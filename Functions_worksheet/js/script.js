/*	Craig Macchi
	2/24/2014
	Functions Worksheet */

// Circumference
//Call circleCircum function to calc circumference
var x = circleCircum(3.14,5);

// Calculate the Circumference of a Circle
function circleCircum(n, r){
	var d = r * 2;
	var circle = n * d;
	return circle;
}
console.log("The circumference of the circle is " + x + ".");

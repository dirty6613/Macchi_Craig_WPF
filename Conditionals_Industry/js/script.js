// Craig Macchi
// 2/14/2014
//Assignment: Conditional Industry

//A telemarketing sales prompt based on potential buyer's responses
//set variable for gender
var gender = prompt("Is the person male or female.");
//if statement to convert male to Mr.
if (gender === "male"){
	gender = "Mr."
}
//if statement to convert female to Mrs.
if (gender === "female"){
	gender = "Mrs."
}
//set variable for buyer's last name
var lastName = prompt("Please enter person's last name");
prompt("Hello, " + gender + lastName + "!");

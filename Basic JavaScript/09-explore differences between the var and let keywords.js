//One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations

var camper = "James";
var camper = "David";

//The code above, the camper variable is originally declared as James, 
//and is then overridden to be David. The console then displays the string David.

//let was introduced in ES6, a major update to JavaScript, to solve this potential issue with the var keyword.
//If you replace var with let in the code above, it results in an error

//The following code results in an error
let camper = "James";
let camper = "David";

//So unlike var, when we use let, a variable with the same name can only be declared once.
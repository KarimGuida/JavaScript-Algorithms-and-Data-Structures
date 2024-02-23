//In JavaScript, String values are immutable, which means that they cannot be altered once created.

//For example, the following code will produce an error because the letter B in the string Bob cannot be changed to the letter J:

let myStr = "Bob";
myStr[0] = "J";

//The only way to change myStr would be to assign it with a new value, like this:

let myStr = "Bob";
myStr = "Job";
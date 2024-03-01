// Variables which are declared without the let or const keywords are automatically created in the global scope.
// This can create unintended consequences elsewhere in your code or when running a function again.
// You should always declare your variables with let or const.

let myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
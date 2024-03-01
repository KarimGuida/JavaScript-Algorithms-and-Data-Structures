// Variables which are declared within a function, as well as the function parameters, have local scope.
// That means they are only visible within that function.

function myLocalScope() {
    let myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);
//There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.
//The most basic operator is the equality operator ==.
//The equality operator compares two values and returns true if they're equivalent or false if they are not.

function testEqual(val) {
    if (val == 12) {
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);
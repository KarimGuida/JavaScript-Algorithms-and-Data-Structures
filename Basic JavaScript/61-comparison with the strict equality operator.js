//Strict equality (===) is the counterpart to the equality operator (==).
//However, unlike the equality operator, which attempts to convert both values being compared to a common type,
// the strict equality operator does not perform a type conversion.

//Examples

3 ===  3  // true
3 === '3' // false

function testStrict(val) {
    if (val === 7) {
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
// The inequality operator (!=) is the opposite of the equality operator.
// It means not equal and returns false where equality would return true and vice versa. Like the equality operator,
// the inequality operator will convert data types of values while comparing.

function testNotEqual(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);
// The less than operator (<) compares the values of two numbers.
// If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false.
// Like the equality operator, the less than operator converts data types while comparing.

function testLessThan(val) {
    if (val < 25) {  
      return "Under 25";
    }

    if (val < 55) { 
      return "Under 55";
    }

    return "55 or Over";
  }
  
testLessThan(10);
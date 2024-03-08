//The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
      return "Outside";
    }
     
    return "Inside";
}
  
testLogicalOr(15);
// Objects can be thought of as a key/value storage, like a dictionary.
// If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain.
// This is most useful when you know that your input data is limited to a certain range.

function phoneticLookup(val) {
    let result = "";
  
    // switch(val) {
    //   case "alpha":
    //     result = "Adams";
    //     break;
    //   case "bravo":
    //     result = "Boston";
    //     break;
    //   case "charlie":
    //     result = "Chicago";
    //     break;
    //   case "delta":
    //     result = "Denver";
    //     break;
    //   case "echo":
    //     result = "Easy";
    //     break;
    //   case "foxtrot":
    //     result = "Frank";
    // }
  
    const lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    }
  
    result = lookup[val];
  
    return result;
}
  
phoneticLookup("charlie");
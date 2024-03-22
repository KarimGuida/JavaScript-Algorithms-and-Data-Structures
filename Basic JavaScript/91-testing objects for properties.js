// To check if a property on a given object exists or not, you can use the .hasOwnProperty() method.
// someObject.hasOwnProperty(someProperty) returns true or false depending on if the property is found on the object or not.

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    }
    else{
      return "Not Found";
    }
}
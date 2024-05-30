let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
};
  
function getArrayOfUsers(obj) {
    const output = [];
  
    for (let property in obj){
      output.push(property)
    }
  
    return output
}
  
console.log(getArrayOfUsers(users));
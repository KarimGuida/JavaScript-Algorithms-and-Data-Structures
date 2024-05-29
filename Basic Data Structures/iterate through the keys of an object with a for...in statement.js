const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
}
  
function countOnline(usersObj) {
    var output = 0;
  
    for (let user in usersObj){
      if (usersObj[user].online){
        output += 1;
      }
}
  
    return output;
}
  
console.log(countOnline(users));
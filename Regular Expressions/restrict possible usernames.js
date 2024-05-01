let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]$|^[a-z][a-z]+[0-9]*$|^[a-z][0-9]+[0-9]+$/i;
let result = userCheck.test(username);
let hello = "   Hello, World!  ";
let wsRegex = /(\s+)(Hello, World!)(\s+)/;
let result = hello.replace(wsRegex, "$2"); 
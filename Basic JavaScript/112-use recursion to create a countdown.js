function countdown(n){
    if (n < 1){
      return [];
    }
    
    else{
      const output = countdown(n - 1);
      output.unshift(n);
      return output
    }
}

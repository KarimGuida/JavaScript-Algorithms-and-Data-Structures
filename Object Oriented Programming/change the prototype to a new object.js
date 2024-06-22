function Dog(name) {
    this.name = name;
}
  
Dog.prototype = {
    numLegs: 4,
  
    eat: function(){
      console.log("eat")
    },
  
    describe: function(){
      console.log("describe")
    }
};
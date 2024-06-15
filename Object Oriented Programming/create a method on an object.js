let dog = {
    name: "Max",
    numLegs: 4,
  
    sayLegs: function() {
      return `This dog has ${this.numLegs} legs.`
    }
};
  
dog.sayLegs();
// SIMPLE OBJECT LITERAL //
person = {
  name : "bob",
  greet : function(){
      console.log('helloo ' + this.name); //works
      console.log('helloo ' + person.name); //works
  }
};

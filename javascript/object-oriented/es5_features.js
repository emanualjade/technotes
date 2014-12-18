var createPerson = function(firstName, lastName){
  var person = {};

  Object.defineProperties(person, {
    firstName : {
      value: firstName,
      writable: true,
      configurable: true,
      enumerable: true
    },
    lastName : {
      value: lastName
    },
    fullName: {
      get : function(){
        return this.firstName + " " + this.lastName
      }
    }
  });


  return person;

}
 var person = createPerson("John", "Doe");

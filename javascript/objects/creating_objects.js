//SIMPLE OBJECT LITERAL
person = {
  name : "bob",
  greet : function(){
      console.log('helloo ' + this.name); //works
      console.log('helloo ' + person.name); //works
  }
};



//An object that creates and maintains instances
//Access to those instances are through the Contact object methods
//See the directory of instances_with_ids for a finished version
Contact = (function() {
  var instances = [];
  
  var Contact = function (attrs) {
    this.firstName = attrs.firstName;
  };

  return {
    create : function(attrs){
      contact = new Contact(attrs);
      instances.push(contact);
      return contact;
    },
    clear : function(){
      instances = [];
      return instances;
    },
    all : function() {
      return instances;
    }
  };

}());

console.log(Contact.all());
Contact.create({ firstName: "Andrew" });
console.log(Contact.all());






if(typeof Object.create !== 'function'){
  Object.create = function(o){
    function F(){}
    F.prototype = o;
    return new F();
  };
}

var person = {
  first_name : "john",
  last_name : "doe",
  _age : 20,
  //interests : [],
  age : function(age){
    if(age){
      this.age = age;
      return age - 5;
    }
    return this._age - 5;
  },
  add_interests : function(){
    this.interests = this.interests || [];
    for(var i = 0; i < arguments.length; i++){
      this.interests.push(arguments[i]);
    }
  }
};

var jill = Object.create(person);
jill.first_name = "Jill";
jill.last_name = "Taylor";
jill.age(28);
jill.add_interests("Hiking");

console.log(jill.first_name);
console.log(jill.age());

var superHuman = Object.create(person);
superHuman.wield_power = function(){
  return this.power.toUpperCase() + " to the rescue!!!";
};

var jane = Object.create(superHuman);
jane.first_name = "Jane";
jane.power = "Hugs";
jane.add_interests("Hugs");
console.log(jane.wield_power());













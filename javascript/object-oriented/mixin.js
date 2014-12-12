// This is a mixin pattern - it can be used to extend an object
// we created our own extend method. You could just as easily use
// something like jquerys $.extend to do the same thing

function extend(target){
  if(!arguments[1]){
    return;
  }

  for(var i = 1, len = arguments.length; i < len; i++){
    var source = arguments[i];

    for(var prop in source){
      if(!target[prop] && source.hasOwnProperty(prop)){
        target[prop] = source[prop];
      }
    }

  }

}

function Person(name){
  this.name = name;
}
function Dog(name){
  this.name = name;
}

var speaker = {
  speak: function(){
    return this.name + " is speaking";
  }
}

var mover = {
  walk: function(){
    return this.name + " is walking";
  },
  run: function(){
    return this.name + " is running";
  }
}

var arithmetic = {
  add: function(){
    return this.name + " is adding numbers";
  },
  multiply: function(){
    return this.name + " is multiplying numbers together";
  }
}
extend(Person.prototype, speaker, mover, arithmetic);
extend(Dog.prototype, speaker, mover);
var john = new Person("John Doe");
john.walk();
john.add();
var fido = new Dog("Fido");
fido.walk();

// EXAMPLE - CLASSICAL INHERITANCE
// Parent class constructor
function Parent() {
  this.a = 42;
}

// Parent class method
Parent.prototype.method = function method() {};

// Child class constructor
function Child() {
  Parent.call(this);
  this.b = 3.14159
}

// Inherit from the parent class
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

// Child class method
Child.prototype.method = function method() {
  Parent.prototype.method.call(this);
};

// Instantiate
this.instance = new Child();


// EXAMPLE
var parent = {
  get: function fn(){
    return this.val;
  },
  val: 42
};

var child = Object.create(parent);
child.val = 33;

var grandchild = Object.create(child);
grandchild.val = 77;

parent.get(); // 42
child.get(); // 33
grandchild.get(); // 77


// EXAMPLE
// This is an example of object inheritance
// Coffee enherits from beverage
function Beverage(name, temperature){
  this.name = name;
  this.temperature = temperature;
}

Beverage.prototype.drink = function(){
  console.log("I'm drinking " + this.name);
};

function Coffee(type){
  Beverage.call(this, "coffee", "hot");
  this.type = type;
}

Coffee.prototype = Object.create(Beverage.prototype);

Coffee.prototype.sip = function(){
  console.log("Sipping some awesome " + this.type + " " + this.name);
}

var water = new Beverage("water", "cold");
var coffee = new Coffee("bold dark roast");
water.drink();
coffee.drink();
coffee.sip();

// EXAMPLE  - POLYMORPHISM
var answer = {
  get: function(){
    return this.val;
  },
  val: 42
};

var firmAnswer = Object.create(answer);
firmAnswer.val = 3.14
firmAnswer.get = function fn2() {
  return answer.get.call(this) + "!!";
};

answer.get(); // 42
firmAnswer.get(); // 3.14!!

// EXAMPLE WITH CONSTRUCTOR
var AnswerPrototype = {
  constructor: function fn0(value){
    this._val = value;
  },
  get: function fn1(){
    return this._val;
  }
};

var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.constructor(42);
lifeAnswer.get(); // 42

var desertAnswer = Object.create(AnswerPrototype);
desertAnswer.constructor(3.14);
desertAnswer.get();

var FirmAnswerPrototype = Object.create(AnswerPrototype)
FirmAnswerPrototype.get = function fn2(){
  return AnswerPrototype.get.call(this) + "!!";
}

var luckyAnswer = Object.create(FirmAnswerPrototype);
luckyAnswer.constructor(7);
luckyAnswer.get(); // "7!!"

var magicAnswer = Object.create(FirmAnswerPrototype);
magicAnswer.constructor(3);
magicAnswer.get(); // "3!!"










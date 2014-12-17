// BASIC CLASS VERSION ONE //
function MyClass() {
  this.a = 42;
}
MyClass.prototype.method = function method() {};
instance = new MyClass();

// BASIC CLASS VERSION TWO //
var SomeClass;

SomeClass = (function() {
  function SomeClass(name) {
    this.name = name;
  }

  SomeClass.prototype.amethod = function(a) {
    return console.log(this + a);
  };

  return SomeClass;

})();

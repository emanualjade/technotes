//ONE
var car = {goes: "far"}

//TW0
var car = new Object();
car.goes = "far"

// Force a constructor to user "new" in case it was called without it
function User(first, last) {
  if (!(this instanceof arguments.callee)) {
    return new User(first,last);
  }
  this.name = first + " " + last;
}
var name = "Rukia";
var user = User("Ichigo", "Kurosaki");

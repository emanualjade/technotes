function Person(first, last, age){
  this.first_name = first;
  this.last_name = last;
  this._age = age;
}

var jill = new Person("jill", "Taylor", 28);
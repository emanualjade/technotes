Contact = (function() {

  var instances = [];
  var id = 0;

  var Contact = function (attrs) {
    id += 1;
    this.id = id;

    for (var attr in attrs) {
      this[attr] = attrs[attr];
    }
    this.fullName = function(){
      return this.firstName + ' ' + this.lastName;
    };

    this.render = function(){
      var html = "<h1>"+this.fullName()+"</h1>";
      html += "<img src='"+this.image+"' />";
      html += "<li> Email: "+this.email+" </li>";
      html += "<li> Phone: "+this.telephone+" </li>";
      return html;
    };

  };

  Contact.prototype = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    image: '../img/john.jpg',
    telephone: 'xxx-xxx-xxxx'
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
    },
    get : function(id){
      for (var i = 0; i < instances.length; i++) {
        if( instances[i].id == id ){
          return instances[i];
        }
      }
      return null;
    },
    find : function(key, value){
      var found = [];
      for(var i = 0; i < instances.length; i++){
        if(instances[i][key] == value){
          found.push(instances[i]);
        }
      }
      return found;
    }
  };

}());

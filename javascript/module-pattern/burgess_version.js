
var jill = (function(){
  var first_name = "Jill",
      last_name = "Taylor",
      age = 28,
      interests = [];

  function get_public_age(){
    return age - 5;
  }

  return {
    full_name : function(){
      return first_name + " " + last_name;
    },
    age : get_public_age,
    interests : function(){
      return interests;
    },
    add_interest: function(){
      for(var i =0; i < arguments.length; i++){
        interests.push(arguments[i]);
      }
    }
  }

}());

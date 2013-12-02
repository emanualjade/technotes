var etrain; etrain = etrain || {};
etrain.util = etrain.util || (function() {
  // **********************
  // CLONING AN OBJECT
  // **********************

  // PHOTOCOPY CLONING - each attribute is actually copied over to the new object
  // TRACKING PAPER CLONE - attributes exist on the prototype
  // I see it being used like this

  // photoClone uses more memory with faster lookups
  // var clone = photoClone(obj);
  // tracingClone uses less memory with slower lookups having to search the prototype chain
  // var clone = tracingClone(obj);

  // Shallow copy using jQuery - photocopy
  // var newObject = jQuery.extend({}, oldObject);

  // Deep copy - photocopy
  // var newObject = jQuery.extend(true, {}, oldObject);

  // Using Object.create - tracing clone
  // Object.create = (function(){
  //   function F(){}
  //   return function(o){
  //     F.prototype = o
  //     return new F()
  //   }
  // })()
  // var clone = Object.create(original);


  // Straight Javascript function - photoClone
  // function clone3(obj) {
  //   var target = {};
  //   for (var key in obj) {
  //    target[key] = obj[key];
  //   }
  //   return target;
  // }

  /* Using JSON.parse - photoClone
  The limitation of this approach is that you won't be able to 
  handle reference cycles, user-defined classes, or standard 
  Date objects (Date isn't part of the JSON standard.) The 
  advantage is that it's very reliable and doesn't require you 
  to include any extra .js files. http://oranlooney.com/deep-copy-javascript/
  */
  function photoClone(obj){
    return JSON.parse(JSON.stringify(obj));
  }

  /*
  This tracingClone is very similar to Object.create
  It sets the original objects attributes and values
  as the prototype on the new object
  */
  tracingClone = (function(){
    function F(){}
    return function(o){
        F.prototype = o;
        return new F();
    }
  })();


  // **********************
  // ARRAY AND OBJECT UTILS
  // **********************
  //Search through an array of objects
  function findIndexByKeyValue(arr, key, value){
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][key] == value) {
        return i;
      }
    }
    return null;
  }

  return { 
    photoClone:photoClone,
    tracingClone:tracingClone,
    findIndexByKeyValue:findIndexByKeyValue
  }

})();


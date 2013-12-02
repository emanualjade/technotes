people = [
    {
        id: 1,
        name: 'john'
    },
    {
        id: 2,
        name: 'sally'
    },
    {
        id: 1,
        name: 'bill'
    }
]
//UTILITY FUNCTIONS

//Search through an array of objects
function findIndexByKeyValue(obj, key, value){
    for (var i = 0; i < obj.length; i++) {
        if (obj[i][key] == value) {
            return i;
        }
    }
    return null;
}

//Search an array and return the indexes
Array.prototype.find = function(searchStr) {
  var returnArray = false;
  for (i=0; i<this.length; i++) {
    if (typeof(searchStr) == 'function') {
      if (searchStr.test(this[i])) {
        if (!returnArray) { returnArray = [] }
        returnArray.push(i);
      }
    } else {
      if (this[i]===searchStr) {
        if (!returnArray) { returnArray = [] }
        returnArray.push(i);
      }
    }
  }
  return returnArray;
}


// Filter
console.group("Filter");
    person1 = people.filter(function (person) { return person.name == "sally" });
    person2 = people.filter(function (person) { return person.name == "not here" });
    people3 =  people.filter(function (person) { return person.name != "not here" });
    console.log(person1);
    console.log(person2);
    console.log(people3);
console.groupEnd();

// Grep
console.group("Grep");
    person = jQuery.grep(people, function (person, index) { return person.name == "sally" });    
    person2 = jQuery.grep(people, function (person, index) { return person.name == "not here" });
    people3 = jQuery.grep(people, function (person, index) { return person.name != "sarah" });
    console.log(person1);
    console.log(person2);
    console.log(people3);
console.groupEnd();

// Grep with invert
console.group("Grep with invert");
    group = jQuery.grep(people, function (person, index) { return person.name == "sally" }, true);    
    console.log(group);
console.groupEnd();

// Find Index by Key and Value
console.group("Find Index by Key and Value");
    person = findIndexByKeyValue(people, 'name', "john");
    person2 = findIndexByKeyValue(people, 'name', "sally");
    person3 = findIndexByKeyValue(people, 'name', "sarah");
    console.log(person);
    console.log(person2);
    console.log(person3);
console.groupEnd();

//Search a regular array and return the indexes
console.group("Search a regular array and return the indexes");
    var tmp = [5,9,12,18,56,1,10,42,'blue',30, 7,97,53,33,30,35,27,30,'35','Ball', 'bubble'];
    var thirty = tmp.find(30); // Returns 9, 14, 17
    //var regexp = tmp.find(/^b/); // returns 8,20    (first letter starts with b)
    console.log(thirty);
    //console.log(regexp);
console.groupEnd();

// Map with array
console.group("Map with array");
    var arr = [ "a", "b", "c", "d", "e" ];
    arr = $.map( arr, function(val, i) {
      return val.toUpperCase() + i;
    });
    console.log(arr);
console.groupEnd();

// Map with object
console.group("Map with object");
    var dimensions = { width: 10, height: 15, length: 20 };
    dimensions = $.map( dimensions, function( value, key ) {
      return key + ' ' +value * 2;
    }); 
    console.log(dimensions);
console.groupEnd();

// Map with a condition
console.group("Map with object");
    condition = $.map( [0,1,2], function(n){
      return n > 0 ? n : null;
    });
    console.log(condition)
console.groupEnd();

// Map to a new augmented array with more length
console.group("Map to new modified array");
    x = $.map( [0,1,2], function(n){
        return [ n, n + 'new' ];
    });
    console.log(x)
console.groupEnd();

// jquery each with array
console.group("jQuery.each with array");
    $.each([52, 97], function(index, value) {
      console.log(index + ': ' + value);
    });
console.groupEnd();


// jquery each with object
console.group("jQuery.each with object");
    var obj = {
      "flammable": "inflammable",
      "duh": "no duh"
    };
    $.each( obj, function( key, value ) {
      console.log( key + ": " + value );
    });
console.groupEnd();

//jquery.each breaking out of the loop by returning false
console.group('jQuery.each breaking out of loop by returning false')
    var arr = ["one", "two", "three", "four", "five" ];
    jQuery.each(arr, function(index, value) {
       console.log(index + ' ' + value);
       return (this != "three"); // will stop running after "three"
   });
console.groupEnd();

// jquery inArray
console.group("jquery inArray - find index of value in array");
    var arr = [ 4, "Pete", 8, "John" ];
    console.log( jQuery.inArray("John", arr) );
    // "Pete" is in the array, but not at or after index 2, so returns -1
    console.log( jQuery.inArray("Pete", arr, 2) );
console.groupEnd();


// jquery check for empty object
console.group("jquery check for empty object");
    console.log( jQuery.isEmptyObject({}) ); // true
    console.log( jQuery.isEmptyObject({ foo: "bar" }) ); // false
console.groupEnd();

// jquery merge two arrays, but uses a copy, so the original isn't altered.
console.group("jquery merge two arrays");
    var first = ['a','b','c'];
    var second = ['d','e','f'];
    var newArray = $.merge( $.merge([],first), second);
    console.log(first);
    console.log(newArray);
console.groupEnd();

// clone an array
console.group("Clone an array");
    var arr = ['a','b','c'];
    var clone = arr.slice(0);
    arr.push('x');
    console.log(arr);
    console.log(clone);
console.groupEnd();

// clone an array of objects shallow
console.group("Clone an array of objects - shallow");
    var arr = [{
        name: 'john',
        hobbies: ['a','b','c']
    }];
    
    clonedArray = $.map(arr, function(obj){return $.extend({}, obj);}); // shallow
    console.log(clonedArray);
    arr[0].hobbies[1] = 'something new';
    console.log(clonedArray);
console.groupEnd();

// clone an array of objects deep
console.group("Clone an array of objects - deep");
   var arr = [{
        name: 'john',
        hobbies: ['a','b','c']
    }];
    
    clonedArray = $.map(arr, function(obj){return $.extend(true, {}, obj);}); // deep
    console.log(clonedArray);
    arr[0].hobbies[1] = 'something new';
    console.log(clonedArray);
console.groupEnd();


// clone an array of objects deeply using json stringify
console.group("Clone an array of objects - deep - json stringify");
   var arr = [{
        name: 'john',
        hobbies: ['a','b','c']
    }];
    
    clonedArray = JSON.parse(JSON.stringify(arr));
    console.log(clonedArray);
    arr[0].hobbies[1] = 'something new';
    console.log(clonedArray);
console.groupEnd();

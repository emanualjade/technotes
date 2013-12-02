// underscore map
console.group('map');
    var names = ['Craig','John','Elijah'];
    
    var m = _.map(names, function(name){
        return name + ' is mapped from an array.';    
    });

    console.log(m);
console.groupEnd();


// underscore map using a named function
console.group('map using a named function');
    var names = ['Craig','John','Elijah'];
    var greet = function(name){
        return 'Hello ' + name + '!';
    }
    m = _.map(names, greet);
    console.log(m);
console.groupEnd();

console.group('map using instances and methods');
    // uderscore with data object that contains nested array of people objects
    data = {
        people: [
            { name: 'Craig', state: 'CA', price: 100 },
            { name: 'John', state: 'FL', price: 200 },
            { name: 'Dan', state: 'AZ', price: 300 },
            { name: 'Sara', state: 'TN', price: 475 }
        ]
    };
    
    OrderItem = function(person){
        getSummary = function(){
            return person.name
             + ' spent '
             + person.price
             + ' in ' + person.state;
        }
        return {
            getSummary: getSummary
        }
    }
    
    m = _.collect(data.people, function(value, key, list){
        return new OrderItem(value);
    });
    
    _.each(m, function(value){
        console.log( value.getSummary() );
    });
console.groupEnd();

//underscore reduce - produce a single result from an array
console.group('reduce');
    var values = [100, 200, 100];
    var sum = _.reduce(values, function(memo, num){
        console.log('Calculating: ' + memo + ' ' + num);
        return memo + num;
    });
    console.log('Total: ' + sum);
console.groupEnd();


//underscore reduce - produce a single result from an object array
console.group('reduce');
    data = {
        people: [
            { name: 'Craig', state: 'CA', price: 100 },
            { name: 'John', state: 'FL', price: 200 },
            { name: 'Dan', state: 'AZ', price: 300 }
        ]
    };
    var total = _.reduce(data.people, function(memo, value){
        return memo + value.price;
    }, 0); //need to pass 0 as first memo value since it's an object array
    console.log('Total: ' + total);
console.groupEnd();

//underscore reduce - produce a single result from an object array returning an object
console.group('reduce');
    data = {
        people: [
            { name: 'Craig', state: 'CA', price: 100 },
            { name: 'John', state: 'FL', price: 200 },
            { name: 'Dan', state: 'AZ', price: 300 }
        ]
    };
    var total = _.reduce(data.people, function(memo, value){
        return { price:  ( memo.price + value.price ) };
    });
    console.log('Total: ' + total.price);
console.groupEnd();

// underscore reduceRight with array - sum all values
console.group('reduceRight');
    var total = [0, 1, 2, 3].reduceRight(function(a, b) {
        return a + b;
    });
    console.log(total);
console.groupEnd();

// underscore reduceRight flatten an array of arrays
console.group('reduceRight with objects array');
    var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
        return a.concat( b );
    }, []);
    console.log(flattened);
console.groupEnd();

// underscore find in array
console.group('underscore .find')
    var values  = [1,2,3,4,5,6,7,8,9,10];
    var evenCriteria = function(value){
        return value % 2 === 0
    };
    
    var oddCriteria = function(value){
        return value % 2 !== 0;
    };
    
    console.log( 'First even number: ' + _.find(values, evenCriteria) );
    console.log( 'First odd number: ' + _.find(values, oddCriteria) );
console.groupEnd();


// underscore find in object array
console.group('underscore .find in object array')
    values = [
            { name: 'Craig', state: 'CA', price: 100 },
            { name: 'John', state: 'FL', price: 200 },
            { name: 'Dan', state: 'AZ', price: 305 }
    ]
    var evenCriteria = function(value){
        return value.price % 2 === 0
    };
    
    var oddCriteria = function(value){
        return value.price % 2 !== 0;
    };
    
    console.log( 'First even number: ' + _.find(values, evenCriteria).price );
    console.log( 'First odd number: ' + _.find(values, oddCriteria).price );
console.groupEnd();

// underscore filter array
console.group('underscore .filter array')
    var values  = [1,2,3,4,5,6,7,8,9,10];
    var evenCriteria = function(value){
        return value % 2 === 0
    };
    
    var oddCriteria = function(value){
        return value % 2 !== 0;
    };
    
    console.log( 'All even numbers: ' + _.filter(values, evenCriteria) );
    console.log( 'All odd numbers: ' + _.filter(values, oddCriteria) );
console.groupEnd();

// underscore filter object array
console.group('underscore .filter on object array')
    values = [
            { name: 'Craig', state: 'CA', price: 100 },
            { name: 'John', state: 'FL', price: 200 },
            { name: 'Dan', state: 'AZ', price: 305 }
    ]
    var evenCriteria = function(value){
        return value.price % 2 === 0
    };
    
    var oddCriteria = function(value){
        return value.price % 2 !== 0;
    };
    
    allEvenNumbers = _.filter(values, evenCriteria);
    console.dir( 'All even numbers: ');
    console.log(allEvenNumbers);

    allOddNumbers = _.filter(values, oddCriteria);
    console.dir( 'All odd numbers: ');
    console.log(allOddNumbers);
console.groupEnd();


// underscore .where finds all matches based on criteria
console.group('underscore .where');
    courses = [
        { title: 'Javascript Graphics', author: 'John', level: 'intermediate' },
        { title: 'html5 course', author: 'John', level: 'advanced' },
        { title: 'css3 awesomeness', author: 'Dan', level: 'advanced' }
    ]
    advancedCourses = _.where(courses, { level: "advanced" });
    console.log(advancedCourses);
    
    johnsAdvancedCourses = _.where(courses, { 
        level: "advanced",
        author: "John"
    });
    console.log(johnsAdvancedCourses);

console.groupEnd();

// underscore .findWhere finds the first object where criteria is met
console.group('underscore .findWhere');
    courses = [
        { title: 'Javascript Graphics', author: 'John', level: 'intermediate' },
        { title: 'html5 course', author: 'John', level: 'advanced' },
        { title: 'css3 awesomeness', author: 'Dan', level: 'advanced' }
    ]
    course = _.findWhere(courses, { title: "css3 awesomeness" });
    console.log(course);
console.groupEnd();


// .every or .all looks to see if every item returns true
console.group('underscore .every');
    values = [
        { name: 'Craig', state: 'CA', price: 100 },
        { name: 'John', state: 'FL', price: 200 },
        { name: 'Dan', state: '', price: 305 }
    ]
    hasStateCriteria = function(value){
        return (value.state !== '');
    };
    
    var hasState = _.all(values, hasStateCriteria);
    console.log('Do all recoreds have a value for state: ' + hasState);
console.groupEnd();


// .some or .any looks to see if any item returns true
console.group('underscore .some');
    values = [
        { name: 'Craig', state: 'CA', price: 100 },
        { name: 'John', state: 'FL', price: 200 },
        { name: 'Dan', state: '', price: 305 }
    ]
    hasStateCriteria = function(value){
        return (value.state !== '');
    };
    
    var someHaveState = _.some(values, hasStateCriteria);
    console.log('Do some recoreds have a value for state: ' + someHaveState);
console.groupEnd();


// .contains looks to see if array contains a value
console.group('underscore .contains');
   var values = ['a','b','c'];
console.log( 'Does the array contain a "b": ' + _.contains(values, 'b') );
console.groupEnd();

// .contains - for an object
console.group('underscore .contains with object');
var author = {
    firstName: "Craig",
    lastName: "Shoemaker"
}
console.log( 'Does the author object contain a value of Craig: ' + _.contains(author, 'Craig') );
console.groupEnd();


// invoke
console.group('invoke');
    var values = _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
    console.log(values);
console.groupEnd();

// invoke on object array
console.group('invoke on object array');
    var SpecialItem = function(person){
        getSummary = function(){
            return person.name
             + ' spent '
             + person.price
             + ' in ' + person.state;
        }
        return {
            getSummary: getSummary
        }
    };
    var items = [];
    items.push(new SpecialItem({
        name: "craig",
        state: "CA",
        price: 100
    }));
    items.push(new SpecialItem({
        name: "John",
        state: "FL",
        price: 200
    }));
    
    var results = _.invoke(items, 'getSummary');
    console.log(results);

console.groupEnd();

// .pluck Extract all values from an object array given a key
console.group('.pluck values from object array given the key')
    var authors =  [
        { name: 'John', state: 'FL' },
        { name: 'Dan', state: 'AZ' }
    ];
    
    results = _.pluck(authors, 'name');
    console.log(results);
console.groupEnd();

// .pluck Extract all values from complex object array given a key
console.group('.pluck values from complex object array given the key')
    var authors =  [
        { 
            name: 'John', 
            state: 'FL',
            courses: ['math', 'english']
        },
        { 
            name: 'Dan', 
            state: 'AZ' ,
            courses: ['html5 canvas', 'philosophy']
        }
    ];
    
    results = _.pluck(authors, 'courses');
    console.log(results);
console.groupEnd();

// without 
console.group('.without');
    var speakers = ['a', 'b', 'c'];
    var withoutValues = _.without(speakers, 'b', 'c');
    console.log(withoutValues);
console.groupEnd();

// union - combine unique values into a new array
console.group('.union');
    var speakers = ['a', 'b', 'c'];
    var authors = ['b','c','d','e'];
    var invitees = _.union(speakers, authors);
    console.log(invitees);
console.groupEnd();

// intersection - returns values that show up in both arrays
console.group('.intersections');
    var speakers = ['a', 'b', 'c'];
    var authors = ['b','c','d','e'];
    var speakerAuthors = _.intersection(speakers, authors);
    console.log(speakerAuthors);
console.groupEnd();

// difference - compares first array with second 
console.group('.difference');
    var speakers = ['a', 'b', 'c'];
    var authors = ['b','c','d','e'];
    var uniqueSpeakers = _.difference(speakers, authors);
    console.log(uniqueSpeakers);
console.groupEnd();

// unique - returns unique values from an array
console.group('.unique');
    var values = ['a', 'b', 'c', '3', 'b', 'a'];
    var uniqueValues = _.unique(values);
    console.log(uniqueValues);
console.groupEnd();


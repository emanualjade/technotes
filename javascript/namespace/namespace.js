// VERSION ONE
var myNS = myNS || {}
myNS.Calculator = function(eq){
}

// VERSION TWO
var theNS = (function(theNS){
  theNS.Calculator = function(eq){
  }

  return theNS;
}(theNS || {}));

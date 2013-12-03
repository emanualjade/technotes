Stork.dom = (function(window, undefined){
  var document = window.document;
  var dom = {};

  dom.get = function(selector){
    return selector.charAt(0) === '#' ? document.getElementById(selector.substring(1)) : document.getElementsByTagName(selector);
  }

  return dom;

})(window);
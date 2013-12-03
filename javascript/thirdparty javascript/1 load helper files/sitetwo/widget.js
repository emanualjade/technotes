// This file essentially just loads and then has a function
// for loading additional resources. It loads dom.js a dom helper utility

var Stork = (function(window, undefined){
  
  var Stork = {};

  function loadScript(url, callback){
    var script = document.createElement('script');
    script.async = true;
    script.src = url;
    var entry = document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(script, entry);

    script.onload = script.onreadystatechange = function(){
      var rdyState = script.readyState;

      if(!rdyState || /complete|loaded/.test(script.readyState)){
        callback();
        script.onload = null;
        script.onreadystatechange = null;
      }

    };

  }


  loadScript('http://sitetwo.dev:8080/dom.js', function(){
    
    console.log( Stork.dom.get('#page-heading') );
    
  });


  return Stork;
  
})(window);
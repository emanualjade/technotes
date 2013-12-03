// The point of this is to get the product id with javascript from the script url fragment identifier

function getScriptUrl(){
  var scripts = document.getElementsByTagName('script');
  var element;
  var src;

  for (var i = 0; i < scripts.length; i++) {
    element = scripts[i];
    src = element.src;

    if( src && /sitetwo\.dev:8080\/widget\.js/.test(src) ){
      return src;
    }

  }
  return null;

}

function getQueryParmeters(query){
  var args = query.split('&');
  var params = {};
  var pair;
  var key;
  var value;

  function decode(string){
    return decodeURIComponent(string || "").replace('+', ' ');
  }

  for(var i = 0; i < args.length; i++) {
    pair = args[i].split('=');
    key = decode(pair[0]);
    value = decode(pair[1]);
    params[key] = value;
  }
  return params;
}

var url = getScriptUrl();
var params = getQueryParmeters( url.replace(/^.*\#/, '') );
var productId = params.product;

console.log(productId)

// The point of this is to get the product id with javascript from the script url fragment identifier

function getProductId(){
  var scripts = document.getElementsByTagName('script');
  var id;

  for(var i = 0; i < scripts.length; i++) {
    id = scripts[i].getAttribute('data-stork-product-id');
    if(id){
      return id;
    }
  }
  return null;
}

product_id = getProductId();
console.log(product_id);
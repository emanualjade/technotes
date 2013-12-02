require(['jquery', './big-cart', './mini-cart', './product-list'], function( $, bigCart, miniCart, productList ){
  
  console.log('yup')
  
  $(document).ready(function(){
    bigCart.init();
    miniCart.init();
    productList.init();
  });

  // $(document).ready(funtion(){
  // //   bigCart.init();
  // //   miniCart.init();
  // //   productList.init();
  // });

});
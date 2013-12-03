<!DOCTYPE html>
<html>
    <head>
        <title>Publisher Test Page</title>
    </head>
    <body>
        
        <h1 id="page-heading">Publisher Test Page</h1>
        <script data-stork-product-id="1234">
        	(function(){
        		var script = document.createElement('script');
        		script.src = "http://sitetwo.dev:8080/widget.js";
        		script.async = true;
        		var entry = document.getElementsByTagName('script')[0];
        		entry.parentNode.insertBefore(script, entry);
        	})();
        </script>
        
    </body>
</html>
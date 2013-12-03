<!DOCTYPE html>
<html>
    <head>
        <title>Publisher Test Page</title>
    </head>
    <body>
        
        <h1 id="page-heading">Publisher Test Page</h1>
        <script>
        	(function(){
        		var script = document.createElement('script');
        		script.src = "http://sitetwo.dev:8080/widget.js?product=1234";
        		script.async = true;
        		var entry = document.getElementsByTagName('script')[0];
        		entry.parentNode.insertBefore(script, entry);
        	})();
        </script>
        
    </body>
</html>
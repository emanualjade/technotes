define(function(){
	var cache = {}

	return {
		pub: function(id){
			var args = [].slice.call(arguments, 1);

			if(!cache[id]){
				cache[id] = [];
			}

			for(var i = 0, il = cache[id].length; i < il; i++){
				cache[id][i].apply(null, args);
			}

		},
		sub: function(id, fn){
			if(!cache[id]){
				cache[id] = [fn];
			} else {
				cache[id].push(fn);
			}
		},
    unsub: function(id, fn){
      var index;

      if(!id){
        return;
      }

      if(!fn){
        cache[id] = [];
      }else{
        cache[id] = cache[id].slice(0, index).concat( cache[id].slice(index + 1) );
      }

    }
	}
});

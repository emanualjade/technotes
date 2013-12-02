# COMMAND LINE

# convert test.coffee into test.js
# $ coffee -c test.coffee

# Everytime test.coffee is updated recompile to test.js
# $ coffee -cw test.coffee

# Compile all .coffee files in the src dir into the js dir
# $ coffee -c src -o js

# Every time a file is updated re-compile
# $ coffee -cw src -o js


# take all the files in the coffee folder and compile them into js files in the js folder
#coffee --compile --output js/ coffee/

# watch all the files in the coffee folder and compile them into the js folder when they are changed
#coffee -o js/ -cw coffee/

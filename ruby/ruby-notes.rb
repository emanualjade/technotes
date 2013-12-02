# Ruby Array
my_arr = Array.new
my_arr = []
a = ["someitem"]

# Ruby Hashes
my_hash = Hash.new
my_hash = {}
my_hash["name"] = "Eman"
my_hash[10] = "ten"
my_hash[ [1, "a", 'stuff'] ] = "array as has"
my_hash[ {"cool" => "stuff"} ] = "yup"
my_other_hash = {  "name" => "Eman", "age" => "37" }
person = { :name => "Joe", :age => 35, :occupation => "plumber"}

# Strings
name = "Eman"
name.upcase
name = "Eman".downcase
puts name

# Add Method to Object outside of the Class
def name.add_last_name
	"#{self} =  Jade"
end

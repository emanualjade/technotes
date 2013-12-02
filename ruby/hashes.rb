
#old style hash
{ :media => "all" }
#new style hash
{ media: "all" }


h = Hash.new
h = {}
h = {"hello" => "world"}
h["name"] = "Emanual"
h = { "name" => "emanual", "hello" => "world"}

treehouse = Hash.new
treehouse["business_name"] = "tree house"
treehouse["location"] = "california"
treehouse["phone"] = "999-999-9999"
treehouse['location']

h = Hash.new { | hash, key | hash[key] = "Default value for #{key}" }

treehouse.keys
treehouse.key('tree house')
treehouse['business_name']
x = treehouse['business_name'] || "yo"
x = treehouse['some_key'] || "yo"
treehouse.has_key?('address')
treehouse.member?('location')
treehouse.values
treehouse.value('tree house')
treehouse.values_at('business_name', 'location')
treehouse.empty?
business_name = treehouse.delete('business_name')
treehouse.clear
array = treehouse.to_a
treehouse.delete_if {|key, value| key == 'location'}

treehouse.each do |key,value|
	puts "the key at #{key} is #{value}"
end

treehouse.each_pair {|key, value| puts "The key at #{key} is #{value}"}

treehouse.each_key {|key| puts "the key is #{key}"}
treehouse.each_value {|value| puts "the value is #{value}"}
treehouse.select {|key,value| key == 'location'}
treehouse.select! {|key,value| key == 'location'}
treehouse.keep_if {|key, value| key == 'location'}

treehouse.find {|key, value| key == "phone_number"}
treehouse.find_all {|key, value| value.match("house")}
treehouse.all? {|key,value| value.match("house")}
treehouse.any? {|key,value| value.match("house")}
treehouse.count

treehouse.map {|key, value| value = "(treehouse) #{value}" }
treehouse.reject {|key, value| value.match('house') }
treehouse.reject! {|key, value| value.match('house') }




























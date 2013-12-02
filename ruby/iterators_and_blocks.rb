sites = ["net", "psd", "mobile"]

sites.each do |site|
	puts "#{site}.tutsplus.com"
end

#start
h = {:name => "joe", :age => 20}

h.each { |key, val| puts "#{key} is #{val}" }

#start - this does not change the sites array
my_new_array = sites.map do |s|
	"#{s}.tutsplus.com"
end
puts my_new_array

#start - this actually changes the sites array
sites.map! do |s|
	"http://#{s}.tutsplus.com"
end

puts sites

#start
sites = ["net", "psd", "mobile"]
class Array
	def each2
		i = 0
		while self[i]
			yield self[i]
			i += 1
		end
	end
end

sites.each2 do |s|
	puts "#{s}.tutsplus.ca"
end

#start
sites = ["xxx", "aaa", "bbb"]
class Array
	def map2
		i = 0
		block_returns = []
		while self[i]
			block_returns[i] = yield self[i]
			i += 1
		end
		block_returns
	end
	def map2!
		i = 0
		block_returns = []
		while self[i]
			self[i] = yield self[i]
			i += 1
		end
		self
	end
end

sites2 = sites.map2 do |s|
	"#{s}.tutsplus.ca"
end
sites.map2! do |s|
	"#{s}.tutsplus.ca and original array changed"
end

puts sites2
puts sites

#start
def block_method
	
	if block_given?
		puts "block given"
	else
		puts "no block given"
	end
	
end
block_method
block_method{

}

#start
obj.some_method ("param") { |x| 
	#code here must have parenthesis around param
}
obj.some_method "param" do |x|
	#code here do not need parenthesis around param
end

arr = []
arr.push ({ :name => "andrew" }) #parenthesis required to puhs in a hash
















































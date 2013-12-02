array = Array.new
array.push(2)
array = [2, 3, "hello world"]
array.pop
array += [4]

puts array
puts array.index(3)

#start
array1 = [1,2,3]
array2 = [1, 2, "a","b","c"]
puts array2[0]
puts array2[-1]
puts array2.first
puts array2.last
new_array = array1 & array2
puts new_array
array1.slice(1)
array2.slice(1, 2)
array1.slice!(1)
array1.unshift(2)
array1.at(0)
array1.rindex(2)
array1.clear

array1 = [1,2,3]
array1.push(['a','b','c'])
array1.flatten
array1.flatten!

array = [5,3,2,9]
array.sort

array.sort { |a, b| a <=> b }
array.sort { |a, b| b <=> a }
array.sort.reverse
array.uniq
array.sort!
array.uniq!

array.each do |item|
	puts "I am an item #{@item} in the array"
end

array.all? { |item| item > 3 }
array.any? { |item| item >3 }
array.select { |item| item > 3 }
array.reject { |item| item > 3 }
array.map { |item| item * 2 }
array.collect { |item| item * 2 }
array.collect! { |item| item * 2 }


















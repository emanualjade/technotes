class Fridge
	def initialize (beverages=[],food=[])
		@beverages = beverages
		@food      = food
	end

	def + (item)
		if item.is_a? Beverage
			@beverages.push item
		else
			@food.push item
		end
	end	

	def - (item)
		if @beverages.include? item
			@beverage.delete item
		else
			@foods.delete item
		end
	end

end

class Beverage
	def initialize (name)
		@name = name
		@time = Time.now
	end
end

class Food
	def initialize (name)
		@name = name
		@time = Time.now
	end
end

f = Fridge.new
water = Beverage.new "Dasani"
puts water

bread = Food.new "White Bread"
puts bread

f + water #Adds the water to the Fridge
f + bread #Adds bread to the Fridge
print f


#START
class Club
	def initialize
		@members = {}
	end

	def [] (role)
		@members[role]
	end

	def []= (role, person)
		if @members[role].nil?
			@members[role] = person
		elsif @members[role].is_a? string
			@members[role] = [ @members[role], person ]
		else
			@members[role].push person
		end
	end
end

c = Club.new
c[:chair] = "Joe"
c[:engineer] = "John"
c[:engineer] = "Sue"




























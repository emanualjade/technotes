o = Object.new
o.class
#puts o.methods

# Add Method to Object outside of the Class
def o.my_method
	sum = 1 + 1
	sum
end

def o.set_name (name)
	@name = name # instance variable
end

def o.get_name
	@name
end

puts o.get_name
o.set_name('Emanual')
puts o.get_name

############################
#### PERSON CLASS ##########
############################
=begin
class Person
	def set_name name
		@name = name
	end

	def get_name
		@name
	end
end

joe = Person.new
joe.set_name "joe"
puts joe.get_name
=end

=begin
class Person
	def name= (name)
		@name = name + " some last name"
	end

	def name
		@name
	end

	def age= age
		@age = age
	end

	def age
		@age
	end

end
joe = Person.new
joe.name = ("joe")
puts joe.name
=end

class Person
	attr_accessor :name, :age, :job
	attr_writer :weight

	@@count = 0

	def initialize (name, age, job = "unemployed")
		@name = name
		@age = age
		@job = job #instance variable

		@@count += 1 #class variable
	end

	def self.count #class method
		
	end

	def greet
		"#{@name} says Hello"
	end

	def work
		"I'm doing my job; I do #{@job} for a living"
	end

	def weight
		get_real_weight - 20
	end

	def talk_to (person)
		if (person.class == Person)
			"#{@name} is talking to #{person.name}"
		else
			"#{@name} can't talk to #{person}; #{person} is not a Person"
		end
	end

	private

	def get_real_weight
		@weight
	end

end

joe = Person.new("joe", 35, "Plumber")
jill = Person.new("jill", 13, "unemployed")
jill.talk_to joe
puts Person.count









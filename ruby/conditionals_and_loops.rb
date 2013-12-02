#start
name = "Andrew"

if  name == "Andrew"
	puts "hello #{name}"
else
	puts "hello someone else"
end

#start
order = { :size => "medium" }

def make_medium_coffee
	puts "making medium coffee"
end

if order[:size] == "small"
	make_small_coffee
elsif order[:size] == "medium"
	make_medium_coffee
elsif order[:size] == "large"
	make_large_coffee
else 
	make_coffee 
end

#start
order = { :size => "small" }

def make_small_coffee
	puts "making small coffee"
end

if order[:size] == "small" then make_small_coffee
elsif order[:size] == "medium" then make_medium_coffee
elsif order[:size] == "large" then make_large_coffee
else make_coffee 
end


#start
message = "making a medium" if order[:size] == "medium"

#start
engine_on = true

unless engine_on
	service_engine
else
	puts "rev up engine"
end

#start
service_engine unless engine_on

#start
hour = 15

message = case
when hour < 12
	"Good morning"
when hour > 12 && hour < 17
	"Good afternoon"
else
	"Good evening"	
end

puts message

#start
hour = 5
message = case 
when hour < 12; 				"Good morning"
when hour > 12 && hour < 17;    "Good afternoon"
else; 							"Good evening"	
end

puts message

#start
hour = 5
message = case 
when hour < 12 then "Good morning"
when hour > 12 && hour < 17 then "Good afternoon"
else "Good evening"	
end

puts message

#start
puts (true) ? "true" : "false"

#starts loop
arr = ["john", "george", "paul", "ringo"]
i = 0
while arr[i] do
	puts arr[i]
	i += 1
end

#start
arr = ["john", "george", "paul", "ringo"]
i = 0
puts arr[i += 1] while arr[i]

#start
days_left = 7
until days_left == 0
	puts "there are still #{days_left} days left in the week"
	days_left -=1
end

#start
x = 4
puts "hello #{x -= 1}" until x == 0

#start
x = 4
begin
	puts "hello #{x - 1}"
	x -= 1
end until x == 0

#start
names = ["john", "george", "paul", "ringo"]
for name in names
	puts name
end

#start
hasher = { :name => "joe", :age => 30, :job => "plumber" }

for key,val in hasher
	puts "#{key} is #{val}"
end

#start





































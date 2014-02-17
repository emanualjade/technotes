# ACTIVERECORD
# active record: design pattern for relational databases
# ActiveRecord: rails implementation of active record pattern
# Retrieve and manipulate data as objects, not as static rows

# ACTIVE RECORD OBJECTS ARE "INTELLIGENT"
# * Understand the structure of the table
# * Contain data from table rows
# * Know how to create, read, update, and delete rows
# * Can be manipulated as objects, then saved easily

# EXAMPLE
user = User.new
user.first_name = "Kevin"
user.save # SQL INSERT

user.last_name = "Skoglund"
user.save # SQL UPDATE

user.delete # SQL DELETE

#ActiveRelation
# * Added in Rails 3
# * Also know as ARel
# * Object-oriented interpretation of relational algebra
# * Simplifies the generation of complex database queries
#   ** small queries are chainable (like most ruby objects) 
#   ** Complex joins and aggregations use efficient SQL
#   ** Queries do not execute until needed

users = User.where(:first_name => "Kevin")
user = user.order("last_name ASC").limit(5)
users = user.include(:articles_authored)









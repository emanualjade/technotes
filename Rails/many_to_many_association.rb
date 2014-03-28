AdminUser has_and_belongs_to_many :pages
Page has_and_belongs_to_many :admin_users

Course has_and_belongs_to_many :students
Student has_and_belongs_to_many :courses

# RAILS CONVENTION FOR CREATING A JOIN TABLE
# first_table + _ + second_table
# Both table names are plural
# Alphabetical order
# Default name, can be configured
# AdminUser - Page
# admin_users_pages




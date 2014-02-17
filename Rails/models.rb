# Generate a model
rails generate model SingularName

# Rails console working with models
rails console

# EXAMPLE - run this in the console
subject = Subject.new
subject.new_record? #will tell us whether or not this is a new record (not saved to database?)
subject.name = "First Subject"
subject.name

# EXAMPLE - run this in the console
subject = Subject.new(:name => "First Subject", :position => 1, :visible => true)
subject.new_record?
subject.save # INSERT INTO `subjects` (`created_at`, `name`, `position`, `updated_at`, `visible`) VALUES ('2014-01-06 02:31:32', 'First Subject', 1, '2014-01-06 02:31:32', 1)

# EXAMPLE - run this in the console
subject = Subject.create(:name => "Second Subject", :position => 2) # INSERT INTO `subjects` (`created_at`, `name`, `position`, `updated_at`) VALUES ('2014-01-06 02:47:29', 'Second Subject', 2, '2014-01-06 02:47:29')

# EXAMPLE - find and update
subject = Subject.find(1) # SELECT `subjects`.* FROM `subjects` WHERE `subjects`.`id` = 1 LIMIT 1
subject.name = "Initial Subject"
subject.save # UPDATE `subjects` SET `name` = 'Initial Subject', `updated_at` = '2014-01-06 03:54:02' WHERE `subjects`.`id` = 1

# EXAMPLE - find and update
subject = Subject.find(2)
subject.update_attributes(:name => "Next Subject", :visible => true) #UPDATE `subjects` SET `name` = 'Next Subject', `visible` = 1, `updated_at` = '2014-01-06 03:57:27' WHERE `subjects`.`id` = 2

# EXAMPLE - Destroy 
Subject.create(:name => "Bad subject")
subject = Subject.find(3)
subject.destroy

# EXAMPLE - FINDING RECORDS
Subject.find(2) # primary key finder - returns an object or error
Subject.find_by_id(2) # dynamic finders - if it can't find the id it will return nil instead of an error
Subject.find_by_name("First Subject") # dynamic finder - returns the first found object or nil
Subject.all # Returns an array of all found objects
Subject.first # Returns and object or nil
Subject.last # Returns an object or nil

# EXAMPLE - QUERY METHODS - Returns an ActiveRelation object, which can be chained
Subject.where(:visible => true)
Subject.where(:visible => true).order("position ASC")
.order(sql_fragment) # .order("table.column ASC/DESC") .order("position ASC") .order("subjects.created_at ASC") table name required on joined tables
.limit(integer)
.offset(integer)

# CONDITION EXPRESSION TYPES
"name = 'First Subject' AND visible = true" # STRING
["NAME = ? AND visible = true", "First Subject"] # ARRAY - Flexible, escaped SQL, safe from SQL injection - Subject.where(["visible = ?", true])
{:name => "First Subject", :visible => true}  # HASH - Simple, escaped SQL, safe from SQL injection. 
                                              # Each key-value pair is joined with AND
                                              # Only supports equality, range, and subset checking
                                              # No OR, LIKE, less than, or greater than


# NAMED SCOPES
# uses lambda - which is evaluated when called, not when defined
scope :visible, lambda { where(:visible => true) }
scope :invisible, lambda { where(:visible => false) }
scope :sorted, lambda { order("subjects.position ASC") }
scope :newest_first, lambda { order('subjects.created_at DESC') }
scope :search, lambda { |query|  
  where(["name LIKE ?", "%#{query}%"])
}

# has_many METHODS
subject.pages
subject.pages << page
subject.pages = [page, page, page]
subject.pages.delete(page) # remove a page from the array
subject.pages.destroy(page) # remove the page from the array and delete it from the database
subject.pages.clear # remove all the pages from the array
subject.pages.empty? # check to see if the array is empty
subject.pages.size # find out the size of the array

# Many to Many
# * Requires a join table
#   ** Two foreign keys; index both keys together
#   ** No primary key column (:id => false)
# * Join Table Naming
#   ** first_table + _ + second_table
#   ** both table names are plural
#   ** tables need to be in alphabetical order
#   ** EXAMPLE for Project - Collaborator - join table name: colaborators_project
#   ** EXAMPLE for BlogPost - Category - join table name: blog_posts_categories

# AdminUser has_and_belongs_to_many :pages
# Page has_and_belongs_to_many :editors, :class_name => "AdminUser"


# MANY TO MANY RICH
# * Still uses a join table, with two indexed foreign keys
# * Requires a primary key column
# * Join table has its own model
# * No table name conventions to follow
#   ** Names ending in "-ments" or "-ships" work well

# Example of many to many rich - AdminUser - Section - tracking section edits
# console
rails generate model SectionEdit
# models
#AdminUser model
has_many :section_edits
has_many :sections, :through => :section_edits
#Section model
has_many :section_edits
has_manu :editors, :through => :section_edits, :class_name => "AdminUser"
#SectionEdits model
belongs_to :editor, :class_name => "AdminUser", :foreign_key => "admin_user_id"
belongs_to :section

# migration
def change
  create_table :section_edits do |t|
    t.references :admin_user
    t.references :section
    t.string :summary
    t.timestamps
  end
  add_index :section_edits, ["admin_user_id", "section_id"]
end



















# Generate a simple migration
rails generate migration DoNothingYet

# Generate a migration by creating a model
rails generate model User

# Table migration methods
create_table table, options do |t|
  #...columns...
end
drop_table(table)
rename_table(table, new_name)

# Column migration methods
add_column(table, column, type, options)
remove_column(table, column)
rename_column(table, column, new_name)
change_column(table, column, type, options)

# Index migration methods
add_index(table, column, options)
remove_index(table, column)

# Index migration method options
:unique => true/false
:name => "your_custom_name"

#Active record supports the following database column types
:binary
:boolean
:date
:datetime
:decimal
:float
:integer
:primary_key
:string
:text
:time
:timestamp

#You can create columns of types not supported by Active Record when using non-sexy syntax
t.column :name, 'polygon', :null => false

#Table column options
:limit => size
:default => value
:null => true/false
:precision => number
:scale => number

# EXECUTE MIGRATION METHOD
execute("any SQL string")

# Running Migrations
rake db:migrate #by default it wil target the development database
rake db:migrate VERSION=0 #revert to before we did any migrations
rake db:migrate:status # get a report for what is currently up and what is currently down
rake db:migrate VERSION=20140105024617 # run the migrations or roll them back - up to and including the ID provided
rake db:migrate:up VERSION=20140105024617 # explicitly run up for a specific timestamp ID
rake db:migrate:down VERSION=20140105024617 # explicitly run down for a specific timestamp ID
rake db:migrate:redo VERSION=20140105024617 # first run the down then the up method for a specific timestamp ID

# EXAMPLE OF AN UP - RAILS AUTOMATICALLY CREATES THE AUTOINCREMENTING ID COLUMN
def up
  create_table :users do |t|
    t.column "first_name", :string, :limit => 25 #one way of doing it
    t.string "last_name", :limit => 50 #another way of doing it
    t.string "email", :default => "", :null => false
    t.string "password", :limit => 40
    # t.datetime "created_at"
    # t.datetime "updated_at"
    t.timestamps #this shorthand creates the two columns above created_at and updated_at
  end
end

# EXAMPLE OF AN UP - prevent rails from automatically creating an id field using :id => false
def up
  create_table :users, {:id => false} do |t|
    t.column "first_name", :string, :limit => 25 #one way of doing it
    t.string "last_name", :limit => 50 #another way of doing it
    t.string "email", :default => "", :null => false
    t.string "password", :limit => 40
    # t.datetime "created_at"
    # t.datetime "updated_at"
    t.timestamps #this shorthand creates the two columns above created_at and updated_at
  end
end

# EXAMPLE OF AN UP AND DOWN  
def up
  rename_table("users", "admin_users")
  add_column("admin_users", "username", :string, :limit => 25, :after => "email")
  change_column("admin_users", "email", :string, :limit => 100)
  rename_column("admin_users", "password", "hashed_password")
  puts "*** Adding an index is next ***"
  add_index("admin_users", "username")
end

def down
  remove_index("admin_users", "username") 
  rename_column("admin_users", "hashed_password", "password")
  change_column("admin_users", "email", :string, :default => "", :null => false)
  remove_column("admin_users", "username")
  rename_table("admin_users", "users")
end

# EXAMPLE - CREATE THREE MIGRATIONS WITH ONE TO MANY RELATIONSHIPS
class CreateSubjects < ActiveRecord::Migration
  def up
    create_table :subjects do |t|
      t.string "name"
      t.integer "position"
      t.boolean "visible", :default => false
      t.timestamps
    end
  end

  def down
    drop_table :subjects
  end

end

class CreatePages < ActiveRecord::Migration
  def up
    create_table :pages do |t|
      t.integer "subject_id" # same as: t.references :subject
      t.string "name"
      t.string "permalink"
      t.integer "position"
      t.boolean "visible", :default => false
      t.timestamps
    end
    add_index("pages", "subject_id")
    add_index("pages", "permalink")
  end

  def down
    drop_table :pages
  end
end

class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.integer "page_id" # same as: t.references :page
      t.string "name"
      t.integer "position"
      t.boolean "visible", :default => false
      t.string "content_type"
      t.text "content"
      t.timestamps
    end
    add_index("sections", "page_id")
  end
end


# TROUBLE SHOOTING MIGRATIONS
# If a particular migration fails part way through
# * comment out the part of the migration that has run
# * fix the broken part of that particular migration
# * make sure to uncomment the lines once it's fixed






#methods that perform common data definition tasks
add_column
add_index
change_column
change_table
create_table
drop_table
remove_column
remove_index
rename_column

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


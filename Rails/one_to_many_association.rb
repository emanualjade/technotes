#ONE TO MANY ASSOCIATIONS

#MODEL
class Subject < ActiveRecord::Base
  has_many :pages
end

#MODEL
class Page < ActiveRecord::Base
  belongs_to :subject
  has_many :sections
end

#MODEL
class Sections < ActiveRecord::Base
  belongs_to :page
end

# find subject with id of 1
subject = Subject.find(1)

# return an array of pages belonging to subject 1
subject.pages

# append a page to the array of pages
subject.pages << page

# when using the equals operator you need to define 
# everything that is in the array
subject.pages = [page, page, page]

# set to an empty array to empty it out
subject.pages = []

# remove a single page object from the array of pages
subject.pages.delete(page)

# remove all pages from the array of pages
subject.pages.clear

# check to see if the pages array is empty
subject.pages.empty?

# check to see how many pages are in the pages array
subject.pages.size

# Get the first page from the array of pages
subject.pages[0]

# get an array of sections for the first page belonging to subject
subject.pages[0].sections

# subject = Subject.find(1)
# first_page = Page.new(:name => "First Page", :permalink => "first", :position => 1)
# subject.pages << first_page
# second_page = Page.new(:name => "Second Page", :permalink => "second", :position => 2)
# subject.pages << second_page
# subject.pages.delete(second_page)




#POTENTIALL BAD
# match - works for get, post, put and delete
# you should not use it without specifying an http method
match '/items/:id/purchase', to: 'items#purchase'

# GOOD
post '/items/:id/purchase', to: 'items#purchase'
match '/items/:id/purchase', to: 'items#purchase', via: :post
match '/items/:id/purchase', to: 'items#purchase', via: :all

# ==================================================================
# CONCERNS
# ==================================================================

# POTENTIALL BAD
# if you find you are repeating yourself with nested resources
resources :messages do
  resources: comments
  resources: categories
end
resources :posts do
  resources: comments
  resources: categories
end
resources :items do
  resources: comments
  resources: categories
end

# GOOD
concern :sociable do
  resources :comments
  resources :categories
end
resources :messages, concerns: :sociable
resources :posts, concerns: :sociable
resources :items, concerns: :sociable

# ==================================================================
# CONCERNS WITH OPTIONS
# ==================================================================
concern :sociable do |options|
  resources :comments, options
  resources :categories, options
end
resources :messages, concerns: :sociable
resources :posts, concerns: :sociable
resources :items do
  concerns :sociable, only: :create
end

# ==================================================================
# CONCERNS WITH OPTIONS - living app/concerns/sociable.rb
# ==================================================================

# app/concerns/sociable.rb
class Sociable
  def self.call(mapper, options)
    mapper.resources :comments, options
    mapper.resources :categories, options
  end
end

# routes.rb
concern :sociable, Sociable

resources :messages, concerns: :sociable
resources :posts, concerns: :sociable
resources :items do
  concerns :sociable, only: :create
end









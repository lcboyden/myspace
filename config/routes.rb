Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :patrons, only: [:index, :show, :update]
      get "friends", to: "patrons#friends"
      get "all_posts", to: "patrons#all_posts"
      get "my_posts", to: "patrons#my_posts"
      get "all_users", to: "patrons#all_users"
      get "get_current_user", to: "patrons#get_current_user"
      get "users_and_posts", to: "patrons#users_and_posts"
    resources :user do 
      resources :posts
    end
      # get "custom_posts", to: "posts#index"
  end
end

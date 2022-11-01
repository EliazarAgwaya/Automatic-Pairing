Rails.application.routes.draw do
  resources :students, only: [:index,:update,:show]
  resources :mentors, only:[:index,:create]
  post "/login", to: "sessions#create"
  get '/mentor' , to: 'mentors#show'
  delete "/logout", to: "sessions#destroy"
  post "/groups", to: "groups#create"
  resources :groups, only:[:index,:show,:destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/student_signup', to: 'students#create'
  get '/me' , to: 'students#show'
  post '/student_login', to: 'student_sessions#create'
  delete '/student_logout', to: 'student_sessions#destroy'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

Rails.application.routes.draw do
  resources :students, only: [:index]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/signup', to: 'students#create'
  post '/me' , to: 'students#show'
  post '/login', to: 'student_sessions#create'
  delete '/logout', to: 'student_sessions#destroy'

end

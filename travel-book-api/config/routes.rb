Rails.application.routes.draw do
  resources :travel_logs
  resources :bucket_lists
  resources :bucketlists
  resources :travellogs
  resources :users
  resources :countries
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

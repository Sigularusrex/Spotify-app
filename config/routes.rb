Rails.application.routes.draw do
  get '/', to: 'spotify_app#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get 'auth/spotify/callback', to: 'spotify_app#index'
  get 'auth/spotify/callback', to: 'users#spotify'

  resources :toptracks, defaults: { format: :json}
  resources :recommendations, defaults: { format: :json}
  resources :users, defaults: { format: :json}
end

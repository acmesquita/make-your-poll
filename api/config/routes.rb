Rails.application.routes.draw do
  devise_for :users,
    controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
    }
  namespace :api do
    namespace :v1 do
      get       '/hello',  to: 'hello#index'
      resources :poll,     only: [:index, :show, :update, :create]
      post      '/answer', to: 'answer#create'
    end
  end
end

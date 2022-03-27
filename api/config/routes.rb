Rails.application.routes.draw do
  Rails.application.routes.draw do
    namespace :api do
      namespace :v1 do
        get  '/hello', to: 'hello#index'
        get  '/poll',  to: 'poll#index'
        post '/poll',  to: 'poll#create'
      end
    end
  end
end

Rails.application.routes.draw do


  get '*path' => 'client_app#show'
  root to: 'client_app#show'



end

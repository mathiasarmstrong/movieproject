require 'sinatra'
require 'sinatra/reloader'
set :bind, '0.0.0.0'

get '/' do
  send_file 'index.html'
end


#api_key:  831c069421869a776028d9e27fa5b512

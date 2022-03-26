class Api::V1::HelloController < ApplicationController

  # GET /hello
  def index
    render json: { hello: 'world'}
  end

end

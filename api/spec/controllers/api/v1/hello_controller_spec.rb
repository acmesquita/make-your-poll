require "rails_helper"

RSpec.describe "Api::V1::Hello", :type => :request do
  it "should return hello world when call GET api/v1/hello" do
    get "/api/v1/hello"

    json = JSON.parse(response.body)

    expect(response).to have_http_status(:ok)
    expect(json["hello"]).to eq('world')
  end
end

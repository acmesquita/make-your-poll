require 'rails_helper'

RSpec.describe "PollController", type: :request do
  describe "POST /" do
    it "returns http created" do
      headers = { "ACCEPT" => "application/json" }
      post "/api/v1/poll", params: {
        title: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
        description: Faker::Lorem.words(number: 4, supplemental: true).join(' ')
      }, headers: headers

      expect(response).to have_http_status(:created)
    end

    it "returns http bad_request" do
      headers = { "ACCEPT" => "application/json" }
      post "/api/v1/poll", params: {
        title: "",
        description: ""
      }, headers: headers
      expect(response).to have_http_status(:bad_request)
    end
  end
end

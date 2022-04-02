require 'rails_helper'

RSpec.describe "AnswerController", type: :request do
  before(:all) do
    headers = { "ACCEPT" => "application/json" }

    begin
      post '/users', params: {
        user: {
          username: 'xpot',
          password: '12345678'
        }
      }, headers: headers
    rescue => exception

    end

    post '/users/sign_in', params: {
      user: {
        username: 'xpot',
        password: '12345678'
      }
    }, headers: headers

    @token = response.headers["authorization"]
  end
  describe "POST /" do
    it "returns http no content" do
      headers = { "ACCEPT" => "application/json", "Authorization" => @token }
      post "/api/v1/poll", params: {
        poll: {
          title: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
          description: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
          options: [{ description: 'opt1' }]
        }
      }, headers: headers

      poll = JSON.parse(response.body)

      post "/api/v1/answer", params: {
        answer: {
          poll_id: poll["id"],
          option_id: poll["options"].first["id"],
        }
      }, headers: headers

      expect(response).to have_http_status(:no_content)
    end

    it "returns http bad_request" do
      headers = { "ACCEPT" => "application/json", "Authorization" => @token }
      post "/api/v1/answer", params: {
        answer: {
          poll_id: '548250934752',
          option_id: '89547290475902',
        }
      }, headers: headers
      expect(response).to have_http_status(:bad_request)
    end
  end
end

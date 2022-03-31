require 'rails_helper'

RSpec.describe "PollController", type: :request do
  describe "POST /" do
    it "returns http created" do
      headers = { "ACCEPT" => "application/json" }
      post "/api/v1/poll", params: {
        poll: {
          title: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
          description: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
          options: [{ description: 'opt1' }]
        }
      }, headers: headers

      expect(response).to have_http_status(:created)
    end

    it "returns http bad_request" do
      headers = { "ACCEPT" => "application/json" }
      post "/api/v1/poll", params: {
        poll: {
          title: "",
          description: "",
          option: []
        }
      }, headers: headers
      expect(response).to have_http_status(:bad_request)
    end
  end
  describe 'GET /' do
    it 'should return list empty if have not records' do
      headers = { "ACCEPT" => "application/json" }
      get '/api/v1/poll', headers: headers

      expect(response).to have_http_status(:ok)
      expect(response.body).to eq("[]")
    end

    it 'should return list with one record' do
      headers = { "ACCEPT" => "application/json" }
      post "/api/v1/poll", params: {
        poll: {
          title: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
          description: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
          options: [{ description: 'opt1' }]
        }
      }, headers: headers

      poll = response.body

      get '/api/v1/poll', headers: headers

      expect(response).to have_http_status(:ok)
      expect(response.body).to eq("[#{poll}]")
    end
  end
  describe 'GET /:id' do
    it 'should return error if have not found' do
      headers = { "ACCEPT" => "application/json" }

      get "/api/v1/poll/3098210", headers: headers

      expect(response).to have_http_status(:bad_request)
      expect(response.body).to eq("{\"errors\":\"Poll not found\"}")
    end

    it 'should return list with one record' do
      headers = { "ACCEPT" => "application/json" }
      post "/api/v1/poll", params: {
        poll: {
          title: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
          description: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
          options: [{ description: 'opt1' }]
        }
      }, headers: headers

      poll = response.body

      get "/api/v1/poll/#{JSON.parse(poll)["id"]}", headers: headers

      expect(response).to have_http_status(:ok)
      expect(response.body).to eq("#{poll}")
    end
  end
  describe 'PUT /:id' do
    it 'should return error if have not found' do
      headers = { "ACCEPT" => "application/json" }

      put "/api/v1/poll/3098210", params: {
        poll: {
          title: 'any'
        }
      },  headers: headers

      expect(response).to have_http_status(:bad_request)
      expect(response.body).to eq("{\"errors\":\"Invalid params\"}")
    end

    it 'should return list with one record' do
      headers = { "ACCEPT" => "application/json" }
      post "/api/v1/poll", params: {
        poll: {
          title: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
          description: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
          options: [{ description: 'opt1' }]
        }
      }, headers: headers

      poll = response.body

      put "/api/v1/poll/#{JSON.parse(poll)["id"]}", params: {
        poll: {
          title: 'um ninho de mafagafos tem mafagafinhos'
        }
      }, headers: headers

      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)["title"]).to eq("um ninho de mafagafos tem mafagafinhos")
    end
  end
end

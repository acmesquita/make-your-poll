require 'rails_helper'

RSpec.describe 'CreatePollService' do
  describe 'should be return poll provider correctly params' do
    it 'when title and description is valid' do
      params = {
        title: Faker::Lorem.words(number: 4, supplemental: true),
        description: Faker::Lorem.words(number: 4, supplemental: true)
      }
      poll = Poll::CreatePollService.call(params)

      expect(poll).to be_valid
    end
  end
  describe 'should be return poll with errors if provider incorrectly params' do
    it 'when title and description is invalid' do
      params = {
        title: "",
        description: ""
      }
      poll = Poll::CreatePollService.call(params)

      expect(poll).to_not be_valid
      expect(poll.errors[:title].first).to eq('can\'t be blank')
      expect(poll.errors[:title].second).to eq('is too short (minimum is 6 characters)')
      expect(poll.errors[:description].first).to eq('can\'t be blank')
      expect(poll.errors[:description].second).to eq('is too short (minimum is 6 characters)')
    end
  end
end

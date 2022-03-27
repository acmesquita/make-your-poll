require 'rails_helper'

RSpec.describe 'ListPollService' do
  describe 'should be return all polls in database' do
    it 'when have recodes' do
      params = {
        title: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
        description: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
        options: [ { :description => "any_1" } ]
      }
      Poll::CreatePollService.call(params)
      polls = Poll::ListPollService.call

      expect(polls.size).to eq(1)
    end
  end
  describe 'should be return array empty polls in database' do
    it 'when have not recodes' do
      polls = Poll::ListPollService.call

      expect(polls.empty?).to be_truthy
    end
  end
end

require 'rails_helper'

RSpec.describe 'ListPollService' do
  describe 'should be return all polls in database' do
    it 'when have recodes' do
      user = User.create({username: 'xpto', password: '12345678'})
      params = {
        title: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
        description: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
        user_id: user.id,
        options: [ { :description => "any_1" } ]
      }
      Poll::CreatePollService.call(params)
      polls = Poll::ListPollService.call(user)

      expect(polls.size).to eq(1)
    end
  end
  describe 'should be return array empty polls in database' do
    it 'when have not recodes' do
      user = User.create({username: 'xpto', password: '12345678'})
      polls = Poll::ListPollService.call(user)

      expect(polls.empty?).to be_truthy
    end
  end
end

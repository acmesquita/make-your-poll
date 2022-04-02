require 'rails_helper'

RSpec.describe 'FindPollService' do
  describe 'should be return a poll in database' do
    it 'when provider id valid' do
      user = User.create({username: 'xpto', password: '12345678'})
      params = {
        title: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
        description: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
        user_id: user.id,
        options: [ { :description => "any_1" } ]
      }
      pollInsert = Poll::CreatePollService.call(params)
      pollFind = Poll::FindPollService.call(pollInsert.id.to_s)

      expect(pollFind[:id]).to eq(pollInsert.id)
    end
  end
  describe 'should be return nil' do
    it 'when no provider id valid' do
      poll = Poll::FindPollService.call({})

      expect(poll).to be_nil
    end

    it 'when no provider id not found' do
      poll = Poll::FindPollService.call({ id: 23 })

      expect(poll).to be_nil
    end
  end
end

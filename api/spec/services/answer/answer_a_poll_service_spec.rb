require 'rails_helper'

RSpec.describe 'AnswerAPollService' do
  describe 'should be return answer provider correctly params' do
    it 'when poll id and option id is valid' do
      user = User.create({username: 'xpto', password: '12345678'})
      params = {
        title: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
        description: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
        user_id: user.id,
        options: [ { :description => "any_1" } ]
      }
      poll = Poll::CreatePollService.call(params)
      answer = Answer::AnswerAPollService.call({ poll_id: poll.id, option_id: poll.options.first.id })

      expect(answer).to be_valid

    end
  end
  describe 'should be return poll with errors if provider incorrectly params' do
    it 'when poll id and option id  is invalid' do
      answer = Answer::AnswerAPollService.call({})

      expect(answer).to_not be_valid
      expect(answer.errors[:poll].first).to eq('must exist')
      expect(answer.errors[:option].first).to eq('must exist')
    end
  end
end

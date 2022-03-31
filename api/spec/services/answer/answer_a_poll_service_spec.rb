require 'rails_helper'

RSpec.describe 'AnswerAPollService' do
  describe 'should be return answer provider correctly params' do
    it 'when poll id and option id is valid' do
      params = {
        title: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
        description: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
        options: [ { :description => "any_1" } ]
      }
      poll = Poll::CreatePollService.call(params)
      answer = Answer::AnswerAPollService.call(poll.id, poll.options.first.id)

      expect(answer).to be_valid

    end
  end
  describe 'should be return poll with errors if provider incorrectly params' do
    it 'when poll id and option id  is invalid' do
      answer = Answer::AnswerAPollService.call(nil, nil)

      expect(answer).to_not be_valid
      expect(answer.errors[:poll].first).to eq('must exist')
      expect(answer.errors[:option].first).to eq('must exist')
    end
  end
end

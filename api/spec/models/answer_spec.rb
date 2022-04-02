require 'rails_helper'

RSpec.describe Answer, type: :model do
  describe "should be impossible to create a new Answer if the values provided are invalid" do
    it 'when not provider values' do
      expect(Answer.create).to_not be_valid
    end
    it 'when provider only option' do
      user = User.create({username: 'xpto', password: '12345678'})
      poll = Poll.create!({ title: 'Teste teste', description: 'Teste teste', user: user})
      option = Option.create!({ description: 'any', poll_id: poll.id})

      answer = Answer.create({ option: option })
      expect(answer).to_not be_valid
      expect(answer.errors[:poll].first).to eq("must exist")
    end
    it 'when provider only poll' do
      user = User.create({username: 'xpto', password: '12345678'})
      poll = Poll.create!({ title: 'Teste teste', description: 'Teste teste', user: user})

      answer = Answer.create({ poll: poll })

      expect(answer).to_not be_valid
      expect(answer.errors[:option].first).to eq("must exist")
    end
  end
  it "should be create a new Option if the values provided are valid" do
    user = User.create({username: 'xpto', password: '12345678'})
    poll = Poll.create!({ title: 'Teste teste', description: 'Teste teste', user: user})
    option = Option.create!({ description: 'any', poll_id: poll.id})
    answer = Answer.create({ poll: poll, option: option })

    expect(answer).to be_valid
    expect(poll.answers.length).to eq(1)
  end
end

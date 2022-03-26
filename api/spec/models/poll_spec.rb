require 'rails_helper'

RSpec.describe Poll, type: :model do
  describe "should be impossible to create a new Poll if the values provided are invalid" do
    it 'when not provider values' do
      expect(Poll.create).to_not be_valid
    end
    it 'when provider just title with 3 characters' do
      poll = Poll.create({ title: 'How'})
      expect(poll).to_not be_valid
      expect(poll.errors[:title].first).to eq('is too short (minimum is 6 characters)')
    end
    it 'when provider title correctly, but description with 3 characters' do
      poll = Poll.create({
        title: 'What is the best food in the world?',
        description: 'any'
      })
      expect(poll).to_not be_valid
      expect(poll.errors[:description].first).to eq('is too short (minimum is 6 characters)')
    end
  end

  it "should be create a new Poll if the values provided are valid" do
    poll = Poll.create({
      title: 'What is the best food in the world?',
      description: 'From the options below, choose what would be your favorite food.'
    })
    expect(poll).to be_valid
    expect(poll.id).to_not be_nil
  end
end

require 'rails_helper'

RSpec.describe Option, type: :model do
  describe "should be impossible to create a new Option if the values provided are invalid" do
    it 'when not provider values' do
      expect(Option.create).to_not be_valid
    end
    it 'when provider description empty' do
      option = Option.create({ description: ''})
      expect(option).to_not be_valid
      expect(option.errors[:description].first).to eq("can't be blank")
    end
    it 'when not provider poll' do
      option = Option.create({ description: 'any'})
      expect(option).to_not be_valid
      expect(option.errors[:poll].first).to eq("must exist")
    end
  end
  it "should be create a new Option if the values provided are valid" do
    poll = Poll.create!({ title: 'Teste teste', description: 'Teste teste'})
    option = Option.create!({ description: 'any', poll_id: poll.id})

    expect(option).to be_valid
    expect(poll.options.length).to eq(1)
  end
end

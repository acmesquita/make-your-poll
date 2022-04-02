require 'rails_helper'

RSpec.describe 'OptionSerializer' do
  before(:each) do
    user = User.create({username: 'xpto', password: '12345678'})
    poll = Poll.create({
      title: 'What is the best food in the world?',
      description: 'From the options below, choose what would be your favorite food.',
      user: user
    })
    @option = Option.new({ description: 'any', poll_id: poll.id})
    @serializer = OptionSerializer.new(@option)
    @serialization = ActiveModelSerializers::Adapter.create(@serializer)
  end

  subject { JSON.parse(@serialization.to_json) }

  it 'should have a description that matches' do
    expect(subject['description']).to eql(@option.description)
  end
end

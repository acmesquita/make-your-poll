require 'rails_helper'

RSpec.describe 'PollSerializer' do
  before(:each) do
    @date = Date.today
    @poll = Poll.create({ title: 'any_title', description: 'any_description', created_at: @date })
    @serializer = PollSerializer.new(@poll)
    @serialization = ActiveModelSerializers::Adapter.create(@serializer)
  end

  subject { JSON.parse(@serialization.to_json) }

  it 'should have a title that matches' do
    expect(subject['title']).to eql(@poll.title)
  end

  it 'should have a description that matches' do
    expect(subject['description']).to eql(@poll.description)
  end

  it 'should have a date that matches' do
    puts subject
    expect(subject['date']).to eql(@date.strftime("%d/%m/%Y"))
  end

  it 'should have a options empty' do
    expect(subject['options']).to eql([])
  end
end

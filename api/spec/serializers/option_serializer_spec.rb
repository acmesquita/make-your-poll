require 'rails_helper'

RSpec.describe 'OptionSerializer' do
  before(:each) do
    @option = Option.new({ description: 'any', poll_id: 1})
    @serializer = OptionSerializer.new(@option)
    @serialization = ActiveModelSerializers::Adapter.create(@serializer)
  end

  subject { JSON.parse(@serialization.to_json) }

  it 'should have a description that matches' do
    expect(subject['description']).to eql(@option.description)
  end
end

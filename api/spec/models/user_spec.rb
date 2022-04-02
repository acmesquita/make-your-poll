require 'rails_helper'

RSpec.describe User, type: :model do
  it 'shuold be valid when correctly values' do
    user = User.create({username: 'xpto', password: '12345678'})

    expect(user).to be_valid
  end
  it 'shuold be invalid when try create to user with the same username' do
    user1 = User.create({username: 'xpto', password: '12345678'})

    expect{ User.create({username: 'xpto', password: '12345678'}) }.to raise_error(ActiveRecord::RecordNotUnique)
  end
end

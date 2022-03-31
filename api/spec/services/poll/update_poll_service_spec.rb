RSpec.describe 'UpdatePollService' do
  describe 'should be return poll update' do
    it 'when call provider id and params correctly' do
      params = {
        title: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
        description: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
        options: [ { :description => "any_1" } ]
      }
      pollInsert = Poll::CreatePollService.call(params)

      pollUpdate = Poll::UpdatePollService.call(pollInsert.id.to_s, {title: 'any'})

      expect(pollUpdate[:title]).to eq('any')
    end
  end
  describe 'should be return nil' do
    it 'when call provider id invalid' do
      pollUpdate = Poll::UpdatePollService.call(123, {title: 'any'})

      expect(pollUpdate).to be_nil
    end
  end
end

RSpec.describe 'UpdatePollService' do
  describe 'should be return poll update' do
    it 'when call provider id and params correctly' do
      params = {
        title: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
        description: Faker::Lorem.words(number: 4, supplemental: true).join(' '),
        options: [ { :description => "any_1" } ]
      }
      pollInsert = Poll::CreatePollService.call(params)

      pollUpdate = Poll::UpdatePollService.call(pollInsert.id.to_s, {
        title: 'um ninho de mafagafos tem mafagafinhos',
        description: 'um ninho de mafagafos tem mafagafinhos'
    }.as_json)

      expect(pollUpdate[:title]).to eq('um ninho de mafagafos tem mafagafinhos')
      expect(pollUpdate[:description]).to eq('um ninho de mafagafos tem mafagafinhos')
    end
  end
  describe 'should be return nil' do
    it 'when call provider id invalid' do
      pollUpdate = Poll::UpdatePollService.call(123, {title: 'any'})

      expect(pollUpdate).to be_nil
    end
  end
end

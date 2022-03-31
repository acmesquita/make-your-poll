class OptionSerializer < ActiveModel::Serializer
  attributes :id, :description, :answers

  def answers
    self.object.poll.answers.filter{ |answer| answer.option_id == self.object.id}.count
  end
end

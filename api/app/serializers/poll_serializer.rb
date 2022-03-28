class PollSerializer < ActiveModel::Serializer
  attributes :id, :title, :description

  has_many :options

  def date
    self.object.create_at
  end
end

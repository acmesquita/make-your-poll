class PollSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :date

  has_many :options

  def date
    self.object.created_at.strftime("%d/%m/%Y")
  end
end

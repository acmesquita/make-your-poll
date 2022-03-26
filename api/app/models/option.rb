class Option < ApplicationRecord
  validates :description, presence: true

  belongs_to :poll
end

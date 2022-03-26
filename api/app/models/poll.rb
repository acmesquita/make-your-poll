class Poll < ApplicationRecord
  validates :title, presence: true, length: { minimum: 6 }
  validates :description, presence: true, length: { minimum: 6 }

  has_many :options, dependent: :destroy
end

class Poll < ApplicationRecord
  validates :title, presence: true, length: { minimum: 6 }
  validates :description, presence: true, length: { minimum: 6 }

  belongs_to :user
  has_many :options, dependent: :destroy
  has_many :answers, dependent: :destroy
end

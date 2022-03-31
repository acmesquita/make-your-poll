class Answer < ApplicationRecord
  belongs_to :option
  belongs_to :poll
end

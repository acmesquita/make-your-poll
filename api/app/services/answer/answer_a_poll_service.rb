class Answer::AnswerAPollService

  def self.call(poll_id, option_id)
    answer = Answer.create({
      poll_id: poll_id,
      option_id: option_id
    })
  end
end

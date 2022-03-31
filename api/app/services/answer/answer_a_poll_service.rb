class Answer::AnswerAPollService

  def self.call(params)
    answer = Answer.create({
      poll_id: params[:poll_id],
      option_id: params[:option_id]
    })
  end
end

class Api::V1::AnswerController < ApplicationController

  def create
    @answer = Answer::AnswerAPollService.call(answer_params)

    if @answer.errors.blank?
      render status: :no_content
    else
      render json: { errors: @answer.errors }, status: :bad_request
    end
  end

  private

  def answer_params
    params.require(:answer).permit(:poll_id, :option_id)
  end

end

class Api::V1::PollController < ApplicationController
  def create
    @poll = Poll::CreatePollService.call(poll_params)

    if @poll.errors.blank?
      render json: @poll, status: :created
    else
      render json: { errors: @poll.errors }, status: :bad_request
    end
  end

  private

  def poll_params
    params.permit(:title, :description, :options => [])
  end
end

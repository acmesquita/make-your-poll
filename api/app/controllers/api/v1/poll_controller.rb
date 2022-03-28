class Api::V1::PollController < ApplicationController

  def index
    @polls = Poll::ListPollService.call

    render json: @polls, status: :ok
  end

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
    params.require(:poll).permit(:title, :description, :options => [[:description]])
  end
end

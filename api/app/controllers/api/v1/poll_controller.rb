class Api::V1::PollController < ApplicationController

  before_action :authenticate_user!, only: [:index, :create, :update]

  def index
    @polls = Poll::ListPollService.call(current_user)

    render json: @polls, status: :ok
  end

  def show
    @poll = Poll::FindPollService.call(params[:id])

    if (@poll.present?)
      render json: @poll, status: :ok
    else
      render json: { errors: "Poll not found" }, status: :bad_request
    end
  end

  def create
    @poll = Poll::CreatePollService.call(poll_params.merge({ user_id: current_user.id}))

    if @poll.errors.blank?
      render json: @poll, status: :created
    else
      render json: { errors: @poll.errors }, status: :bad_request
    end
  end

  def update
    @poll = Poll::UpdatePollService.call(params[:id], update_poll_params)

    if !@poll.nil?
      render json: @poll, status: :ok
    else
      render json: { errors: 'Invalid params' }, status: :bad_request
    end
  end

  private

  def poll_params
    params.require(:poll).permit(:title, :description, :options => [[:description]])
  end

  def update_poll_params
    params.require(:poll).permit!
  end
end

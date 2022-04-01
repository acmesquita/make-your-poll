class Poll::ListPollService

  def self.call(user)
    user.polls
  end
end

class Poll::ListPollService

  def self.call()
    Poll.all
  end
end

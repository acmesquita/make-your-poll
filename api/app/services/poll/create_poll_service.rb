class Poll::CreatePollService
  def self.call(params)
    Poll.create(params)
  end
end

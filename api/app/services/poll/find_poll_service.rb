class Poll::FindPollService

  def self.call(id)
    Poll.find(id) rescue nil
  end
end

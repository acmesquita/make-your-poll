class Poll::UpdatePollService

  def self.call(id, params)
    poll = Poll.find(id) rescue nil

    if (!poll.nil?)
      poll.update(params)
    end

    poll
  end
end

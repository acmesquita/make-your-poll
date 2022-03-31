class Poll::UpdatePollService

  def self.call(id, params)
    poll = Poll.find(id) rescue nil

    if (!poll.nil?)
      update_options(params["options"])
      poll.update({
        title: params["title"],
        description: params["description"]
      })
    end

    poll
  end

  def self.update_options(options)
    return nil if options.nil?

    options.each do |option|
      Option.find(option["id"]).update({ description: option["description"]})
    end
  end
end

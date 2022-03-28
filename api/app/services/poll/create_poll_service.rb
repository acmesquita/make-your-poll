class Poll::CreatePollService
  def self.call(params)
    poll = Poll.create({
      title: params[:title],
      description: params[:description]
    })
    self.create_options(poll, params[:options])
    poll
  end

  private

  def self.create_options(poll, options)
    if !options.blank?
      options.each do |option|
        Option.create({
          description: option[:description],
          poll_id: poll.id
        })
      end
    end
  end

end

class Poll::FindPollService

  def self.call(params)
    if (params[:id].present?)
      Poll.find(params[:id]) rescue nil
    else
      nil
    end
  end
end

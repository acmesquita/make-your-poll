class User < ApplicationRecord
  devise :database_authenticatable,
        :jwt_authenticatable,
        :registerable, :recoverable, :rememberable, :validatable,
        jwt_revocation_strategy: JwtDenylist,
        :authentication_keys => [:username]

  has_many :polls, dependent: :destroy

  def email_required?
    false
  end

  def email_changed?
    false
  end

  def will_save_change_to_email?
    false
  end
end

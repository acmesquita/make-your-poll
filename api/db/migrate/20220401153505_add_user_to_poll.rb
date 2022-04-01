class AddUserToPoll < ActiveRecord::Migration[7.0]
  def change
    change_table :polls do |t|
      t.references :user, null: false, foreign_key: true
    end
  end
end

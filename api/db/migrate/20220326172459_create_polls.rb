class CreatePolls < ActiveRecord::Migration[7.0]
  def change
    create_table :polls do |t|
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end

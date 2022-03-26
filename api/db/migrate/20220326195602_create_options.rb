class CreateOptions < ActiveRecord::Migration[7.0]
  def change
    create_table :options do |t|
      t.string :description
      t.belongs_to :poll

      t.timestamps
    end
  end
end

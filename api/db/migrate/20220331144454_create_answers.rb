class CreateAnswers < ActiveRecord::Migration[7.0]
  def change
    create_table :answers do |t|
      t.references :option, null: false, foreign_key: true
      t.references :poll, null: false, foreign_key: true

      t.timestamps
    end
  end
end

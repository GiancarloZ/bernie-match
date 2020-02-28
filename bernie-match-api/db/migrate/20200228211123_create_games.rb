class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.boolean :played
      t.integer :timer
      t.integer :user_id

      t.timestamps
    end
  end
end

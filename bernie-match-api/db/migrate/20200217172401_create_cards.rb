class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.boolean :state, default: false
      t.timestamps
    end
  end
end

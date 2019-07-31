class CreateCountries < ActiveRecord::Migration[5.2]
  def change
    create_table :countries do |t|
      t.string :name
      t.string :location
      t.integer :likes
      t.string :description

      t.timestamps
    end
  end
end

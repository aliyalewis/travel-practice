class CreateTravelLogs < ActiveRecord::Migration[5.2]
  def change
    create_table :travel_logs do |t|
      t.references :country
      t.references :user
      t.timestamps
    end
  end
end

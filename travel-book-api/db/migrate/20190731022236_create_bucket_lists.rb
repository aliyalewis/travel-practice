class CreateBucketLists < ActiveRecord::Migration[5.2]
  def change
    create_table :bucket_lists do |t|
      t.references :country
      t.references :user
      t.timestamps
    end
  end
end

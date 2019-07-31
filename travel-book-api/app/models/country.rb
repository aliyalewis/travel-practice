class Country < ApplicationRecord
  has_many :bucketlists
  has_many :users, through: :bucketlists
  has_many :travellogs
  has_many :users, through: :travellogs

end

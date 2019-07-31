class User < ApplicationRecord
has_many :travellogs
has_many :countries, through: :travellogs
has_many :bucketlists
has_many :countries, through: :bucketlists
validates :name, uniqueness: true

end

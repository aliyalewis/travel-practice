User.create(name: "Aliya")
User.create(name: "Jenny")

Country.create(name: "Belize", location: "Central America", likes: 0, description: "Great beaches!")
Country.create(name: "Japan", location: "Asia", likes: 1, description: "Amazing food.")
Country.create(name: "Italy", location: "Europe", likes: 0, description: "So much history.")

TravelLog.create(country_id: 1, user_id: 1)
TravelLog.create(country_id: 2, user_id: 2)

BucketList.create(country_id: 2, user_id: 1)
BucketList.create(country_id: 3, user_id: 1)

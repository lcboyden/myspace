Patron.destroy_all

25.times do
  Patron.create(
    name: Faker::TvShows::GameOfThrones.character,
    quote: Faker::TvShows::GameOfThrones.quote,
    house: Faker::TvShows::GameOfThrones.house,
    city: Faker::TvShows::GameOfThrones.city,
  )
end

puts "25 patrons seeded"

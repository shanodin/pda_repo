@people = [
  {name: "Alice",
  age: 27,
  location: "Edinburgh"},
  {name: "Sam",
  age: 28,
  location: "Leeds"},
  {name: "Dan",
  age: 25,
  location: "London"}
]


def sort_by_age(array)
  sorted = array.sort_by {|k| k[:age]}
  return sorted
end

puts sort_by_age(@people)


# def find_age_by_name(name)
#   person_hash = @people.select {|person| person[:name] == name}
#   return person_hash[0][:age]
# end
#
# puts find_age_by_name("Alice")

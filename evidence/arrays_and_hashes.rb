# my_array = [1, 2, 3, 4]
#
# # Reverse the order of the array
#
# def reverse(array)
#   return array.reverse
# end
# 
# puts reverse(my_array)

my_hash = {
  name: "Alice",
  age: 26,
  location: "Edinburgh"
}

def get_name(hash)
  return hash[:name]
end

puts get_name(my_hash)

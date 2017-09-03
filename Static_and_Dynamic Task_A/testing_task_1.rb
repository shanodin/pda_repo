### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val # argument should be in brackets
  if val = 1 #should be == not =
  return true
  else
  return false
  end
end
# indentation needs fixing

dif max a b # should be def not dif, missing () and ,
  if a > b
      return a
  else
  b # return b
  end
end
end # extra end
# indentation needs fixing

def looper
  for i in 1..10
  puts i
  end
  # need to return i after loop completes
end
# indentation needs fixing

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
# missing an end


if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed" # should say max(100,1) failed, not func1(3) failed
  failrues = failures + 1
end


if failures # needs to say < 0 or will always return fail
  puts "Test Failed"
else
  puts "Test Passed"
end

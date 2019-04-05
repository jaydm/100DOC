function isMultipleOfThree(number) {
  let multiple = 0

  do {
    multiple++

    if (multiple * 3 === number)
      return true
  } while (multiple * 3 < number)

  return false
}

function isMultipleOfFive(number) {
  let multiple = 0

  do {
    multiple++

    if (multiple * 5 === number)
      return true
  } while (multiple * 5 < number)

  return false
}

function message(testNumber) {
  let multipleOf3 = isMultipleOfThree(testNumber)
  let multipleOf5 = isMultipleOfFive(testNumber)

  if (multipleOf3 && multipleOf5) {
    return 'fizzbuzz'
  } else if (multipleOf3) {
    return 'fizz'
  } else if (multipleOf5) {
    return 'buzz'
  }

  return testNumber
}

function fizzBuzz(countUpTo) {
  for (let i = 1; i <= countUpTo; i++) {
    console.log(message(i))
  }
}

fizzBuzz(100)
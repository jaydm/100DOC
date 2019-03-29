function testMultiple(factor) {
  return function (number) {
    let multiple = 0

    do {
      multiple++

      if (multiple * factor === number)
        return true
    } while (multiple * factor < number)

    return false
  }
}

function message(testNumber, isMultipleOfThree, isMultipleOfFive) {
  let multipleOf3 = isMultipleOfThree(testNumber)
  let multipleOf5 = isMultipleOfFive(testNumber)

  if (multipleOf3 && multipleOf5) {
    return 'fizzbuzz'
  } else if (multipleOf3) {
    return 'fizz'
  } else if (multipleOf5) {
    return 'buzz'
  }

  return ''
}

function fizzBuzz(countUpTo) {
  const isMultipleOfThree = testMultiple(3);
  const isMultipleOfFive = testMultiple(5);

  for (let i = 1; i <= countUpTo; i++) {
    console.log(i + ": " + message(i, isMultipleOfThree, isMultipleOfFive))
  }
}

fizzBuzz(100)
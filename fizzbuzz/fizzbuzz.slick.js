function testMultiple(factor, message) {
  return (number) => (number % factor === 0 ? message : '')
}

function fizzBuzz(countUpTo, fizzFactor = 3, buzzFactor = 5, fizzMessage = 'fizz', buzzMessage = 'buzz') {
  const _fizz = testMultiple(fizzFactor, fizzMessage);
  const _buzz = testMultiple(buzzFactor, buzzMessage);

  const outputBox = document.getElementById('fizzBuzzOutput')

  for (let i = 1; i <= countUpTo; i++) {
    outputBox.value += (_fizz(i) + _buzz(i) || i) + '\n'
  }
}

fizzBuzz(100)
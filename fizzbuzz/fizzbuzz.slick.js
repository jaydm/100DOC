function testMultiple(factor, message) {
  return (number) => (number % factor === 0 ? message : '')
}

function fizzBuzz(countUpTo, fizz = { factor: 3, message: 'fizz' }, buzz = { factor: 5, message: 'buzz' }) {
  const _fizz = testMultiple(fizz.factor, fizz.message);
  const _buzz = testMultiple(buzz.factor, buzz.message);

  for (let i = 1; i <= countUpTo; i++) {
    console.log(_fizz(i) + _buzz(i) || i)
  }
}

fizzBuzz(100)
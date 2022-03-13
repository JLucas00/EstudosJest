const { sum, minus } = require('./')

const funcaoTeste = jest
  .fn((x) => 2 + 3 * x)
  .mockImplementationOnce((x) => 3 + x)

test('add 1 + 2 = 3', () => {
  funcaoTeste(8)
  funcaoTeste(1)
  console.log(funcaoTeste.mock)
  expect(funcaoTeste.mock.results[0].value).toBe(11)
  expect(funcaoTeste.mock.results[1].value).toBe(5)
})

test('add 1 + 7 = 8', () => {
  funcaoTeste(8)
  funcaoTeste(1)
  console.log(funcaoTeste.mock)
  expect(funcaoTeste.mock.results[0].value).toBe(11)
  expect(funcaoTeste.mock.results[1].value).toBe(5)
})

test('minus 5 - 2 = 3', () => {
  expect(minus(5,2)).toBe(3)
})

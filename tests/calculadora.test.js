const { somar, subtrair, multiplicar, dividir } = require('../src/calculadora');

test('somar dois números', () => {
  expect(somar(2, 3)).toBe(5);
});

test('subtrair dois números', () => {
  expect(subtrair(5, 2)).toBe(3);
});

test('multiplicar dois números', () => {
  expect(multiplicar(4, 3)).toBe(12);
});

test('dividir dois números', () => {
  expect(dividir(10, 2)).toBe(5);
});

test('dividir por zero deve lançar erro', () => {
  expect(() => dividir(5, 0)).toThrow('Divisão por zero');
});

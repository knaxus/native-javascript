require('./filter');

describe('myFilter', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const pairs = [2, 4, 6, 8];
  const odd = [1, 3, 5, 7, 9];

  describe('when filter pairs', () => {
    test('return just pairs elements', () => {
      const condition = element => element % 2 === 0;

      expect(array.myFilter(condition)).toStrictEqual(pairs);
    });
  });

  describe('when filter odd', () => {
    test('return just odd elements', () => {
      const condition = element => element % 2 !== 0;

      expect(array.myFilter(condition)).toStrictEqual(odd);
    });
  });
});

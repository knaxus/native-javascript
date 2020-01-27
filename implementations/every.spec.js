require('./every');

describe('myEvery', () => {
  const bellowOf100 = [10, 20, 30, 40, 50];
  const aboveOf100 = [110, 120, 130, 140, 150];
  const condition = element => element > 100;

  describe('when all elements follow one pattern', () => {
    test('return true', () => {
      expect(bellowOf100.myEvery(condition)).toBe(false);
    });
  });

  describe('when all elements does not follow one pattern', () => {
    test('return false', () => {
      expect(aboveOf100.myEvery(condition)).toBe(true);
    });
  });

  describe('when not all elements follow one pattern', () => {
    test('return false', () => {
      expect([...bellowOf100, ...aboveOf100].myEvery(condition)).toBe(false);
    });
  });
});

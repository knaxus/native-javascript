require('./join');

describe('join', () => {
  const data = ['a', 'e', 'i', 'o', 'u'];

  describe('when doesn\'t pass parameters', () => {
    test('return \'a,e,i,o,u\'', () => {
      expect(data.join()).toBe('a,e,i,o,u');
    });
  });

  describe('when pass \'undefined\' as parameter', () => {
    test('return \'a,e,i,o,u\'', () => {
      expect(data.join(undefined)).toBe('a,e,i,o,u');
    });
  });

  describe('when pass \'\' as parameter', () => {
    test('return \'aeiou\'', () => {
      expect(data.join('')).toBe('aeiou');
    });
  });

  describe('when pass a string as parameter', () => {
    test('return \'a-e-i-o-u\'', () => {
      expect(data.join('-')).toBe('a-e-i-o-u');
    });
  });

  describe('when pass a function as parameter', () => {
    test('return \'a() => {}e() => {}i() => {}o() => {}u\'', () => {
      expect(data.join(() => {})).toBe('a() => {}e() => {}i() => {}o() => {}u');
    });
  });

  describe('when pass a object as parameter', () => {
    test('return \'a[object Object]e[object Object]i[object Object]o[object Object]u\'', () => {
      expect(data.join({})).toBe('a[object Object]e[object Object]i[object Object]o[object Object]u');
    });
  });

  describe('when pass an array as parameter', () => {
    test('return \'a1,2,3e1,2,3i1,2,3o1,2,3u\'', () => {
      expect(data.join([1, 2, 3])).toBe('a1,2,3e1,2,3i1,2,3o1,2,3u');
    });
  });

  describe('when pass a boolean as parameter', () => {
    test('return \'atrueetrueitrueotrueu\'', () => {
      expect(data.join(true)).toBe('atrueetrueitrueotrueu');
    });
  });
});

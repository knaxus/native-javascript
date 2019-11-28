require('../implementations/filter');

// utils
const isValid = i => i.valid;
const isMatchingSurname = (i) => {
  return i[0].charAt(0) === i[1].charAt(0)
}
const isMatchingRegex = (i) => {
  return (/^[^\d][\w|\.]+@(gmail|yahoo|github)\.(com|in)$/).test(i)
}

describe('myFilter', () => {
  test("it should filter values from an array", () => {
    const input = [
      { name: 'John', valid: false },
      { name: 'Lizy', valid: true },
      { name: 'Josh', valid: true },
      { name: 'Brian', valid: false },
    ];
    const output = input.filter(isValid);

    expect(input.myFilter(isValid)).toEqual(output);
  });

  test("it should filter array values", () => {
    const input = [
      ['John', 'Doe'],
      ['Bill', 'Boston'],
      ['Mat', 'Husky'],
      ['Kent', 'Kevo'],
    ];
    const output = input.filter(isMatchingSurname);

    expect(input.myFilter(isMatchingSurname)).toEqual(output);
  });

  test("it should filter by regex", () => {
    const input = [
      'Johndoe@gmail.com',
      'Lizyboston@yahoo.com',
      'Joshhusky@gmail.com',
      'Briankevo@github.com',
      'newuser@invalid.com',
      '123fake.com',
    ];

    const output = input.filter(isMatchingRegex);
    expect(input.myFilter(isMatchingRegex)).toEqual(output);
  });


  // taking arbitrary functions
  test("it should filter out Boolean values", () => {
    const input = [undefined, null, 0, '', 'str', 2.5, 2, { a: 1 }, []];
    const output = input.filter(Boolean);

    expect(input.myFilter(Boolean)).toEqual(output);
  });

  test("it should filter Safe integers", () => {
    const input = [null, 's', {}, 0, 1, 1.5, -2, 1, Number.MAX_SAFE_INTEGER + 1];
    const output = input.filter(Number.isSafeInteger);

    expect(input.myFilter(Number.isSafeInteger)).toEqual(output);
  });

  test("it should filter NaN values", () => {
    const input = [undefined, null, 0, 's', 1.1, 50, { a: 'b' }, [1, 2]];
    const output = input.filter(isNaN);

    expect(input.myFilter(isNaN)).toEqual(output);
  });

  test("it should filter out arrays", () => {
    const input = [undefined, null, 0, 'str', 1, { a: 'b' }, [5, 6], [{ a: 5 }]];
    const output = input.filter(Array.isArray);

    expect(input.myFilter(Array.isArray)).toEqual(output);
  });
});
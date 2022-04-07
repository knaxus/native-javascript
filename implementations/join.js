/**
  *
  MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

  The join() method concats every element in array
  with a defined separator and returns a new string.

  Example 1 - Without a separator as parameter:
  ['a', 'e', 'i', 'o', 'u'].join();
  must return:
  'a,e,i,o,u'

  Example 2 - With a undefined as parameter:
  ['a', 'e', 'i', 'o', 'u'].join(undefined);
  must return:
  'a,e,i,o,u'

  Example 3 - With a empty string as parameter
  ['a', 'e', 'i', 'o', 'u'].join('');
  must return:
  'aeiou'

  Example 4 - With a string as parameter
  ['a', 'e', 'i', 'o', 'u'].join('-');
  must return:
  'a-e-i-o-u'

  Example 5 - With a function as parameter
  ['a', 'e', 'i', 'o', 'u'].join(() => {});
  must return:
  'a() => {}e() => {}i() => {}o() => {}u'

  Example 6 - With a object as parameter
  ['a', 'e', 'i', 'o', 'u'].join({});
  must return:
  'a[object Object]e[object Object]i[object Object]o[object Object]u'

  Example 7 - With an array as parameter
  ['a', 'e', 'i', 'o', 'u'].join([1, 2, 3]);
  must return:
  'a1,2,3e1,2,3i1,2,3o1,2,3u'

  Example 8 - With a boolean as parameter
  ['a', 'e', 'i', 'o', 'u'].join(true);
  must return:
  'atrueetrueitrueotrueu'
 */

Array.prototype.join = function join(separator) {
  let returnValue = '';
  let sep = separator;

  if (Object.prototype.toString.call(sep) === '[object Undefined]') {
    sep = ',';
  }

  for (let index = 0; index < this.length; index += 1) {
    returnValue += this[index] + (index < this.length - 1 ? sep : '');
  }

  return returnValue;
};

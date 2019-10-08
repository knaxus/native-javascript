/**
 *
  filter() creates a new array with each element in the original
  array if and only if the element pass the supplied predicate callback.

  The predicate callback is invoked with three arguments:

  - the value of the element
  - the index of the element
  - the Array object being traversed

  The predicate callback is expected to return true if the element should
  appear in the new array, otherwise false.

  You can optionally specify a value to use as `this` in the callback
  as the second argument to filter().

  If no elements pass the predicate callback, an empty array will be returned
*/

Array.prototype.myFilter = function myFilter(callback, thisArg) {
  const newArray = [];
  for (let i = 0; i < this.length; i += 1) {
    if (callback.call(thisArg, this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

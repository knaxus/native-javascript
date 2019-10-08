/**
 *
  MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap

  The flatMap() method first maps each element using a mapping function,
  then flattens the result into a new array.
  The flat function is of depth 1.

  The callback function is invoked with three arguments:
  - currentValue: current element being processed in the array
  - index: index of the current element being processed
  - array: array object that was called upon

  thisArg is a value to use as 'this' when executing callback function

  Example 1:
  [1, 2, 3, 4].flatMap(x => [x, x * 2]);
  must return:
  [1, 2, 2, 4, 3, 6, 4, 8]

  Example 2:
  ["it's Sunny in", "", "California"].flatMap(x => x.split(" "));
  must return:
  ["it's","Sunny","in", "", "California"]
*/

Array.prototype.flatMap = function myFlatMap(callback, thisArg) {
  const returnValue = [];

  for (let i = 0; i < this.length; i += 1) {
    const element = callback.call(thisArg, this[i], i, this);

    if (Object.prototype.toString.call(element) === '[object Array]') {
      for (let j = 0; j < element.length; j += 1) {
        returnValue.push(element[j]);
      }
    } else {
      returnValue.push(element);
    }
  }
  return returnValue;
};

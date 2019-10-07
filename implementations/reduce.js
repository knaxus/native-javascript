/**
 *
  reduce() exectues a provided *reducer* function on each element of
  the array returning a final single output value.

  reduce() has two parameters:

  - the reducer callback function
  - an initial value. If no initial value is supplied, the value
    of the first element in the array is used, and the initial
    iteration is skipped.
    (which will be the initial value of the accumulator)

  The reducer function takes four arguments:

  - the accumulator
  - the value of the current element
  - the index of the current element
  - the Array object being traversed

  The return value of the reducer will be the new accumulator argument
  in the next iteration, and ultimately the final, single resulting value.

  Calling reduce on an empty array without an initial value will trow a TypeError
*/

Array.prototype.myReduce = function myReduce(reducer, initialValue) {
  let accumulator = initialValue;
  let i = 0;

  // initival value check
  if (typeof initialValue === 'undefined') {
    if (this.length === 0) {
      // no reduce on empty array without and initial value
      throw new TypeError('reduce on empty array without initial value');
    }

    // no initial value, so accumulator is set to first element,
    // and first iteration is skipped
    [accumulator] = this;
    i = 1;
  }

  for (; i < this.length; i += 1) {
    accumulator = reducer(accumulator, this[i], i, this);
  }

  return accumulator;
};

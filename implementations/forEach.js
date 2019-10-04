/**
 *
  forEach() calls a provided callback function once for each element in an array in ascending order.
  It is not invoked for index properties that have been deleted or are uninitialized
  (i.e. on sparse arrays, see example below).

  Callback is invoked with three arguments:

  - the value of the element
  - the index of the element
  - the Array object being traversed

  ** Imp
  There is no way to stop or break a forEach() loop other than by throwing an exception.
  If you need such behavior, the forEach() method is the wrong tool.
 *
*/

Array.prototype.myEach = function myEach(callback) {
  for (let i = 0; i < this.length; i += 1) {
    if (Object.hasOwnProperty.call(this, i)) {
      callback(this[i], i, this);
    }
  }
};

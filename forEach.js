/** 
 *
  forEach() calls a provided callback function once for each element in an array in ascending order. 
  It is not invoked for index properties that have been deleted or are uninitialized 
  (i.e. on sparse arrays, see example below).

  Callback is invoked with three arguments:

  - the value of the element
  - the index of the element
  - the Array object being traversed
 * 
*/

Array.prototype.myEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      callback(this[i], i, this);
    }
  }
};

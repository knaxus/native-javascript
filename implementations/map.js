/**
 *
  The map() method creates a new array with the results of calling a provided function on every element in the calling array

  Callback is invoked with three arguments:
  - the value of the element
  - the index of the element
  - the Array object being traversed
*/

Array.prototype.myMap = function(callback, thisArg) {
    var mapArray = [];
    for (let i = 0; i < this.length; i++) {
        mapArray.push(callback.call(thisArg, this[i], i, this));
    }
    return mapArray;
};
  
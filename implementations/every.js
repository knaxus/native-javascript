/**
 *
  every() exectues a provided *predicate* on each element of
  the array until it is not fulfilled.

  every() has two parameters:

  - the predicate callback function
  - a *this* argument for the callback. If none is provided, *this* will not be set in the predicate

  The predicate function one to three arguments:

  - the value of current element
  - the index of the current element
  - the Array object being traversed

  If the predicate is not fulfilled then the method will exit early (and return false).

  Calling some on an empty array will return true.
*/
Array.prototype.myEvery = function myEvery(predicate, thisArg){
    for(var i = 0 ; i < this.length ; ++i){
        if(!predicate.call(thisArg, this[i], i, this))
            return false;
    }
    
    return true;
}
/*
  The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).


  MDN Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply


  Parameters

  * otherThis
    The value of this provided for the call to func. 
  * arr
    Optional. An array-like object, specifying the arguments with which func should be called, or null or undefined if no arguments should be provided to the function. 

  Return value
    The result of calling the function with the specified this value and arguments.
*/

Function.prototype.myApply = function (otherThis, arr) {
  otherThis = otherThis || global;
  var uniqueID = "00" + Math.random();
  while (otherThis.hasOwnProperty(uniqueID)) {
    uniqueID = "00" + Math.random();
  }
  otherThis[uniqueID] = this;

  var args = [];
  var result = null;
  if (!arr) {
    result = otherThis[uniqueID]();
  } else {
    for (let i = 1, len = arr.length; i < len; i++) {
      args.push("arr[" + i + "]");
    }
    result = eval("otherThis[uniqueID](" + args + ")");
  }

  delete otherThis[uniqueID];
  return result;
};
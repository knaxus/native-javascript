
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

/*
  Bind function returns a new bounded function and passes the "this" reference to be used by the targeted function
  The bind() function creates a new bound function, which is an exotic function object
  that wraps the original function object.
*/

Function.prototype.altBind = function (someObj, ...outerFuncArguments1) {
  const targetFunc = this;

  // return inner function
  return function (...innerFuncArgs1) {

    let propKey = Math.random().toString();
    while (someObj.hasOwnProperty(propKey)) {
      propKey = Math.random().toString();
    }
    someObj[propKey] = targetFunc;

    // prepend outer args to inner args
    const result = someObj[propKey](...outerFuncArguments1, ...innerFuncArgs1);
    delete someObj[propKey];
    return result;
  }
}
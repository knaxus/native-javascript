/**
 *
  bind() creates a new function. When this function is invoked, it is called with the arguments and in the context passed.

  bind() has two parameters:
    - Context: the value that is passed as this value in the new function.
    - Arguments: arguments passed to the new function.
*/

Function.prototype.myBind = function myBind(newContext) {
    const fnArguments = Array.prototype.slice.call(arguments, 1);

    oldContext = this;
    return () => oldContext.apply(newContext, fnArguments);
};

/**
 *
  The value of NaN is NaN. This property has the attributes { 
      [[Writable]]: false, 
      [[Enumerable]]: false, 
      [[Configurable]]: false 
    }

    The Number type has exactly 18437736874454810627 (that is, 264−253+3) values, representing the double-precision 64-bit format IEEE 754 values as specified in the IEEE Standard 
    for Binary Floating-Point Arithmetic, except that the 9007199254740990 (that is, 253−2) distinct “Not-a-Number” values of the IEEE Standard 
    are represented in ECMAScript as a single special NaN value.

    NaN is a property of the global object.

    The initial value of NaN is Not-A-Number — the same as the value of Number.NaN. 
    In modern browsers, NaN is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it.

    It is rather rare to use NaN in a program. It is the returned value when Math functions fail (Math.sqrt(-1)) or when 
    a function trying to parse a number fails (parseInt("blabla"))

    isNaN(NaN);       // true
    isNaN(undefined); // true
    isNaN({});        // true

    isNaN(true);      // false
    isNaN(null);      // false
    isNaN(37);        // false

    ### Examples
    // strings
    isNaN('37');      // false: "37" is converted to the number 37 which is not NaN
    isNaN('37.37');   // false: "37.37" is converted to the number 37.37 which is not NaN
    isNaN("37,5");    // true
    isNaN('123ABC');  // true:  parseInt("123ABC") is 123 but Number("123ABC") is NaN
    isNaN('');        // false: the empty string is converted to 0 which is not NaN
    isNaN(' ');       // false: a string with spaces is converted to 0 which is not NaN

    // dates
    isNaN(new Date());                // false
    isNaN(new Date().toString());     // true

    // This is a false positive and the reason why isNaN is not entirely reliable
    isNaN('blabla');    // true: "blabla" is converted to a number. 
                        // Parsing this as a number fails and returns NaN

    For more references see:
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
*/

Number.prototype.isNaN = function(testValue){
  return isNaN(testValue);
};

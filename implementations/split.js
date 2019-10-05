/*
  String.prototype.split() splits a String object into
  substring and are stored into an array.

  The function is given a separator so that it knows
  where to split the String object.

  The function loops through the string object,
  seperates the string given the separator, and finally
  stores those substrings into an array

  };
*/

String.prototype.mysplit = function (delim) {
  // array used to store our output
  var arrayOutput = [''];

  // if separator is empty, return string as array
  if (delim === "") return arrayOutput;

  // will keep track of elements in arrayOutput
  var j = 0;

  for (var i = 0; i < this.length; i++) {
    // if delim found, push empty element into the array
    if (this.charAt(i) == delim) {
      // increase arrayOutput size by 1
      j++;

      // adds empty element to arrayOutput
      arrayOutput.push('');
    }
    else {
      // adds a char to the arrayOutput elemeent
      arrayOutput[j] += this.charAt(i);
    }
  }
  return arrayOutput;
};

// quick example to implement
var str = 'Hello2Bye';
console.log(str.mysplit('2')); // expected: [ 'Hello', 'Bye' ]
console.log(str.mysplit('')); // expected: [ '' ]
console.log(str.mysplit(' ')); // expected: [ 'Hello2Bye' ]

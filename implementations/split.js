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

String.prototype.mysplit = function (delim , limit) {
  // array used to store our output
  let arrayOutput = [''];

  // return entire string as array if delim is null
  if (delim == null) return arrayOutput;

  // if delim is empty string, split each char
  if (delim == '') {

    // pop out empty member in arrayOutput
    arrayOutput.pop();

    for (let i = 0; i < this.length; i++) {
      // check for limit parameter
      if (i == limit && limit > 0) {
        return arrayOutput;
      }

      // push each char as an array member
      arrayOutput.push(this[i])
    }
    return  arrayOutput;
  }

  // will keep track of elements in arrayOutput
  let j = 0;

  for (let i = 0; i < this.length; i++) {
    // check for limit parameter
    if (i == limit && limit > 0) {
      return arrayOutput;
    }

    // if delim found, push empty element into the array
    if (this.charAt(i) == delim.charAt(0)) {
      // increase arrayOutput size by 1
      j++;

      // adds empty element to arrayOutput
      arrayOutput.push('');
    }
    else {
      // adds a char to the arrayOutput elemeent
      if (j == 0) {
        arrayOutput[j] += this.charAt(i);
      } else {
        arrayOutput[j] += this.charAt(i + (delim.length-1));
      }
    }
  }
  return arrayOutput;
};

// quick example to implement
let str = 'Helo Bro';
console.log(str.mysplit()); // expected: [ '' ]
console.log(str.mysplit('l')); // expected: [ 'He', 'o Bro' ]
console.log(str.mysplit('')); // expected: [ 'He', 'e', 'l', 'o', ' ', 'B', 'r', 'o' ]
console.log(str.mysplit('l', 2)); // expected: [ 'He' ]
console.log(str.mysplit(' ')); // expected: [ 'Hello', 'Bro' ]

console.log(str.mysplit('elo')); // expected: [ 'H','bro' ]

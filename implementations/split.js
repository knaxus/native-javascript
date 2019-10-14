/**
 *
  MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

  The split() method splits a String object into an array of strings by separating the
  string into substrings, using a specified separator string to determine where to make each split.

  The method has two optional arguments:
  - separator: defines the points at which each split should occur.
  - limit: integer specifying a limit for the number of splits.

  It returns an array of strings split at each point defined by the separator.

  Example 1: no arguments passed
  "No arguments".split();
  must return:
  [ "No arguments" ]

  Example 2: passing separator and limit
  "Oh brave new world that has such people in it.".split(" ", 4);
  must return:
  [ "Oh", "brave", "new", "world" ]

  Example 3: array
  "ca,bc,a,bca,bca,bc".split(["a", "b"])
  must return:
  [ "c", "c,", "c", "c", "c" ]

  Example 4: regex
  "foobarfoobarfoobar".split(/bar/)
  must return:
  [ "foo", "foo", "foo", "" ]

  Example 5: regex with capturing group
  "Hello 1 word. Sentence number 2.".split(/(\d)/)
  must return:
  [ "Hello ", "1", " word. Sentence number ", "2", "." ]
*/

String.prototype.split = function mySplit(separator, limit) {
  const returnValue = [];
  let copyThis = '';

  // join characters into a string
  for (let i = 0; i < this.length; i += 1) {
    copyThis += this[i];
  }

  // check if there is a null separator
  if (separator === null || separator === undefined) {
    if (limit !== 0) {
      returnValue.push(copyThis);
    }
  } else {
    let finalSeparator = separator;

    // check if separator is regex
    if (
      Object.prototype.toString.call(finalSeparator) === '[object RegExp]'
    ) {
      let isDone = false;
      let counter = 0;
      while (!isDone) {
        // checks if theres a limit
        if (limit !== null && limit !== undefined) {
          if (counter >= limit) {
            isDone = true;
            break;
          }
        }

        counter += 1;

        // executes regex
        const regexResult = finalSeparator.exec(copyThis);

        // if it has found something, adds prior text to array
        // and removes the first occasion of regex
        if (regexResult !== null) {
          let text = '';
          for (let i = 0; i < regexResult.index; i += 1) {
            text += copyThis[i];
          }

          copyThis = copyThis.substr(regexResult.index + regexResult[0].length, copyThis.length);

          returnValue.push(text);

          // check if it has a capturing group on regex
          if (regexResult.length > 1) {
            returnValue.push(regexResult[0]);
          }
        } else {
          returnValue.push(copyThis);
          isDone = true;
        }
      }
    } else {
      // check if separator is array
      if (
        Object.prototype.toString.call(finalSeparator) === '[object Array]'
      ) {
        // transforms to a string
        finalSeparator = '';
        for (let i = 0; i < separator.length; i += 1) {
          finalSeparator += separator[i];
          if (i < separator.length - 1) {
            finalSeparator += ',';
          }
        }
      }

      // check if separator is empty string
      if (finalSeparator !== '') {
        let isDone = false;
        let counter = 0;
        while (!isDone) {
          if (limit !== null && limit !== undefined && limit >= 0) {
            if (counter >= limit) {
              isDone = true;
              break;
            }
          }
          counter += 1;

          const index = copyThis.indexOf(finalSeparator);

          // if it has found the index of separator, add prior text
          // and remove the first occasion of separator
          if (index !== -1) {
            let text = '';
            for (let i = 0; i < index; i += 1) {
              text += copyThis[i];
            }

            copyThis = copyThis.substr(index + finalSeparator.length, copyThis.length);

            returnValue.push(text);
          } else {
            returnValue.push(copyThis);
            isDone = true;
          }
        }
      } else {
        // if it is an empty string, just separate characters from string
        // also check if theres a limit defined
        const finalLimit = limit !== null && limit !== undefined && limit >= 0
          ? Math.min(limit, this.length)
          : this.length;

        for (let i = 0; i < finalLimit; i += 1) {
          returnValue.push(copyThis[i]);
        }
      }
    }
  }

  return returnValue;
};

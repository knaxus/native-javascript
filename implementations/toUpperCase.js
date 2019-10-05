/*
  The toUpperCase() method returns the value of the string converted to uppercase.
  This method does not affect the value of the string itself since JavaScript strings are immutable.


  MDN Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

  Characters from A-Z have ASCII code from 65 - 90.
  And characters from a-z have ASCII code from 97-122.
  We're checking this condition to implement this function.
*/
String.prototype.toUpperCase = function myToUpperCase() {
  return this.split('').reduce((acc, character) => {
    const charCode = character.charCodeAt();
    if (charCode >= 97 && charCode <= 122) {
      return acc + String.fromCharCode(charCode - 32);
    }
    return acc + character;
  }, '');
};

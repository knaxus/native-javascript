/*

  The toLowerCase() method returns the value of the string converted to lower case.
  toLowerCase() does not affect the value of the string str itself.

  MDN Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

  Characters from A-Z have ASCII code from 65 - 90.
  And characters from a-z have ASCII code from 97-122.
  We're checking this condition to implement this function
*/
String.prototype.toLowerCase = function myToUpperCase() {
  let lowerCaseString = '';
  for (let i = 0; i < this.length; i += 1) {
    const character = this[i];
    const charCode = character.charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      lowerCaseString += String.fromCharCode(charCode + 32);
    } else {
      lowerCaseString += character;
    }
  }
  return lowerCaseString;
};

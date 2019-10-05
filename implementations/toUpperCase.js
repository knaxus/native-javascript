/* 
  Characters from A-Z have ASCII code from 65 - 90. And characters from a-z have ASCII code from 97-122. We're checking this condition to implement this function
*/
String.prototype.toUpperCase = function () {
  return this.split("").map(function (character) {
    const charCode = character.charCodeAt();
    if (charCode >= 97 && charCode <= 122) {
      return String.fromCharCode(charCode - 32);
    }
    return character;
  }).join("");
} 
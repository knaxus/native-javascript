/*
 *
 * toUpperCase()  method returns the calling string value converted to uppercase
 * (the value will be converted to a string if it isn't one).
 * 
 */

String.prototype.toUpperCase = function () {
  var str = this
  var acc = []
  var cur
  for (var i = 0; i < str.length; i++) {
    cur = str.charCodeAt(i)
    if (cur >= 97 && cur <= 122) {
      acc.push(String.fromCharCode(cur - 32))
    } else {
      acc.push(str[i])
    }
  }
  return acc.join('')
};

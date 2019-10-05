/**
 *        The String.prototype.toUpperCase() method returns the calling string value converted to uppercase
 *        (the value will be converted to a string if it isn't one).
 *
 *        To Implement this function I have used charCodeAt() to convert the character into it's ASCII value
 *        and then I subtracted 32 from that ASCII value to convert that ASCII value of lower letter to the ASCII
 *        value of Upper letter.
 *        Finally I used String.fromCharCode() to convert the ASCII value into character.
 * 
 * 
 *  */

function lowerToUpper(str){
    let upperCaseString = ""
    for(let i=0;i<str.length;i++){
        upperCaseString += String.fromCharCode(str.charCodeAt(i) - 32);
    }
    return upperCaseString
}

lowerToUpper('hacktober fest is a one month festival of open source software');
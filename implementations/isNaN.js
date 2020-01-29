/**
 * 
  The isNaN() method checks if passed value is NaN

  MDN Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
 */

Number.prototype.ownIsNaN = function ownIsNaN(value) {
    let x = Number(value);
    return x !== x;
}

// test cases 
// {},'',null,undefined,' ',NaN,Infinity,true,false,'Infinity',[],new Date(),new Date().toString()
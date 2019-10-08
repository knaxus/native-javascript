/*The Array.concat function allows you to add elements/items to the array without modifying the original. 
This allows you add the single item or a completly new array to the existing array.

MDN LINK:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

*/

// Array.prototype.concat

//Adding one item to the existing array


const numbers = [1, 2];

const concatenatedNumber = numbers.concat(3);
console.log(concatenatedNumber)

//Adding new array to the existing array

const concatenated = concatenatedNumber.concat([4, 5]);

console.log(concatenated); // [1, 2, 3, 4, 5];






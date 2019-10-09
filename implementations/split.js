//str = "val1|val2|val3"
//str.split('|');
// output
// ["val1", "val2", "val3"]


String.prototype.split = function(splitVal) {
  const outputArr = [];
  const string = this;
  let nextVal = '';
  const splitlength = splitVal.length;
  let i = 0;
 while(i < string.length) {
  // When the current character is same as splitVal's first character
  if (string[i] === splitVal[0]) {
    let split_length_remaining = splitlength - 1;
    let split_length_passed = 1;
    let similarSplit = string[i];
    while(split_length_remaining) {
      if (string[i + split_length_passed] === splitVal[split_length_passed]) {
        similarSplit += string[i + split_length_passed];
        split_length_passed++;
        split_length_remaining--;
      } else {
        break;
      }
    }
    if (!split_length_remaining) {
      outputArr.push(nextVal);
      nextVal = '';
    } else  {
      nextVal += similarSplit;
    }
    i = i + split_length_passed;
  } else {    // When the current character is different from `splitVal` 's first character
    nextVal += string[i];
    i++;
  }
}
 outputArr.push(nextVal);
 return outputArr;
}

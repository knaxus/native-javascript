function toLowerCase(str) {
    let temp = "";
for(let chars of str){
  //Get the ascii value of character
  let value = chars.charCodeAt();

  //If the character is in uppercase
  if(value >= 65 && value <= 90){
    //convert it to lowercase
    temp += String.fromCharCode(value + 32);
  }else{
    //else add the original character
    temp += chars;
  }
}
    console.log(temp)
    return temp;
}


// Demonstration
toLowerCase('AbCDEfg');
// abcdefg
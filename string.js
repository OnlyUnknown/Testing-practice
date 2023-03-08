function stringLength(string) {
  if(string.length < 1 || string.length > 10){
       throw new Error("the string is less than 1 character or more than 10")
  }else{
    return string.length;
  }
  }

  module.exports = stringLength;
  
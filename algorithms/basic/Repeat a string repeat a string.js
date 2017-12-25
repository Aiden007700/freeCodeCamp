/* 
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object
*/


function repeatStringNumTimes(str, num) {
if (num >= 0) {
  var x = str;
  for(i=1;i<num;i++) {
  str = str + x;
}
  
} else {
  str = '';
}
  return str;
}
repeatStringNumTimes("abc", 3);

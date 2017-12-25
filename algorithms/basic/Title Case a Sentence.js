/* 
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
*/

     function titleCase(str) {
  var word= str.split(" ");
  var result="";
  for(i=0;i<word.length;i++) {
  var keep = word[i].slice(1, word[i].length);
      keep = keep.toLowerCase();
  var uppercaseFirstLetter = word[i].charAt(0).toUpperCase(); 
  var operate = uppercaseFirstLetter+keep;
    result = result+operate+" ";    
    } 
  return result.trim();
}
titleCase("I'm a little tea pot");

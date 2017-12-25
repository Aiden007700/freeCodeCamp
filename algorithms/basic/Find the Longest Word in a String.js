/* 
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
String.length
*/


function findLongestWord(str) {
  z=str.split(' ');
  p=[];
  for(i=0;i<z.length;i++){
    p[i]=z[i].length;
  }
  p=p.sort(function(a, b){return b-a});
  return p[0];
}
findLongestWord("The quick brown fox jumped over the lazy dog");

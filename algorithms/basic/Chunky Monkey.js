/* 
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.push()
Array.prototype.slice()
*/

function chunkArrayInGroups(arr, size) {
var newarr = [];
var i=0; 
  while (arr.length>0) {
     newarr[i] = arr.splice(0,size);
     i++;
  }
  return newarr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);

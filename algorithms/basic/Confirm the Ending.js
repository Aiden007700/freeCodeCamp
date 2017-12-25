/* 
heck if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.substr()
String.prototype.substring()
*/

function confirmEnding(str, target) {
x="";
y="";
var an;
 for (i=str.length-1;i>=0;i--){
   console.log(str[i]);
   if(str[i] !== " ") {
     x=x+str[i];
   }
 }
 for (i=target.length-1;i>=0;i--){
   console.log(target[i]);
   if(target[i] !== " ") {
     y=y+target[i];
   }
 } 
  for (i=0;i<y.length;i++){
    if (y[i] !== x[i]) {
      an = false;
      return an;
    } 
  }
      an = true;
      return an;
}
confirmEnding("Bastian", "n");

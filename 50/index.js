// "use strict";

console.log("Variable Hosting for JavaScript");

a = 10;

try {
  document.write(a + " " + b);
} catch (error) {
  document.write(error.message);
}
var a;
var b = 30;

document.write("<br>");

/*
********  Compile Phase *******
var a;
a = 10;
document.write(a);
*/

/*
var a;
var b;
a = 10;
document.write(b);
b = 20;
*/

var i = "Hello";
document.write(i + "<br>");

function show() {
  try {
    document.write(i + "<br>");
  } catch (error) {
    document.write(error.message);
  }
  var i = "aksh";
  //   document.write(i + "<br>");
}
show();

/*
function show() {
    var i;
    document.write(i + "<br>");
    i = "aksh";
}
*/

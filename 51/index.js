console.log("JavaScript Closure");

// 1.
// var i = 10;

// function show() {
//   var j = 20;
//   document.write(j + "<br>");
//   document.write(i + "<br>");
// }

// Here in function they has access Out of that function scope variables. So, here this is called  closure Concept in JavaScript.

// 2.
// function show() {
//   var j = "J is a Local Variable of Outer Function";
//   document.write(j + "<br>");

//   function innerFun() {
//     var k = "K is a Local Variable of Inner Function";
//     document.write(k + "<br>");
//     document.write(j + "<br>");
//   }

//   innerFun();
//   document.write(k + "<br>");
// }

// show();

// 3.

Code :

const a = 10;

function show() {
  let b = 20;

  function inner() {
    let c = 30;
    document.write(c);
    document.write(b);
    document.write(a);
  }

  inner();
}

show();


// Question: In JavaScript, Choose a Wrong Option. 

// Hint: JavaScript Closure Concept #javascript

// Option:
// (a) Function inner can access of variable b.
// (b) Function show can access of variable c.
// (c) Function inner can access of variable a.
// (b) Function show can access of variable b.


// Explanation: 
// In JavaScript, closures allow inner functions to access variables from their outer scope even after the outer function has finished executing. But Outer Function can't access of inner function Variables.


// In JavaScript, which statement is incorrect.

// var a = 10;

// function show() {
//     var b = 20;

//     function inner() {
//     var c = 30;
//     }
//     inner();
// }

// show();

// Hint: JavaScript Closure Concept #javascript

// inner() can access of var b.
// show() can access of var c.
// inner() can access of var a.
// show() can access of var b.
console.log("Tutorial | Video no 55");

function disp(a) {
  //   return "Geek";
  document.write(arguments[0]);
  return function (b) {
    document.write("a is " + a + " and b is " + b + " <br> ");
    return a + b;
  };
}

af = disp(10);

document.write(af(20));

// Question: What will be the output of the following code snippet in JavaScript?

// function disp(a) {
//   return function (b) {
//     return "a is " + a + " and b is " + b;
//   };
// }

// document.write(disp(10)(20));

// Concept: Returning Anonymous Function in JavaScript.
// #javascript

// Option:
// (a) Error
// (b) a is 10 and b is 20
// (c) undefined
// (d) null

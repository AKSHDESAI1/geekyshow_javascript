// Function Expression
var myFun1 = function show() {
  document.write("GeekyShows");
};

// Anoynomous Function
var myFun2 = function () {
  document.write("Aksh Desai");
};

// Arrow Function
// var myFun = () => {
//     document.write("Arrow Function");
// }

// myFun();

// Arrow Function With Parameters
var myFun = (a, b = 40, ...rest) => {
  document.write(a + " " + b);
  console.log("object", window, rest);
  console.log("object", window, ...rest);
  document.write(rest + "<br>");
  document.write(...rest);
};

// myFun(10, 20, 30, 40, 50, 60, 70);

// Single Line Statement
var myFun = (a) => document.write(a);

// console.log(myFun());

var myFun = (c) => {
  return c;
};
// document.write(myFun(10));

var myFun = (a) => {
  a;
};
// document.write(myFun(10));

var myFun = (a, b) => a + b;

(function (a, b) {
  console.log(arguments);
  var a = 10;
  document.write("Hello" + a + " " + b);
  console.log(arguments);
})(20, 30);

// console.log("value of a is ", a);

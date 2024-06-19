console.log("Anonymous Function in Js");

// Anoynomous Function
var disp = function (a = 20, b) {
  document.write("GeekyShows", a + b);
};

disp(10, 20); // Output: GeekyShows30

if (1) {
  var b = 10;
}

if (1) {
  console.log(b);
}

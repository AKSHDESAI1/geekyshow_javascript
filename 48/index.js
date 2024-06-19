console.log("Tutorial 48 | JavaScript | Variable Scope");

// Accessible from anywhere
var i = "I am global Variable"; // Global Variable

function show() {
  let i = 10;
  //   i = "10";
  document.write("1", i + "<br>"); // Inside Function
}

show();

document.write("2", i + "<br>"); // Outside Function

function disp() {
  i = 20;
  document.write("3", i + "<br>"); // Inside Function
}

disp();

if (true) {
  document.write("4", i + "<br>"); // Inside Block
  //   i = "baba";
}

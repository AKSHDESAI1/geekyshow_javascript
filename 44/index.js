// Default Parameter

function add(a, b = 90, c) {
  if (a == undefined) {
    document.write("a ki value de de babu \n");
  } else {
    document.write("A= ", a, " B= ", b, " C= ", c);
  }
}

// add(90, 50, 20);

function add(num, a = ["Geeky", "shows"]) {
  document.write(a[0] + "<br>");
  document.write(a[1] + "<br>");
  document.write("num is " + num);
}

add(10, ["aksh", "desai"]);

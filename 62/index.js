var a = 10;
let b = 20;
const c = 30;

// c = 10;

document.write(a + "<br>");
document.write(b + "<br>");

function myvar() {
  var a1 = 10;

  if (true) {
    var a1 = 20;
  }
  document.write(a1);
}
myvar();
// document.write("<br>hello " + a1);

for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log("object", i);

// document.write("Tutorial 30 :- For Loop in JavaScript");

// 1.

// for(i = 0; i < 5; i++ ) {
//     document.write(i + "<br>");
// }

// 2.

// i = 0;

// for (; i < 5; i++) {
//     document.write(i + "<br>");
// }

// 3.

// var i = 0;
// for (; i < 5; ) {
//   i++;
//   document.write(i + "<br>");
//   i++;
// }

// 4.

i = 0;
for (; ; i++) {
  if (i == 3) {
    break;
  }
  document.write(i + "<br>");
}

// Output
// 0
// 1
// 2

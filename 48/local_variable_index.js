// // var a = 10;

// function show() {
//   j = "I am Local Variable"; // Local Variable
//   document.write(j + "<br>" + "<br>");
// }

// show();

// try {
//   //   let j = 1;
//   document.write(j);
// } catch (error) {
//   document.write(error);
// }

// // console.log(j);

// function disp() {
//   try {
//     j = 1;
//     document.write(j);
//     console.log("aksh", j);
//   } catch (e) {
//     document.write("E", e);
//   }
// }

// disp();

// // local();
// // console.log("Value of a is", a);
// if (true) {
//   document.write(j);
// }

function show() {
  // Local Variable
  var j = "J is a Local Variable of Outer Function.";
  document.write(j + "<br>");

  function innerFun() {
    // Local Variable
    k = "K is a Local Variable of Inner Function";
    document.write(k + "<br>");
    document.write(j + "<br>");
  }

  document.write("hehehehe <br>");

  innerFun();
  document.write(k + "<br>");
}

show();

console.log("Passing Anonymous Function as Argument in JavaScript");

// Passing Anonymous Function as Argument
function disp(myFun) {
  console.log(myFun, arguments[0]);
  document.write("1", myFun());
  return myFun();
}

// document.write(disp("GeekyShows"));
document.write(
  disp(function () {
    return "GeekyShows";
  })
);

// Passing Anonymous Function as Argument
function disp(myFun) {
  return myFun();
}

// document.write(
//   disp(function () {
//     return "Aksh Desai";
//   })
// );

console.log(
  "Video no 46 | Difference Between Rest Parameters and Arguments Objects."
);

// Rest Parameters
function restShow(a, ...args) {
  console.log("a: " + a);
  console.log(args);
}

restShow(10, 20, 30, 40, 50);

// Arguments Objects
function show(a) {
  console.log("a: " + a);
  console.log(arguments);
}
show(10, 20, 30, 40, 50);

console.log("Tutorial 49 :- Block Scope in JavaScript");

// const i = 100;

if (true) {
  var i = 10; // Var keyword provides global scope in  blocks.
  document.write(i + "<br>");
}

document.write(i);

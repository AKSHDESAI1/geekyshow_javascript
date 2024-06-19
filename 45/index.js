console.log("Rest Parameter in JavaScript");

// Rest Parameter = array
function show(f1, ...a) {
  console.log(a[1]);

  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    document.write(`<h1> ${element} </h1>`);
  }
}

show(10, 20, 30, 40, 50);

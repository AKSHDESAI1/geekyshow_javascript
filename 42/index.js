function Display(name) {
  //   name = "aksh";
  //   document.write(name + "<br>");
  //   console.log(arguments.length);

  for (let i = 1; i <= arguments.length; i++) {
    console.log(arguments[i - 1]);
  }
}

Display("Geeky Shows", 1, 10);

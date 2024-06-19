document.write("Aksh Desai <br> <br>");

for (i = 0; i < 3; i++) {
  document.write("<strong> Outer Loop </strong>");
  document.write(i);
  document.write("<br>");

  for (j = 0; j < 5; j++) {
    document.write("Inner Loop");
    document.write(j);
    document.write("<br>");
  }
}

document.write("rest of code");
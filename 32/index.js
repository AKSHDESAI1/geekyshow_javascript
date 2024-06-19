var i = 0;

while (i < 5) {
  document.write(i);
  i++;
  document.write("<br>");
}

document.write("aksh" + "<br>");

j = 0;
while (true) {
  if (j == 4) break;

  document.write(i + " - " + j + "<br>");
  i++;
  j++;
}

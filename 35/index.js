var i = 0;

do {
  document.write("outer - " + i + "<br>");
  i++;

  var j = 0;
  do {
    document.write("inner " + j + " <br>");
    j++;
  } while (j < 5);
} while (i < 3);

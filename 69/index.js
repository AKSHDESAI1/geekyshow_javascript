console.log("Hello JavaScript :)");

// Declaration of Object.
var fees = {};
// fees["Rahul"] = 100;
// fees["Sumit"] = 200;
// fees["Rohan"] = 300;

fees.Rahul = 100;
fees.Sumit = 200;
fees.Rohan = 300;

document.write(fees["Sumit"] + "<br>");

document.write("Fees of Rohan is " + fees.Rohan);

fees["super Man"] = 400;
document.write("<br>Fees of Super Man is " + fees["super Man"] + "<br>");

fees["total"] = function () {
  return 100 + 200;
};

fees["new"] = function () {
  document.write("something ...");
};

document.write("Value of total method is " + fees.total());

document.write("<br> Value of new is ");

fees["new"]();

var new_fees = {
  Rahul: 101,
  Sumit: 200,
  Rohan: 300,
  "Super Man": 400,
  total: () => 40,
};

document.write(new_fees["Super Man"]);
document.write(new_fees["total"]());

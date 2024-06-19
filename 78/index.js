console.log("For in Loop in JavaScript");

function Mobile(model_no) {
  this.model = model_no;
  this.color = "White";
  this.ram = "4GB";
  this.price = function () {
    document.write(this.model + " Price Rs. 3000 <br>");
  };
}

var Samsung = new Mobile("Galaxy");
var nokia = new Mobile("3310");

for (var specs in nokia) {
  if (typeof nokia[specs] !== "function") {
    console.log(specs, " - ", nokia[specs]); // Block Scope
  } else {
    console.log(specs, " - ", nokia[specs]());
  }
}

// console.log(specs);

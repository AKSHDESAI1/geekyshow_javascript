console.log("Welcome JavaScript :)");

function Mobile(model_no) {
  this.model = model_no;
  // this.memory = 4;
}

var Samsung = new Mobile("Galaxy");
var Nokia = new Mobile("3310");

if (typeof Nokia.memory !== "undefined") {
  document.write("Available");
} else {
  document.write("Doesn't Exist");
}

if ("memory" in Nokia) {
  document.write("Available");
} else {
  document.write("Doesn't Exist");
}

if (Nokia.hasOwnProperty("memory")) {
  document.write("Available");
} else {
  document.write("Doesn't Exist");
}

console.log("Constructor in JavaScript");

// Constructor in JavaScript

// function Mobile() {
//   this.model = "3310";
//   this.price = function () {
//     document.write(this.model + " Price Rs. 3000");
//   };
// }

// var Samsung = new Mobile();
// var Nokia = new Mobile();
// Nokia.version = 12322;

// Samsung.price();

// console.log(Samsung);
// console.log(Nokia);

// Constructor with Parameters in JavaScript

function Mobile(model_no) {
  this.model = model_no;
  this.price = function () {
    document.write(this.model);
  };
}

var Samsung = new Mobile("Galaxy");
var nokia = new Mobile("3310");

Samsung.price();
nokia.price();

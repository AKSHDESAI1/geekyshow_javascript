console.log("Hello JavaScript :)");

var Mobile = function (model_no, sprice) {
  //Properties
  this.model = model_no;
  this.color = "white";
  this.price = 3000;
  this.sp = sprice;

  // Methods
  this.sellingPrice = function () {
    return this.price + this.sp;
  };
  this.data = function () {
    document.write("Model No." + this.model + " Price: " + this.sellingPrice());
  };
};

var Samsung = new Mobile("Galaxy", 2000);
var Nokia = new Mobile("3310", 1000);
Samsung.data();

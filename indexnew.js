var Mobile = function (model) {
  this.model = model;
};

Mobile.prototype.getModel = function () {
  return this.model;
};

var Samsung = function (price, model) {
  Mobile.call(this, model);
  this.price = price;
};

// Inheritance
Samsung.prototype = Object.create(Mobile.prototype);
Samsung.prototype.constructor = Samsung;

var galaxy = new Samsung(3000, "sg");
console.log(galaxy.getModel());
console.log(galaxy.model);

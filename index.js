var extend = function (child, parent) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
};

console.log("Hello, JavaScript :)");

// Super Class
var Mobile = function () {};

// Prototype Method
Mobile.prototype.getModel = function () {
  return this.model;
};

// Sub Class
var Samsung = function (model, price) {
  this.model = model;
  this.price = price;
};

// Sub Class
var Lenovo = function (model) {
  this.model = model;
};

console.log(Samsung.prototype);

// Samsung.prototype.s = 10;

// Inheritance
// Samsung.prototype = Object.create(Mobile.prototype);
// Samsung.prototype.constructor = Samsung;

extend(Samsung, Mobile);
extend(Lenovo, Mobile);

// Inheritance
// Lenovo.prototype = Object.create(Mobile.prototype);
// Lenovo.prototype.constructor = Lenovo;

Samsung.prototype.getPrice = function () {
  return this.price;
};

console.log(Samsung.prototype);

var galaxy = new Samsung("Galaxy", 3000);
console.log(galaxy.getModel());

var l1 = new Lenovo("fab2");
console.log(l1.getModel());
console.log(galaxy.getPrice());

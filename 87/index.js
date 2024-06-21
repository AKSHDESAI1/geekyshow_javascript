console.log("Hello, JavaScript :)");

// Super Class
var Mobile = function () {
  this.a = 10;
};

Mobile.prototype.z = 30;

var Samsung = function () {
  Mobile.call(this);
  this.b = 20;
};

Samsung.prototype.z = 50;
// Prototype Inheritance
Samsung.prototype = Object.create(Mobile.prototype);

Samsung.prototype.constructor = Samsung; //It is a Good Practise to do this.

var s = new Samsung();
document.write(s.z);

var m = new Mobile();
console.log(m.a);
console.log(m.b);
console.log(s.z);

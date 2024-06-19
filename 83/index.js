console.log("Prototype in JavaScript");

var Mobile = function (model_no) {
  this.model = model_no;
  this.price = 3000;
};

// var Samsung = new Mobile('Galaxy');
// var nokia = new Mobile('3310');

// class Mobile {
//   constructor(model_no) {
//     // Instance Member
//     this.model = model_no;
var nokia = new Mobile("3310");

// Prototype Member
Mobile.prototype.color = "White";

console.log(Samsung.color);
console.log(nokia.color);

for (const key in Samsung) {
  console.log(key, " - ", Samsung[key]);
}

// The Main Difference Between For...in Loop and Object.keys() is For...in Loop gives Both Instance Member and Prototype Member but Object.keys() give only Instance Member.

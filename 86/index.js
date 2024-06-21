console.log("How Prototype Works in JavaScript");

function Mobile() {
  //   this.a = 10;
}

Mobile.prototype.a = 20;
var lg = new Mobile();

console.log(Mobile.prototype);
console.log(lg.__proto__);

console.log(Mobile.prototype === lg.__proto__);
console.log(Mobile.prototype.constructor === lg.__proto__.constructor);
console.log(Mobile === Mobile.prototype.constructor);
console.log(Mobile === lg.__proto__.constructor);

// Factory Function with Parameters

/* Why we need of Factory Function With Parameters 
var Samsung = { model: "Galaxy" };
var Lg = { model: "3310" };
var nokia = { model: "1110" };
*/

function mobile(model_no) {
  return {
    model: model_no,
    price: function () {
      return "Price is Rs. 3000";
    },
  };
}

var Samsung = mobile("Samsung Model");
var Nokia = mobile("Nokia Model");

Nokia.version = "1.2.3.11.2.5";

console.log("Value of Samsung is", Samsung);
console.log("Value of Nokia is", Nokia);

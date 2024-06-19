console.log("Factory Function in JavaScript");

// Why there is a need of use Factory Function ?
var samsung = { model: "Galaxy", ram: "3GB" };

var lg = { model: "LG", ram: "4GB" };

/*Explanation
    Here, for various Mobile type the all keys are repeated. so code will be duplicated for all mobile-devices.

    So, for that solution, here there is a need of create one factory function. and with the help of this factory function, we can create multiple instance of objects.
*/

function mobile() {
  return {
    model: "Galaxy",
    price: function () {
      return "Price Rs.3000";
    },
  };
}

var Samsung = mobile();
var Lg = mobile();
console.log("Samsung is ", Samsung);

Lg.model = "Lg";
Lg.new_price = 2000;
console.log("Lg is ", Lg);
console.log("Samsung is ", Samsung);

// ------------------------------------------------------------



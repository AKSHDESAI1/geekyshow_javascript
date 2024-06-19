console.log("Ways of Creating Objects in JavaScript");

// Object Literal
var fees = {};
fees["Rahul"] = 200;

// Object Literal :- Declare and Initialization
var fees = { Rahul: 200 };

// Object Constructor
var fees = new Object();

// Factory Function
function mobile() {
  return { model: "Galaxy" };
}
var samsung = mobile();
var lg = mobile();

// Constructor Function
function Mobile() {
  this.model = "Galaxy";
}
var samsung = new Mobile();
var lg = new Mobile();

// Constructor as a Class
var Mobile = function () {
  this.model = "Galaxy";
};

var Samsung = new Mobile();

/* Here, When we assign this Constructor Function to any Variable then this Constructor (Mobile) Will become a Class.

And here, Samsung is an Object.
*/

console.log("Hello JavaScript :)");

var Mobile = function () {
  var ram = "4GB";
  this.color = "red";
  this.size = "1920*100";

  this.show = function () {
    return ram;
  };

  var wallpaper = function () {
    return "Green with dark bluish ";
  };

  this.newWallpaper = function () {
    return wallpaper();
  };
};

var Samsung = new Mobile();
console.log(Samsung.show());
console.log(Samsung.newWallpaper());

Samsung.ram = "10GB";
Samsung.size = "100";
console.log(Samsung.show());
console.log(Samsung.size);

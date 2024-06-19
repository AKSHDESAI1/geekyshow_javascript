const bodyElement = document.querySelector(".Container");
const overlay = document.querySelector("#overlay");
const li = document.querySelectorAll("li");
const nav = document.querySelector("nav");

let isFullScrolled = false;

bodyElement.addEventListener("scroll", () => {
  let total = "464.5333251953125";
  let now = bodyElement.scrollTop;

  if (isFullScrolled) {
    console.log("website is full scrolled");
    let per = (now * 100) / total;
    overlay.style.width = `${per}%`;
    overlay.style.left = `${100 - per}%`;

    if (per == 0) {
      isFullScrolled = false;
      overlay.style.left = 0;
    }
  } else {
    overlay.style.left = 0;
    console.log("website is not full scrolled");

    let per = (now * 100) / total;
    console.log(per, now);
    overlay.style.width = `${per}%`;

    if (per == 100) {
      isFullScrolled = true;
    }
  }

  // if (per == 100) {
  //
  // }

  //   if (per > 0 && per < 10) {
  //     li[0].style.color = "black";
  //   } else if (per > 10 && per < 25) {
  //     li[0].style.color = "white";

  //     li[1].style.color = "black";
  //     li[2].style.color = "black";
  //     li[3].style.color = "black";
  //   } else if (per > 32 && per < 50) {
  //     li[0].style.color = "white";
  //     li[1].style.color = "white";

  //     li[2].style.color = "black";
  //     li[3].style.color = "black";
  //   } else if (per > 57 && per < 75) {
  //     li[0].style.color = "white";
  //     li[1].style.color = "white";
  //     li[2].style.color = "white";

  //     li[3].style.color = "black";
  //   } else if (per > 80 && per < 100) {
  //     li[0].style.color = "white";
  //     li[1].style.color = "white";
  //     li[2].style.color = "white";
  //     li[3].style.color = "white";
  //   }
});

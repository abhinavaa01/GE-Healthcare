function scrollToTheLeft() {
  const elem = document.getElementById("scroll");
  elem.scrollTo({
    left: elem.scrollLeft - elem.offsetWidth / 1.5,
    behavior: "smooth",
  });
}
function scrollToTheRight() {
  const elem = document.getElementById("scroll");
  elem.scrollTo({
    left: elem.scrollLeft + elem.offsetWidth / 1.5,
    behavior: "smooth",
  });
}

var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
function adjustIframeWidthAndHeight() {
    const iframeElem = document.getElementById("mainvideofirst");
    iframeElem.setAttribute("width", screenWidth);
    var hh = screenHeight;
    if (screenWidth < 768) {
        hh = 500;
    } else {
        hh = screenHeight/1.5;
    }
    console.log(screenWidth, hh);
    // console.log("screenHeight: ", screenHeight,hh);
    iframeElem.setAttribute("height", hh);
}

adjustIframeWidthAndHeight();

window.addEventListener("resize", () => {
  if (screenWidth !== window.innerWidth || screenHeight !== window.innerHeight) {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    adjustIframeWidthAndHeight();
  }
});

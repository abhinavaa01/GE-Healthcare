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
  if (screenWidth < 768) {
    setIframeWidthAndHeight("100%", "400");
  } else if (screenWidth < 1024) {
    setIframeWidthAndHeight("100%", "300");
  } else {
    setIframeWidthAndHeight("100%", "400");
  }
}

function setIframeWidthAndHeight(ww, hh) {
  console.log(ww, hh);
  const iframeElem = document.getElementById("mainvideofirst");
  iframeElem.setAttribute("width", ww);
  iframeElem.setAttribute("height", hh);
}

adjustIframeWidthAndHeight();

window.addEventListener("resize", () => {
  if (
    screenWidth !== window.innerWidth ||
    screenHeight !== window.innerHeight
  ) {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    adjustIframeWidthAndHeight();
  }
});

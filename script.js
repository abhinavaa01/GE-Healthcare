setTimeout(() => {
  nextVideoCarousel();
}, 12000);

function closePopup() {
  const popup = document.getElementById("popup-country");
  popup.classList.add("d-none");
}
const elemToListen = document.getElementById("scroll");
elemToListen.addEventListener("scroll", () => {
  const btn = document.getElementById("leftScrollArrow");
  const btnRight = document.getElementById("rightScrollArrow");
  const btn2 = document.getElementById("leftScrollArrow2");
  const btnRight2 = document.getElementById("rightScrollArrow2");
  const maxScrollLeft = elemToListen.scrollWidth - elemToListen.clientWidth;

  if (elemToListen.scrollLeft === 0) {
    btn.classList.add("disabled");
    btn2.classList.add("disabled"); // for the second arrow
    btn.setAttribute("disabled", "true");
    btn2.setAttribute("disabled", "true"); // for the second arrow
  } else {
    btn.classList.remove("disabled");
    btn2.classList.remove("disabled"); // for the second arrow
    btn.removeAttribute("disabled");
    btn2.removeAttribute("disabled"); // for the second arrow
  }

  if (elemToListen.scrollLeft === maxScrollLeft) {
    btnRight.classList.add("disabled");
    btnRight2.classList.add("disabled"); // for the second arrow
    btnRight.setAttribute("disabled", "true");
    btnRight2.setAttribute("disabled", "true"); // for the second arrow
  } else {
    btnRight.classList.remove("disabled");
    btnRight2.classList.remove("disabled"); // for the second arrow
    btnRight.removeAttribute("disabled");
    btnRight2.removeAttribute("disabled"); // for the second arrow
  }

  // console.log("scrolling");
});

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
    setIframeWidthAndHeight("100%", "600");
  } else {
    setIframeWidthAndHeight("100%", "540");
  }
}

function setIframeWidthAndHeight(ww, hh) {
  //   console.log(ww, hh);
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

function changeCarouselContent(num) {
  const heading = document.getElementById("carousel-heading");
  const subheading = document.getElementById("carousel-subheading");
  heading.style.opacity = 0;
  subheading.style.opacity = 0;
  setTimeout(() => {
    if (num) {
      heading.innerText = "GE HealthCare";
      subheading.innerText =
        "A new era of more precise, connected, and compassionate care.";
      heading.style.opacity = 1;
      subheading.style.opacity = 1;
    } else {
      heading.innerText = "Care that can change the world";
      subheading.innerText =
        "Introducing GE HealthCare. An independent healthcare technology and diagnostics company that puts our people and resources closer to those who need them most.";
      heading.style.opacity = 1;
      subheading.style.opacity = 1;
    }
  }, 300);
  //
}

function nextVideoCarousel() {
  const videoCarousel = document.getElementById("mainvideofirst");
  const countElem = document.getElementById("currentVideo");
  vidUrlArray = videoCarousel.getAttribute("src").split("?");
  vidUrl = vidUrlArray[0];
  if (vidUrl === "https://play.vidyard.com/nZuhN16mNiJnc7542kqzHW") {
    vidUrlArray[0] = "https://play.vidyard.com/DRMzgsFprMVo4GXVN2San3";
    newUrl = vidUrlArray.join("?");
    videoCarousel.setAttribute("src", newUrl);
    countElem.innerText = "2";
    changeCarouselContent(1);
  }
}

function prevVideoCarousel() {
  const videoCarousel = document.getElementById("mainvideofirst");
  const countElem = document.getElementById("currentVideo");
  vidUrlArray = videoCarousel.getAttribute("src").split("?");
  vidUrl = vidUrlArray[0];
  if (vidUrl === "https://play.vidyard.com/DRMzgsFprMVo4GXVN2San3") {
    vidUrlArray[0] = "https://play.vidyard.com/nZuhN16mNiJnc7542kqzHW";
    newUrl = vidUrlArray.join("?");
    videoCarousel.setAttribute("src", newUrl);
    countElem.innerText = "1";
    changeCarouselContent(0);
  }
}

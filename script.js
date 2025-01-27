setTimeout(() => {
  nextVideoCarousel();
}, 12000);

// Video pause button handler 
var iframe = document.getElementById('mainvideofirst');
iframe.contentDocument.body.addEventListener("click", () => {
  console.log("clicked");
  // const elemArrayLength = document.getElementsByClassName("selectextShadowHost").length;
  // const playBtn = document.getElementById("playPauseButton");
  // if (elemArrayLength) {
  //   playBtn.classList.replace("bi-pause", "bi-play-fill");
  // } else {
  //   playBtn.classList.replace("bi-play-fill", "bi-pause");
  // }
})

// change country
function changeCountry(country) {
  // console.log(e);
  const countryName = document.getElementById("selectedCountry");
  countryName.innerText = country;
}

// Drag to scrol element
// const pos = {left: 0, x: 0};
// const slider = document.getElementById('#scroll');

// function mousemoveHandler(e) {
//   const dx = e.clientX - pos.x;
//   slider.scrollLeft = pos.left - dx;
// };

// function mouseupHandler() {
//   document.removeEventListener('mousemove', mousemoveHandler);
//   document.removeEventListener('mouseup', mouseupHandler);
//   ele.style.cursor = 'grab';
// };

// slider.addEventListener('mousedown', (e) => {
//   pos.left = slider.scrollLeft;
//   pos.x = e.clientX;
//   document.addEventListener('mousemove', mousemoveHandler);
//   document.addEventListener('mouseup', mouseupHandler);
// });

// Close popup
function closePopup() {
  const popup = document.getElementById("popup-country");
  popup.classList.add("d-none");
}

// Scroll button disable handler
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

// Scroll to the left
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

// Video width handler
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
  const link = document.getElementById("carousel-link");
  heading.style.opacity = 0;
  subheading.style.opacity = 0;
  // console.log(link);
  link.style.opacity = 0;
  setTimeout(() => {
    if (num) {
      heading.innerText = "GE HealthCare";
      subheading.innerText =
        "A new era of more precise, connected, and compassionate care.";
      link.innerText = "Read more";
      link.style.opacity = 1;
      heading.style.opacity = 1;
      subheading.style.opacity = 1;
    } else {
      heading.innerText = "Care that can change the world";
      subheading.innerText =
        "Introducing GE HealthCare. An independent healthcare technology and diagnostics company that puts our people and resources closer to those who need them most.";
      link.innerText = "Learn about the spin-off";
      link.style.opacity = 1;
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

// Choose topic UI change Handler
function changeUI() {
  // changing explaination
  const header = document.getElementById("topic-heading");
  header.innerText = "Ways we can Help You";
  const options = document.getElementById("topic-clouds-container");
  options.style.opacity = 0;

  setTimeout(() => {
    // changing the content
    options.classList.add("d-none");
    const cardsContainer = document.getElementById("topic-cards-container");
    cardsContainer.classList.remove("d-none");
    cardsContainer.style.opacity = 1;
  }, 300);
}

function changeUI1() {
  // change everything back
  const option = document.getElementById("topic-heading");
  option.innerText = "Choose a Topic";
  const headings = document.getElementById("topic-subheading");
  headings.classList.add("d-none");
  const cardsContainer = document.getElementById("topic-cards-container");
  cardsContainer.classList.add("d-none");
}

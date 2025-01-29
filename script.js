setTimeout(() => {
  nextVideoCarousel();
}, 12000);

window.onVidyardAPI = (vidyardEmbed) => {
  vidyardEmbed.api.addReadyListener((_, player) => {
    // console.log(player);
    var button = document.getElementById("playPauseButton");
    var video = VidyardV4.players[0];
    // console.log(video);
    var pause = 0;

    // When the video is paused, change flag to 1 and add console message

    video.on("pause", function () {
      pause = 1;
      console.log("video pause");
      button.classList.replace("bi-pause", "bi-play-fill");
    });

    // When the video is first played or resumed, change flag to 0 and add console message.

    video.on("play", function () {
      pause = 0;
      console.log("video resumed/play");
      button.classList.replace("bi-play-fill", "bi-pause");
    });

    // When the button is clicked, check the flag and perform the appropriate action.

    button.onclick = function () {
      if (pause == 1) {
        video.resume();
      } else {
        video.pause();
      }
      return false;
    };
  });
};

// change country
function changeCountry(country) {
  // console.log(e);
  const countryName = document.getElementById("selectedCountry");
  countryName.innerText = country;
}

// Drag to scrol element
const pos = { left: 0, x: 0 };
const slider = document.getElementById("scroll");

function mousemoveHandler(e) {
  const dx = e.clientX - pos.x;
  slider.scrollLeft = pos.left - dx;
}

function mouseupHandler() {
  document.removeEventListener("mousemove", mousemoveHandler);
  document.removeEventListener("mouseup", mouseupHandler);
  ele.style.cursor = "grab";
}

slider.addEventListener("mousedown", (e) => {
  pos.left = slider.scrollLeft;
  pos.x = e.clientX;
  document.addEventListener("mousemove", mousemoveHandler);
  document.addEventListener("mouseup", mouseupHandler);
});

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
    setIframeWidthAndHeight(screenWidth, 400);
  } else if (screenWidth < 1024) {
    setIframeWidthAndHeight(screenWidth, 600);
  } else {
    setIframeWidthAndHeight(screenWidth, 540);
  }
}

function setIframeWidthAndHeight(ww, hh) {
  //   console.log(ww, hh);
  // const iframeElem = document.querySelectorAll(".vidyard-inner-container-DRMzgsFprMVo4GXVN2San3")[0] || document.querySelectorAll(".vidyard-inner-container-nZuhN16mNiJnc7542kqzHW")[0];
  const iframeElem = document.getElementById("mainvideofirst");
  // console.log(iframeElem);
  iframeElem.setAttribute("data-width", ww);
  iframeElem.setAttribute("data-height", hh);
  // iframeElem.style.height = hh;
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
  const videoCarousel = document.querySelectorAll("iframe")[0];
  const countElem = document.getElementById("currentVideo");
  vidUrlArray = videoCarousel.getAttribute("src").split("?");
  vidUrl = vidUrlArray[0];
  vidUrlArray[0] = "https://play.vidyard.com/DRMzgsFprMVo4GXVN2San3";
  newUrl = vidUrlArray.join("?");
  videoCarousel.setAttribute("src", newUrl);
  countElem.innerText = "2";
  changeCarouselContent(1);
}

function prevVideoCarousel() {
  const videoCarousel = document.querySelectorAll("iframe")[0];
  const countElem = document.getElementById("currentVideo");
  vidUrlArray = videoCarousel.getAttribute("src").split("?");
  vidUrl = vidUrlArray[0];
  vidUrlArray[0] = "https://play.vidyard.com/nZuhN16mNiJnc7542kqzHW";
  newUrl = vidUrlArray.join("?");
  videoCarousel.setAttribute("src", newUrl);
  countElem.innerText = "1";
  changeCarouselContent(0);
}

// Choose topic UI change Handler
function changeUI() {
  const header = document.getElementById("topic-heading");
  const options = document.getElementById("topic-clouds-container");
  const backbtn = document.getElementById("topic-back-button");
  const articles = document.getElementById("topics-articles");
  const subHeading = document.getElementById("topic-impHeading");

  // animations
  header.style.opacity = 0;
  options.style.opacity = 0;
  backbtn.style.opacity = 0;
  articles.style.opacity = 0;
  subHeading.style.opacity = 0;

  // changing
  setTimeout(() => {
    header.style.opacity = 1;
    articles.style.opacity = 1;
    backbtn.style.opacity = 1;
    subHeading.style.opacity = 1;
    subHeading.innerText = "Helping you provide the best patient care possible";
    header.innerText = "Ways we can Help You";
    options.classList.add("d-none");
    backbtn.classList.remove("d-none");
    articles.classList.remove("d-none");
  }, 300);
}

function changeUI1() {
  const header = document.getElementById("topic-heading");
  const options = document.getElementById("topic-clouds-container");
  const backbtn = document.getElementById("topic-back-button");
  const articles = document.getElementById("topics-articles");
  const subHeading = document.getElementById("topic-impHeading");

  // animations
  header.style.opacity = 0;
  options.style.opacity = 0;
  backbtn.style.opacity = 0;
  articles.style.opacity = 0;
  subHeading.style.opacity = 0;

  // change everything back
  setTimeout(() => {
    header.style.opacity = 1;
    options.style.opacity = 1;
    subHeading.style.opacity = 1;
    header.innerText = "Choose a Topic";
    subHeading.innerText = "I'd like to learn more about";
    backbtn.classList.add("d-none");
    articles.classList.add("d-none");
    options.classList.remove("d-none");
  }, 300);
}

function playVideo() {
  const thumbnail = document.getElementById("largeThumbnail");
  const hh = thumbnail.clientHeight;
  const ww = thumbnail.clientWidth;

  const youtubeIframe = document.getElementById("largeyoutubeiframe");
  youtubeIframe.setAttribute(
    "src",
    youtubeIframe.getAttribute("src") + "?autoplay=1"
  );
  youtubeIframe.setAttribute("height", hh);
  youtubeIframe.setAttribute("width", ww);
  thumbnail.classList.add("d-none");
  youtubeIframe.classList.remove("d-none");
}

function playYoutubeDialog(id) {
  const screenWidth = window.innerWidth;
  var ww = screenWidth <= 768 ? 0.9 * screenWidth : 0.8 * screenWidth;
  var hh = 0.5625 * ww;
  const modal = document.getElementById("playModal");
  const iframe = document.getElementById("modalIframe");
  // const url = "https://www.youtube.com/embed/" + "wKopiOG7f28" + "?autoplay=1";
  // iframe.setAttribute("src", url);
  iframe.setAttribute("height", hh);
  iframe.setAttribute("width", ww);
  modal.showModal();
}

const myDialog = document.getElementById("playModal");
myDialog.addEventListener("click", () => {
  const iframe = document.getElementById("modalIframe");
  const srcvar = iframe.getAttribute("src")
  iframe.setAttribute("src", "");
  myDialog.close();
  iframe.setAttribute("src", srcvar);
});

const myDiv = document.getElementById("modalIframe");
myDiv.addEventListener("click", (event) => event.stopPropagation());

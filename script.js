function scrollToTheLeft() {
  const elem = document.getElementById("scroll");
  elem.scrollTo({
    left: elem.scrollLeft - elem.offsetWidth/1.5,
    behavior: 'smooth'
  });
}
function scrollToTheRight() {
  const elem = document.getElementById("scroll");
    elem.scrollTo({
        left: elem.scrollLeft + elem.offsetWidth/1.5,
        behavior: 'smooth'
    });
}

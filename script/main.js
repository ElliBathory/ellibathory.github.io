// Get the button
let btn_scrollToTop = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  toggleScrollToTop();
  toggleStickyHeader();
};

function toggleScrollToTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn_scrollToTop.style.display = "block";
  } else {
    btn_scrollToTop.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo(0, 0);
  toggleScrollToTop();
}

var header = document.getElementById("casestudy-nav");
var sticky = header.offsetTop;

function toggleStickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
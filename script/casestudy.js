var header = document.getElementById("casestudy-nav");
var sticky = header.offsetTop;

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  toggleScrollToTop();
  toggleStickyHeader();
};

function toggleStickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
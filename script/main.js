// Get the button
let btn_scrollToTop = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {toggleScrollToTop()};

function toggleScrollToTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn_scrollToTop.style.display = "block";
  } else {
    btn_scrollToTop.style.display = "none";
  }
}

function scrollToTop() {
    window.scrollTo(0,0);
    toggleScrollToTop();
}
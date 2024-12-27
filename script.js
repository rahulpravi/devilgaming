// scrollToTop.js

// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolled down 100px
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
};

// Scroll to the top when the button is clicked
scrollToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

// window.MediaSource("800px")
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle('open'); 

  links.forEach(link => {
    link.classList.toggle('fade');
  });

});
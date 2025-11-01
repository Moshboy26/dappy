// Smooth scroll to section
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (slides.length > 0 && nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  });

  prevBtn.addEventListener("click", () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  });
}

// Mobile nav toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

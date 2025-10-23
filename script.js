// === CAROUSEL ===
let current = 0;
setInterval(() => {
  const slides = document.querySelectorAll(".slide");
  if (slides.length === 0) return;
  slides.forEach(s => s.classList.remove("active"));
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 4000);

// === TEXT FADE-IN ANIMATIONS ===
const animatedElements = document.querySelectorAll(".animate");

function handleScroll() {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

// === LIGHTBOX PREVIEW ===
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeLightbox = document.getElementById("close-lightbox");

  document.querySelectorAll(".product-card img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});

<script>
// ==============================
// AUTO UPDATE YEAR
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[id^='year']")
    .forEach(el => el.textContent = new Date().getFullYear());
});

// ==============================
// SMOOTH SCROLL (WEIGHTED)
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// ==============================
// SCROLL REVEAL (EDITORIAL FEEL)
// ==============================
const revealElements = document.querySelectorAll(".card, .text-card");

const revealOnScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(el => revealOnScroll.observe(el));

// ==============================
// SOFT PARALLAX FOR IMAGES
// ==============================
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card img").forEach(img => {
    const speed = 0.08;
    img.style.transform = `translateY(${window.scrollY * speed}px) scale(1.05)`;
  });
});
</script>

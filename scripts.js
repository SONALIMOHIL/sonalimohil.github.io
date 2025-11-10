// === Auto Update Year ===
document.addEventListener("DOMContentLoaded", () => {
  const years = document.querySelectorAll("[id^='year']");
  years.forEach(el => el.textContent = new Date().getFullYear());
});

// === Smooth Scroll for Internal Links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

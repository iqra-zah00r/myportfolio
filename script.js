/* Particles.js config */
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "size": { "value": 3 },
    "move": { "speed": 2 },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff"
    }
  }
});

// Mobile nav toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const overlay = document.getElementById("nav-overlay");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
});
overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
});

// Animate skills
function animateSkills() {
  const bars = document.querySelectorAll(".progress-bar");
  const sectionVisible = Array.from(bars).some(bar => {
    const rect = bar.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  });

  // Trigger only when section is visible
  if (sectionVisible && !document.querySelector(".resume-box").classList.contains("animated")) {
    bars.forEach((bar, index) => {
      const targetWidth = bar.getAttribute("data-width");
      setTimeout(() => {
        bar.style.width = targetWidth;
      }, index * 300); // stagger delay (300ms between bars)
    });

    document.querySelector(".resume-box").classList.add("animated");
  }
}

window.addEventListener("scroll", animateSkills);


// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // adjust for navbar height
        behavior: "smooth"
      });
    }
    // close menu on mobile after clicking
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
  });
});



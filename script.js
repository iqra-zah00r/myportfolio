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

document.querySelector(".contact-form").addEventListener("submit", function (e) {
    // Get form fields
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const message = document.querySelector('textarea[name="message"]');

    // Basic validation patterns
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Clear any previous errors
    document.querySelectorAll(".error").forEach(el => el.remove());

    let isValid = true;

    // Validate Name
    if (name.value.trim() === "") {
      showError(name, "Please enter your name");
      isValid = false;
    }

    // Validate Email
    if (!emailPattern.test(email.value.trim())) {
      showError(email, "Please enter a valid email address");
      isValid = false;
    }

    // Validate Message
    if (message.value.trim().length < 10) {
      showError(message, "Message must be at least 10 characters long");
      isValid = false;
    }

    // Stop form submission if invalid
    if (!isValid) {
      e.preventDefault();
    }

    // Function to show error message
    function showError(input, message) {
      const error = document.createElement("small");
      error.classList.add("error");
      error.style.color = "red";
      error.textContent = message;
      input.parentNode.insertBefore(error, input.nextSibling);
    }
  });






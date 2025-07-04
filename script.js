// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 0);
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  menuToggle.innerHTML = mobileMenu.classList.contains("active")
    ? '<i class="ri-close-line"></i>'
    : '<i class="ri-menu-line"></i>';
});

// Counter animation
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.dataset.target);
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;

          const animate = () => {
            current += step;
            if (current < target) {
              el.textContent = Number.isInteger(target)
                ? Math.ceil(current)
                : current.toFixed(1);
              requestAnimationFrame(animate);
            } else {
              el.textContent = target;
            }
          };

          animate();
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(counter => observer.observe(counter));
});

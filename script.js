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

// Introduction Section Animation

// Scroll animations with IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".reveal, .slide-in-left, .slide-in-right, .scale-in"
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach(el => observer.observe(el));
});

// Carousel logic for Technical Section
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".carousel-dots .dot");

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    currentSlide = index;
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const slideIndex = parseInt(dot.getAttribute("data-slide"));
      showSlide(slideIndex);
    });
  });

  showSlide(currentSlide); 
});

// Power Distribution: Stacked Bar Chart
const powerDistCtx = document.getElementById('powerDistChart').getContext('2d');
new Chart(powerDistCtx, {
  type: 'bar',
  data: {
    labels: ['Strada', 'Sport', 'Corsa', 'Hard Cornering', 'Wet Conditions'],
    datasets: [
      {
        label: 'Front Axle',
        data: [30, 20, 10, 40, 55],
        backgroundColor: '#4fc3f7'
      },
      {
        label: 'Rear Axle',
        data: [70, 80, 90, 60, 45],
        backgroundColor: '#f9a825'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { labels: { color: '#fff' } }
    },
    scales: {
      x: {
        stacked: true,
        ticks: { color: '#ccc' }
      },
      y: {
        stacked: true,
        ticks: { color: '#ccc' },
        title: { display: true, text: 'Distribution (%)', color: '#ccc' },
        max: 100
      }
    }
  }
});

// Acceleration Curve
const accelCtx = document.getElementById('accelChart').getContext('2d');
new Chart(accelCtx, {
  type: 'line',
  data: {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [{
      label: 'Speed (km/h)',
      data: [0, 45, 90, 130, 170, 210, 240, 260, 275, 285, 295],
      borderColor: '#4fc3f7',
      backgroundColor: 'rgba(79,195,247,0.2)',
      borderWidth: 3,
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { labels: { color: '#fff' } }
    },
    scales: {
      x: {
        ticks: { color: '#ccc' },
        title: { display: true, text: 'Time (s)', color: '#ccc' }
      },
      y: {
        ticks: { color: '#ccc' },
        title: { display: true, text: 'Speed (km/h)', color: '#ccc' },
        min: 0,
        max: 300
      }
    }
  }
});

// Footer Section

// Back to top logic
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 600 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});




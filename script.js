const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelectorAll("[data-nav] a");
const form = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Mobile menu toggle
if (header && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });
}

// Header scroll state
const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

// Close mobile menu on link click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});

// Form submission
if (form && formNote) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Loading state
    submitBtn.textContent = "Enviando...";
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";
    
    setTimeout(() => {
      formNote.textContent = "Mensagem enviada com sucesso! Nossa equipe retornará em breve.";
      formNote.style.color = "#10b981";
      form.reset();
      
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      submitBtn.style.opacity = "1";
      
      setTimeout(() => {
        formNote.textContent = "Nossa equipe retornará com uma análise inicial da sua demanda.";
        formNote.style.color = "";
      }, 5000);
    }, 1500);
  });
}

// Scroll reveal with multiple animation types
if ("IntersectionObserver" in window) {
  const revealItems = document.querySelectorAll(
    ".section-copy, .section-heading, .about-panel, .essence-grid article, .process-timeline article, .product-card, .differential-grid article, .contact-copy, .contact-form"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealItems.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 100}ms`;
    observer.observe(item);
  });

  // Hero elements with different animations
  const heroContent = document.querySelector(".hero-content");
  const heroMedia = document.querySelector(".hero-media");
  
  if (heroContent) {
    heroContent.classList.add("reveal");
    observer.observe(heroContent);
  }
  
  if (heroMedia) {
    heroMedia.classList.add("reveal");
    heroMedia.style.transitionDelay = "150ms";
    observer.observe(heroMedia);
  }
} else {
  document.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = header?.offsetHeight || 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Parallax effect for hero (subtle)
let ticking = false;
const updateParallax = () => {
  const scrollY = window.scrollY;
  const heroMedia = document.querySelector(".hero-media");
  
  if (heroMedia && scrollY < window.innerHeight) {
    heroMedia.style.transform = `translateY(${scrollY * 0.05}px)`;
  }
  
  ticking = false;
};

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
}, { passive: true });

// Button ripple effect
document.querySelectorAll('.button, .header-cta, .whatsapp-link').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${e.clientX - rect.left - size/2}px;
      top: ${e.clientY - rect.top - size/2}px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
    `;
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// Add ripple keyframe dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Intersection counter for differentials
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const miniIcons = entry.target.querySelectorAll('.mini-icon');
      miniIcons.forEach((icon, index) => {
        setTimeout(() => {
          icon.style.opacity = '1';
          icon.style.transform = 'translateY(0)';
        }, index * 150);
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const differentialGrid = document.querySelector('.differential-grid');
if (differentialGrid) {
  const miniIcons = differentialGrid.querySelectorAll('.mini-icon');
  miniIcons.forEach(icon => {
    icon.style.opacity = '0';
    icon.style.transform = 'translateY(10px)';
    icon.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  });
  counterObserver.observe(differentialGrid);
}

// Process timeline animation
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const articles = entry.target.querySelectorAll('article');
      articles.forEach((article, index) => {
        setTimeout(() => {
          article.style.opacity = '1';
          article.style.transform = 'translateY(0)';
        }, index * 120);
      });
      timelineObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

const processTimeline = document.querySelector('.process-timeline');
if (processTimeline) {
  const articles = processTimeline.querySelectorAll('article');
  articles.forEach(article => {
    article.style.opacity = '0';
    article.style.transform = 'translateY(20px)';
    article.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  timelineObserver.observe(processTimeline);
}

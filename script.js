const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelectorAll("[data-nav] a");
const form = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Scroll progress indicator
const scrollProgress = document.querySelector("[data-scroll-progress]");
const updateScrollProgress = () => {
  if (!scrollProgress) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
};
updateScrollProgress();
window.addEventListener("scroll", updateScrollProgress, { passive: true });

// Cursor follower (desktop only)
const cursorFollower = document.querySelector("[data-cursor-follower]");
if (cursorFollower && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  let cursorX = 0;
  let cursorY = 0;
  let followerX = 0;
  let followerY = 0;

  document.addEventListener("mousemove", (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
  });

  // Smooth follow with lerp
  const animateCursor = () => {
    followerX += (cursorX - followerX) * 0.18;
    followerY += (cursorY - followerY) * 0.18;
    cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateCursor);
  };
  animateCursor();

  // Grow on interactive elements
  document.querySelectorAll("a, button, .product-card, .essence-grid article").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursorFollower.style.width = "24px";
      cursorFollower.style.height = "24px";
      cursorFollower.style.opacity = "0.3";
    });
    el.addEventListener("mouseleave", () => {
      cursorFollower.style.width = "8px";
      cursorFollower.style.height = "8px";
      cursorFollower.style.opacity = "0.5";
    });
  });
} else if (cursorFollower) {
  cursorFollower.style.display = "none";
}

// Magnetic buttons effect (desktop only)
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  document.querySelectorAll(".button, .header-cta, .whatsapp-link").forEach((button) => {
    button.addEventListener("mousemove", (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      button.style.transform = `translate(${x * 0.15}px, ${y * 0.2}px)`;
    });
    button.addEventListener("mouseleave", () => {
      button.style.transform = "";
    });
  });
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

// Scroll reveal with 3D animation types
if ("IntersectionObserver" in window) {
  // Elements that reveal from left
  const revealLeftItems = document.querySelectorAll(
    ".section-copy, .contact-copy"
  );

  // Elements that reveal from right
  const revealRightItems = document.querySelectorAll(
    ".about-panel, .contact-form"
  );

  // Elements that reveal from up
  const revealUpItems = document.querySelectorAll(
    ".section-heading, .essence-grid article, .process-timeline article, .product-card, .differential-grid article"
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
    { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
  );

  // Apply 3D reveal classes with stagger
  revealLeftItems.forEach((item, index) => {
    item.classList.add("reveal-3d-left");
    item.style.transitionDelay = `${index * 100}ms`;
    observer.observe(item);
  });

  revealRightItems.forEach((item, index) => {
    item.classList.add("reveal-3d-right");
    item.style.transitionDelay = `${index * 100}ms`;
    observer.observe(item);
  });

  revealUpItems.forEach((item, index) => {
    item.classList.add("reveal-3d-up");
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 80}ms`;
    observer.observe(item);
  });

  // Hero elements with different animations
  const heroContent = document.querySelector(".hero-content");
  const heroMedia = document.querySelector(".hero-media");
  
  if (heroContent) {
    heroContent.classList.add("reveal-3d-left");
    observer.observe(heroContent);
  }
  
  if (heroMedia) {
    heroMedia.classList.add("reveal-3d-right");
    heroMedia.style.transitionDelay = "200ms";
    observer.observe(heroMedia);
  }
} else {
  document.querySelectorAll(".reveal-3d-left, .reveal-3d-right, .reveal-3d-up").forEach((item) => {
    item.classList.add("is-visible");
  });
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

// 3D Parallax effect for hero
let ticking = false;
const updateParallax3D = () => {
  const scrollY = window.scrollY;
  const heroMedia = document.querySelector(".hero-media");
  const heroProof = document.querySelector(".hero-proof");
  
  if (heroMedia && scrollY < window.innerHeight) {
    const progress = scrollY / window.innerHeight;
    heroMedia.style.transform = `
      translateY(${scrollY * 0.03}px) 
      translateZ(${20 - progress * 40}px) 
      rotateY(${progress * 3}deg)
    `;
  }
  
  if (heroProof && scrollY < window.innerHeight) {
    const progress = scrollY / window.innerHeight;
    heroProof.style.transform = `
      translateY(${scrollY * 0.02}px) 
      translateZ(${10 - progress * 20}px) 
      rotateX(${progress * 2}deg)
    `;
  }
  
  ticking = false;
};

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateParallax3D);
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

// Intersection counter for differentials with 3D
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const miniIcons = entry.target.querySelectorAll('.mini-icon');
      miniIcons.forEach((icon, index) => {
        setTimeout(() => {
          icon.style.opacity = '1';
          icon.style.transform = 'perspective(500px) translateZ(0) rotateY(0deg)';
        }, index * 150);
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const differentialGrid = document.querySelector('.differential-grid');
if (differentialGrid) {
  const miniIcons = differentialGrid.querySelectorAll('.mini-icon');
  miniIcons.forEach((icon, index) => {
    icon.style.opacity = '0';
    icon.style.transform = `perspective(500px) translateZ(-15px) rotateY(${index % 2 === 0 ? -20 : 20}deg)`;
    icon.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
  });
  counterObserver.observe(differentialGrid);
}

// Process timeline 3D animation
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const articles = entry.target.querySelectorAll('article');
      articles.forEach((article, index) => {
        setTimeout(() => {
          article.style.opacity = '1';
          article.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)';
        }, index * 120);
      });
      timelineObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

const processTimeline = document.querySelector('.process-timeline');
if (processTimeline) {
  const articles = processTimeline.querySelectorAll('article');
  articles.forEach((article, index) => {
    article.style.opacity = '0';
    article.style.transform = `perspective(1000px) rotateY(${index % 2 === 0 ? -10 : 10}deg) translateZ(-20px)`;
    article.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  });
  timelineObserver.observe(processTimeline);
}

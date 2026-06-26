const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelectorAll("[data-nav] a");
const form = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const year = document.querySelector("[data-year]");
const revealItems = document.querySelectorAll(
  ".section-copy, .section-heading, .about-panel, .essence-grid article, .process-timeline article, .product-card, .differential-grid article, .contact-copy, .contact-form"
);

if (year) {
  year.textContent = new Date().getFullYear();
}

if (header && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

if (form && formNote) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent = "Mensagem preparada. Configure o envio para conectar este formulário ao e-mail corporativo.";
    form.reset();
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 80}ms`;
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

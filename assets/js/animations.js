// ==========================================
// LOISARO Scroll Animations
// ==========================================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -60px 0px",
  },
);

document
  .querySelectorAll(
    `
.section-heading,
.intro-card,
.showcase-text,
.showcase-image,
.process-item,
.location-card,
.advantage,
.contact-intro,
.contact-info,
.contact-form,
.footer-brand,
.footer-links,
.footer-bottom
`,
  )
  .forEach((el) => {
    el.classList.add("hidden");

    observer.observe(el);
  });

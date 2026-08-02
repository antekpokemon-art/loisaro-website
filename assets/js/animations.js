// ==========================================
// LOISARO Scroll Animations
// ==========================================

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.25,
    rootMargin: "0px 0px -20% 0px",
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
    .contact-form
  `,
  )
  .forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });

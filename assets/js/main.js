// ==========================================================
// LOISARO
// Main JavaScript
// ==========================================================

// ========================================
// Header beim Scrollen
// ========================================

const header = document.getElementById("header");

if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// ========================================
// Mobile Navigation
// ========================================

const menuToggle = document.querySelector(".menu-toggle");

const nav = document.querySelector(".nav");

const navLinks = document.querySelectorAll(".nav a");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");

    nav.classList.toggle("open");

    document.body.classList.toggle("menu-open");
  });
}

// ========================================
// Menü nach Link-Klick schließen
// ========================================

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");

    document.body.classList.remove("menu-open");

    menuToggle.classList.remove("active");
  });
});

// ========================================
// Klick außerhalb schließt Menü
// ========================================

document.addEventListener("click", (event) => {
  if (!menuToggle || !nav) return;

  if (
    nav.classList.contains("open") &&
    !nav.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    nav.classList.remove("open");

    document.body.classList.remove("menu-open");

    menuToggle.classList.remove("active");
  }
});

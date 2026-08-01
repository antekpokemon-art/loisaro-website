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
// ========================================
// Kontaktformular
// ========================================

const contactForm = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-btn");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "Wird gesendet...";

    const formData = new FormData(contactForm);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        "https://loisaro-contact.antek-pokemon.workers.dev/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();

      if (result.success) {
        alert("Vielen Dank! Ihre Anfrage wurde erfolgreich versendet.");

        contactForm.reset();
      } else {
        alert("Leider ist ein Fehler aufgetreten.");
      }
    } catch (err) {
      alert("Verbindung zum Server fehlgeschlagen.");
    }

    submitButton.disabled = false;

    submitButton.textContent = "Beratung anfragen";
  });
}

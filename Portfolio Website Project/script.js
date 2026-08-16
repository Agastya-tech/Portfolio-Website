// ==========================================================
// 1. MOBILE NAVIGATION TOGGLE
// ==========================================================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // shows/hides menu on mobile
});

// Close the mobile menu automatically when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// ==========================================================
// 2. CONTACT FORM (frontend-only demo, no backend)
// ==========================================================
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stops the page from reloading

  // In a real project, form data would be sent to a server here.
  // Since this is a frontend-only demo, we just show a success message.
  formStatus.textContent = "Thank you! Your message has been noted (demo only).";

  contactForm.reset(); // clears the form fields
});

// ==========================================================
// 3. AUTO-UPDATE FOOTER YEAR
// ==========================================================
document.getElementById("year").textContent = new Date().getFullYear();

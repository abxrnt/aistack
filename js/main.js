/*
  AIStack main JavaScript
  Small, optional interactivity for the contact form
*/

document.addEventListener("DOMContentLoaded", () => {
  // Only attach the listener if the contact form exists on the page
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      // Prevent actual submission since there is no backend
      event.preventDefault();

      // Simple feedback for the user
      alert("Thanks for your message! We'll get back to you soon.");

      // Reset the form fields
      contactForm.reset();
    });
  }
});

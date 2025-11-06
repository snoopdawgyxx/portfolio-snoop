console.log("Snoopdawgyxx Hub ⚡ — @snoopdawgyxx");

// Optional: small animation for header
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header h1");
  header.style.transition = "0.6s";
  header.style.opacity = "0";
  setTimeout(() => (header.style.opacity = "1"), 300);
});
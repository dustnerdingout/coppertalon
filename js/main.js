// Copper Talon Detailing Co.

// Where quote requests go. Swap in the real business email.
const CONTACT_EMAIL = "hello@coppertalondetailing.com";

// Mobile nav
const toggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Scroll reveal
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add("in"));
}

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Quote form: opens the visitor's email app with everything filled in
const form = document.getElementById("quoteForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const d = new FormData(form);
    const services = d.getAll("services").join(", ") || "Not sure yet";
    const body = [
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      `Email: ${d.get("email")}`,
      `Vehicle: ${d.get("vehicle")}`,
      `Location: ${d.get("location")}`,
      `Services: ${services}`,
      `Preferred date: ${d.get("date") || "Flexible"}`,
      "",
      d.get("message") || "",
    ].join("\n");
    const subject = `Quote request: ${d.get("vehicle")}`;
    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const status = document.getElementById("formStatus");
    if (status) status.textContent = "Your email app should open with your request ready to send.";
  });
}

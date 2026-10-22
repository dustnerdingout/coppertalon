// Copper Talon Detailing Co.


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

// Google Analytics events (the Google tag is in each page's <head>)
function track(name, params) {
  if (typeof window.gtag === "function") window.gtag("event", name, params || {});
}

// Phone and email clicks
document.addEventListener("click", (e) => {
  const link = e.target.closest("a[href^='tel:'], a[href^='mailto:']");
  if (!link) return;
  const isPhone = link.getAttribute("href").startsWith("tel:");
  track(isPhone ? "phone_click" : "email_click", { link_url: link.getAttribute("href") });
});

// Finished bookings from the Strata widget on /book/
document.addEventListener("strata-booking-complete", (e) => {
  const d = e.detail || {};
  track("booking_complete", {
    value: Number(d.total) || undefined,
    currency: d.currency || "USD",
    booking_kind: d.kind,
    service_ids: Array.isArray(d.serviceIds) ? d.serviceIds.join(",") : d.serviceIds,
  });
});

// Copper Talon Detailing Co.
// Reads ?interest= on the contact page, shows the "You picked" banner,
// and passes the pick along to the Strata lead form.
// Loaded before Strata's embed.js so the form sees the updated link.
//   Packages:    ?interest=package-showroom
//   Care Plans:  ?interest=membership-talon-care
// Older ?package=showroom links still work.

// Set to false if the Strata form stops loading when a pick is passed.
const PASS_PICK_TO_STRATA = true;

const PICKS = {
  "package-pet-owner": { name: "Pet Owner Interior Package", price: "from $229", back: "pricing.html#packages", backText: "Change package" },
  "package-deep-clean": { name: "Deep Clean Interior Package", price: "from $249", back: "pricing.html#packages", backText: "Change package" },
  "package-family-hauler": { name: "Family Hauler Package", price: "from $319", back: "pricing.html#packages", backText: "Change package" },
  "package-showroom": { name: "Showroom Package", price: "from $389", back: "pricing.html#packages", backText: "Change package" },
  "membership-copper-care": { name: "Copper Care", price: "from $89/mo", back: "care-plans.html", backText: "Change care plan" },
  "membership-talon-care": { name: "Talon Care", price: "from $199/mo", back: "care-plans.html", backText: "Change care plan" },
};

(() => {
  const params = new URLSearchParams(window.location.search);
  let key = (params.get("interest") || "").toLowerCase();
  if (!key && params.get("package")) key = "package-" + params.get("package").toLowerCase();
  const pick = PICKS[key];
  if (!pick) return;

  const banner = document.getElementById("pickBanner");
  if (banner) {
    banner.innerHTML =
      `You picked: <strong>${pick.name}</strong>, ${pick.price}. ` +
      `<a href="${pick.back}">${pick.backText}</a>`;
    banner.hidden = false;
  }

  const embed = document.querySelector("[data-strata-embed]");
  if (PASS_PICK_TO_STRATA && embed) {
    const url = new URL(embed.getAttribute("data-strata-embed"));
    url.searchParams.set("interest", pick.name);
    embed.setAttribute("data-strata-embed", url.toString());
  }
})();

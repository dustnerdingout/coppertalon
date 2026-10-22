// Copper Talon Detailing Co.
// Reads ?interest=package-<code> on the contact page (older ?package=<code>
// links still work), shows the "You picked" banner,
// and passes the package name along to the Strata lead form.
// Loaded before Strata's embed.js so the form sees the updated link.

// Set to false if the Strata form stops loading when a package is passed.
const PASS_PACKAGE_TO_STRATA = true;

const PACKAGES = {
  "pet-owner": { name: "Pet Owner Interior Package", from: 229 },
  "deep-clean": { name: "Deep Clean Interior Package", from: 249 },
  "family-hauler": { name: "Family Hauler Package", from: 319 },
  "showroom": { name: "Showroom Package", from: 389 },
};

(() => {
  const params = new URLSearchParams(window.location.search);
  const interest = (params.get("interest") || "").toLowerCase();
  const slug = interest.startsWith("package-")
    ? interest.slice("package-".length)
    : params.get("package");
  const pick = slug && PACKAGES[slug.toLowerCase()];
  if (!pick) return;

  const banner = document.getElementById("pickBanner");
  if (banner) {
    banner.innerHTML =
      `You picked: <strong>${pick.name}</strong>, from $${pick.from}. ` +
      `<a href="packages.html">Change package</a>`;
    banner.hidden = false;
  }

  const embed = document.querySelector("[data-strata-embed]");
  if (PASS_PACKAGE_TO_STRATA && embed) {
    const url = new URL(embed.getAttribute("data-strata-embed"));
    url.searchParams.set("package", pick.name);
    embed.setAttribute("data-strata-embed", url.toString());
  }
})();

# Copper Talon Detailing Co.

**Sharp Eye. Flawless Finish.**

The website for Copper Talon Detailing Co., a mobile auto detailing business serving Killeen, TX. It's a plain HTML, CSS, and JavaScript site. There's nothing to install and no build step.

## Pages

| Page | File | What's on it |
|---|---|---|
| Home | `index.html` | Hero with logo, services overview, how it works, why Copper Talon, booking button |
| Pricing | `pricing.html` | Main services, add ons, and deposits, matched to Strata, plus a link to Packages |
| Packages | `packages.html` | All 4 packages. "Request This Package" opens the Contact page with that package picked |
| Memberships | `memberships.html` | Copper Care and Talon Care plans, how it works. "Inquire About" opens the Contact page with that plan picked |
| About Us | `about.html` | The story and meaning behind the Copper Talon name |
| Book Now | `book.html` | Online booking through the Strata widget |
| Contact | `contact.html` | Strata lead form, phone, email, service area, hours, common questions |

## Folder layout

```
index.html        Home page
pricing.html      Services and pricing
packages.html     Packages
memberships.html  Memberships
about.html        About Us
book.html         Online booking (Strata widget)
contact.html      Strata lead form, contact info, and FAQ
css/style.css     All styling (colors, fonts, layout)
js/main.js        Mobile menu and scroll animations
js/interest.js    Package and membership pick banner on the Contact page
sitemap.xml       List of pages for Google
assets/           Logo, favicon, social share image
```

## Preview it on your computer

1. Open a terminal in this folder.
2. Run `python3 -m http.server 8000`
3. Go to http://localhost:8000 in your browser.

You can also just double click `index.html` to open it.

## Common edits

### Phone number and email
The phone is `(254) 225-1954` and the email is `hello@coppertalondetailing.com`. To change either one, update it in:

* The footer of all seven HTML pages
* The info cards in `contact.html`
* The "Questions first?" line in `book.html`

Tip: in Cursor or VS Code, use Find and Replace across the whole folder to change them all at once. For the phone, also replace the link version, `tel:+12542251954`.

### Prices
Strata CRM is the source of truth for every service, price, and description. When something changes in Strata, update the site to match:

* `pricing.html`: every service card, add ons, and the deposit band
* `packages.html`: every package card and the deposit band
* `memberships.html`: both plan cards
* `js/interest.js`: the package and plan names and "from" prices used in the Contact page banner
* `index.html`: the "From $X" price on each service card
* `contact.html`: the "How long", "How much", and "Deposit" FAQ answers
* `book.html`: the deposit line above the widget

The big "From" price on each card is the Sedan / Coupe price. SUV / Crossover and Truck / Van / 3 Row prices sit right under it.

### Hours
Edit the list under "Hours" in `contact.html`.

### Colors
The brand colors are at the top of `css/style.css` under `:root`. Change `--copper` to shift the main accent color everywhere.

## Online booking

Booking runs through Strata. The booking widget is embedded on `book.html` (look for the `<iframe>` with `stratacrm.app`). Services, prices, and available times inside the widget are managed in your Strata account, not in this site's files.

Every **Book Now** button on the site links to `book.html`.

The small script under the widget resizes the frame to fit each booking step, so there's no empty space or inner scrolling. When a customer finishes booking, the page fires a `strata-booking-complete` event you can use for conversion tracking.

## Strata lead form

`contact.html` has a Strata lead form next to the contact info (look for `data-strata-embed`). Leads from it go straight into your Strata account. The form's fields are managed in Strata.

### Package and membership picks

Each "Request This Package" button on `packages.html` and each "Inquire About" button on `memberships.html` links to the Contact page with the pick in the link, like `contact.html?interest=package-showroom`. The codes are `package-pet-owner`, `package-deep-clean`, `package-family-hauler`, `package-showroom`, `membership-copper-care`, and `membership-talon-care`. Older `?package=showroom` links still work.

`js/interest.js` then:

* Shows a banner above the form, like "You picked: Showroom Package, from $389." or "You picked: Talon Care, from $199/mo."
* Adds the pick to the Strata form link (`?interest=Talon Care`), so it can show up in the lead if Strata supports it.

With no package (or an unknown one) in the link, the Contact page works exactly as before. If the Strata form ever fails to load when something is picked, set `PASS_PICK_TO_STRATA` to `false` at the top of `js/interest.js`. The banner keeps working.

## Put it online with cPanel

1. Zip the site files: `index.html`, `pricing.html`, `packages.html`, `memberships.html`, `about.html`, `contact.html`, `book.html`, `sitemap.xml`, and the `css`, `js`, and `assets` folders.
2. In cPanel, open **File Manager** and go to your domain's folder (usually `public_html`).
3. Click **Upload** and pick the zip.
4. Right click the zip, choose **Extract**, and overwrite the old files when asked.
5. Delete the zip, then open your site and check every page.

Docs: [cPanel File Manager](https://docs.cpanel.net/cpanel/files/file-manager/)

## Before launch checklist

* Confirm site prices still match Strata
* Submit `sitemap.xml` in Google Search Console
* Add real before and after photos of your work
* Fill in the membership FAQ (billing, canceling, contract) in the commented block in `memberships.html`
* Test the booking widget and every page on your phone

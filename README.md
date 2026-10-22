# Copper Talon Detailing Co.

**Sharp Eye. Flawless Finish.**

The website for Copper Talon Detailing Co., a mobile auto detailing business serving Killeen, TX. It's a plain HTML, CSS, and JavaScript site. There's nothing to install and no build step.

## Pages

| Page | Address | File | What's on it |
|---|---|---|---|
| Home | `/` | `index.html` | Headline over a faded owl watermark, services, how it works, why Copper Talon, service area |
| Detail Menu | `/pricing/` | `pricing/index.html` | Main services, packages (`/pricing/#packages`), Care Plans banner, add ons, deposits |
| Care Plans | `/care-plans/` | `care-plans/index.html` | Copper Care and Talon Care, how it works, Packages banner |
| About Us | `/about/` | `about/index.html` | The story and meaning behind the Copper Talon name |
| Book Now | `/book/` | `book/index.html` | Online booking through the Strata widget |
| Contact | `/contact/` | `contact/index.html` | Strata lead form, phone, email, service area, hours, FAQ |

Each page lives in its own folder as `index.html`, so the address is clean (`/pricing/` instead of `/pricing.html`). All links and file paths start with `/` so they work from any folder.

### Old addresses that redirect

`.htaccess` sends every old address to its new home with a permanent (301) redirect, so Google rankings and old links carry over:

| Old | New |
|---|---|
| `/index.html` | `/` |
| `/pricing.html` | `/pricing/` |
| `/care-plans.html` | `/care-plans/` |
| `/about.html` | `/about/` |
| `/contact.html` | `/contact/` |
| `/book.html` | `/book/` |
| `/packages.html` | `/pricing/#packages` |
| `/memberships.html` | `/care-plans/` |

`packages.html` and `memberships.html` also stay as tiny backup redirect pages in case `.htaccess` isn't active.

## Folder layout

```
index.html              Home page
pricing/index.html      Detail Menu
care-plans/index.html   Care Plans
about/index.html        About Us
book/index.html         Online booking (Strata widget)
contact/index.html      Strata lead form, contact info, FAQ
packages.html           Backup redirect to /pricing/#packages
memberships.html        Backup redirect to /care-plans/
.htaccess               Clean URL and 301 redirect rules (Apache / cPanel)
robots.txt              Tells search engines where the sitemap is
sitemap.xml             List of pages for Google
favicon.ico             Browser tab icon
css/style.css           All styling (colors, fonts, layout)
fonts/                  Self hosted Big Shoulders Display and Inter fonts
js/main.js              Mobile menu and scroll animations
js/interest.js          Package and Care Plan pick banner on the Contact page
assets/                 Owl icons sized for header and footer, home watermark, About emblem,
                        512px logo for Google, favicons, social share image
```

## Local SEO

The site is set up to show up for searches like "mobile detailing near Killeen":

* **Titles and descriptions** on every page name the service and the towns served.
* **Service area** section on the home page lists Killeen, Harker Heights, Copperas Cove, Nolanville, Belton, Temple, and Lampasas. The same towns are on the Contact page and in the footer.
* **Structured data** (the `application/ld+json` blocks in each page's `<head>`) tells Google:
  * Home: the business (name, phone, email, hours, towns served, price range)
  * Detail Menu: every service and package with its price range
  * Care Plans: both plans with monthly prices
  * Contact: the FAQ, which can show up as answers in search results
* **Canonical tags** on every page point Google to the one true address for that page.
* **`robots.txt`** and **`sitemap.xml`** list every page for search engines.

To change the towns, update the home page Service Area list, the Contact page Service Area card and FAQ, the footer line, and the `areaServed` list in the structured data on the home, Detail Menu, and Care Plans pages.

## Preview it on your computer

1. Open a terminal in this folder.
2. Run `python3 -m http.server 8000`
3. Go to http://localhost:8000 in your browser.

Use the server instead of double clicking files, because links start with `/`.

## Common edits

### Phone number and email
The phone is `(254) 225-1954` and the email is `hello@coppertalondetailing.com`. To change either one, update it in:

* The footer of all six pages
* The info cards in `contact/index.html`
* The "Questions first?" line in `book/index.html`

Tip: in Cursor or VS Code, use Find and Replace across the whole folder to change them all at once. For the phone, also replace the link version, `tel:+12542251954`.

### Prices
Strata CRM is the source of truth for every service, price, and description. When something changes in Strata, update the site to match:

* `pricing/index.html`: every service card, package card, add ons, and the deposit band
* `care-plans/index.html`: both Care Plan cards
* `js/interest.js`: the package and plan names and "from" prices used in the Contact page banner
* `index.html`: the "From $X" price on each service card
* `contact/index.html`: the "How long", "How much", and "Deposit" FAQ answers
* `book/index.html`: the deposit line above the widget

The big "From" price on each card is the Sedan / Coupe price. SUV / Crossover and Truck / Van / 3 Row prices sit right under it.

### Hours
Edit the list under "Hours" in `contact/index.html`.

### Home page watermark
The faded owl behind the home page headline (`assets/logo-watermark.webp`) is set in `css/style.css` under `.hero-watermark::before`. Raise `opacity` (now `0.14`) to make it stronger, or lower it to make it fainter.

### Speed and caching

* Fonts are hosted on the site (no Google Fonts request) and preloaded.
* `.htaccess` tells browsers to keep images, fonts, CSS, and JS for a year and compresses text files.
* Pages load CSS and JS with a version tag, like `/css/style.css?v=20261022`. **After you edit `style.css`, `main.js`, or `interest.js`, change that number on every page** (Find and Replace across the folder) so visitors get the new file instead of a cached one.
* The owl icons come in exact sizes for the header (46px, 92px) and footer (84px, 168px). The watermark and About emblem are saved on black and blended in with CSS, which keeps them small.

### Colors
The brand colors are at the top of `css/style.css` under `:root`. Change `--copper` to shift the main accent color everywhere.

## Online booking

Booking runs through Strata. The booking widget is embedded on `book/index.html` (look for the `<iframe>` with `stratacrm.app`). Services, prices, and available times inside the widget are managed in your Strata account, not in this site's files.

Every **Book Now** button on the site links to `/book/`.

The small script under the widget resizes the frame to fit each booking step, so there's no empty space or inner scrolling. When a customer finishes booking, the page fires a `strata-booking-complete` event you can use for conversion tracking.

## Strata lead form

`contact/index.html` has a Strata lead form next to the contact info (look for `data-strata-embed`). Leads from it go straight into your Strata account. The form's fields are managed in Strata.

### Package and Care Plan picks

Each "Request This Package" button on `pricing/index.html` and each "Inquire About" button on `care-plans/index.html` links to the Contact page with the pick in the link, like `contact.html?interest=package-showroom`. The codes are `package-pet-owner`, `package-deep-clean`, `package-family-hauler`, `package-showroom`, `membership-copper-care`, and `membership-talon-care` (the Care Plan codes kept their original names so old links keep working). Older `?package=showroom` links still work.

`js/interest.js` then:

* Shows a banner above the form, like "You picked: Showroom Package, from $389." or "You picked: Talon Care, from $199/mo."
* Adds the pick to the Strata form link (`?interest=Talon Care`), so it can show up in the lead if Strata supports it.

With no package (or an unknown one) in the link, the Contact page works exactly as before. If the Strata form ever fails to load when something is picked, set `PASS_PICK_TO_STRATA` to `false` at the top of `js/interest.js`. The banner keeps working.

## Put it online with cPanel

1. Zip the site: `index.html`, `packages.html`, `memberships.html`, `robots.txt`, `sitemap.xml`, `favicon.ico`, and the `pricing`, `care-plans`, `about`, `contact`, `book`, `css`, `js`, `fonts`, and `assets` folders.
2. In cPanel, open **File Manager** and go to your domain's folder (usually `public_html`).
3. Click **Upload** and pick the zip.
4. Right click the zip, choose **Extract**, and overwrite the old files when asked.
5. Delete the zip, then open your site and check every page.

### The `.htaccess` file

`.htaccess` holds the clean URL redirects plus browser caching and compression rules. Your host may already have its own `.htaccess` in `public_html`, so don't overwrite it blindly:

1. In File Manager, click **Settings** (top right) and turn on **Show Hidden Files**.
2. If `public_html` has no `.htaccess`, upload this one.
3. If it already has one, open it with **Edit** and paste the lines from this repo's `.htaccess` at the top. Keep everything else that's there.

Docs: [cPanel File Manager](https://docs.cpanel.net/cpanel/files/file-manager/)

## Before launch checklist

* Confirm site prices still match Strata
* Submit `sitemap.xml` in Google Search Console
* Set up and verify your Google Business Profile as a service area business
* Add real before and after photos of your work
* Fill in the Care Plan FAQ (billing, canceling, contract) in the commented block in `care-plans/index.html`
* Test the booking widget and every page on your phone

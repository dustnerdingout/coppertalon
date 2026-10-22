# Copper Talon Detailing Co.

**Sharp Eye. Flawless Finish.**

The website for Copper Talon Detailing Co., a mobile auto detailing business serving Killeen, TX. It's a plain HTML, CSS, and JavaScript site. There's nothing to install and no build step.

## Pages

| Page | File | What's on it |
|---|---|---|
| Home | `index.html` | Full width logo banner, headline and booking buttons, services overview, how it works, why Copper Talon |
| Detail Menu | `pricing.html` | Main services, packages (`#packages`), Care Plans banner, add ons, and deposits, matched to Strata |
| Care Plans | `care-plans.html` | Copper Care and Talon Care, how it works, Packages banner. "Inquire About" opens the Contact page with that plan picked |
| About Us | `about.html` | The story and meaning behind the Copper Talon name |
| Book Now | `book.html` | Online booking through the Strata widget |
| Contact | `contact.html` | Strata lead form, phone, email, service area, hours, common questions |

The menu on every page is: Detail Menu, Care Plans, About Us, Contact, Book Now. The logo links to the home page.

### Old pages that moved

| Old page | Now | How |
|---|---|---|
| `packages.html` | `pricing.html#packages` | 301 redirect in `.htaccess`, plus a tiny backup page |
| `memberships.html` | `care-plans.html` | 301 redirect in `.htaccess`, plus a tiny backup page |

The backup pages only matter if the `.htaccess` rules aren't active. They send visitors on, point Google to the new page, and are kept out of search results.

## Folder layout

```
index.html        Home page
pricing.html      Detail Menu: services, packages, add ons, deposits
care-plans.html   Care Plans
about.html        About Us
book.html         Online booking (Strata widget)
contact.html      Strata lead form, contact info, and FAQ
packages.html     Backup redirect to pricing.html#packages
memberships.html  Backup redirect to care-plans.html
.htaccess         301 redirects for the old pages (Apache / cPanel)
css/style.css     All styling (colors, fonts, layout)
js/main.js        Mobile menu and scroll animations
js/interest.js    Package and Care Plan pick banner on the Contact page
sitemap.xml       List of pages for Google
favicon.ico       Browser tab icon
assets/           Logo icon, home banners (900, 1500, 2000 wide), favicons, social share image
```

## Preview it on your computer

1. Open a terminal in this folder.
2. Run `python3 -m http.server 8000`
3. Go to http://localhost:8000 in your browser.

You can also just double click `index.html` to open it.

## Common edits

### Phone number and email
The phone is `(254) 225-1954` and the email is `hello@coppertalondetailing.com`. To change either one, update it in:

* The footer of all six main HTML pages
* The info cards in `contact.html`
* The "Questions first?" line in `book.html`

Tip: in Cursor or VS Code, use Find and Replace across the whole folder to change them all at once. For the phone, also replace the link version, `tel:+12542251954`.

### Prices
Strata CRM is the source of truth for every service, price, and description. When something changes in Strata, update the site to match:

* `pricing.html`: every service card, package card, add ons, and the deposit band
* `care-plans.html`: both Care Plan cards
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

### Package and Care Plan picks

Each "Request This Package" button on `pricing.html` and each "Inquire About" button on `care-plans.html` links to the Contact page with the pick in the link, like `contact.html?interest=package-showroom`. The codes are `package-pet-owner`, `package-deep-clean`, `package-family-hauler`, `package-showroom`, `membership-copper-care`, and `membership-talon-care` (the Care Plan codes kept their original names so old links keep working). Older `?package=showroom` links still work.

`js/interest.js` then:

* Shows a banner above the form, like "You picked: Showroom Package, from $389." or "You picked: Talon Care, from $199/mo."
* Adds the pick to the Strata form link (`?interest=Talon Care`), so it can show up in the lead if Strata supports it.

With no package (or an unknown one) in the link, the Contact page works exactly as before. If the Strata form ever fails to load when something is picked, set `PASS_PICK_TO_STRATA` to `false` at the top of `js/interest.js`. The banner keeps working.

## Put it online with cPanel

1. Zip the site files: `index.html`, `pricing.html`, `care-plans.html`, `about.html`, `contact.html`, `book.html`, `packages.html`, `memberships.html`, `sitemap.xml`, `favicon.ico`, and the `css`, `js`, and `assets` folders.
2. In cPanel, open **File Manager** and go to your domain's folder (usually `public_html`).
3. Click **Upload** and pick the zip.
4. Right click the zip, choose **Extract**, and overwrite the old files when asked.
5. Delete the zip, then open your site and check every page.

### The `.htaccess` file

`.htaccess` holds the 301 redirects. Your host may already have its own `.htaccess` in `public_html`, so don't overwrite it blindly:

1. In File Manager, click **Settings** (top right) and turn on **Show Hidden Files**.
2. If `public_html` has no `.htaccess`, upload this one.
3. If it already has one, open it with **Edit** and paste the lines from this repo's `.htaccess` at the top. Keep everything else that's there.

Docs: [cPanel File Manager](https://docs.cpanel.net/cpanel/files/file-manager/)

## Before launch checklist

* Confirm site prices still match Strata
* Submit `sitemap.xml` in Google Search Console
* Add real before and after photos of your work
* Fill in the Care Plan FAQ (billing, canceling, contract) in the commented block in `care-plans.html`
* Test the booking widget and every page on your phone

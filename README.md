# Copper Talon Detailing Co.

**Sharp Eye. Flawless Finish.**

The website for Copper Talon Detailing Co., a mobile auto detailing business serving Killeen, TX. It's a plain HTML, CSS, and JavaScript site. There's nothing to install and no build step.

## Pages

| Page | File | What's on it |
|---|---|---|
| Home | `index.html` | Hero with logo, services overview, how it works, why Copper Talon, booking button |
| Pricing | `pricing.html` | Main services, packages, add ons, and deposits, matched to Strata |
| About Us | `about.html` | The story and meaning behind the Copper Talon name |
| Book Now | `book.html` | Online booking through the Strata widget |
| Contact | `contact.html` | Strata lead form, contact form, phone, email, service area, hours, common questions |

## Folder layout

```
index.html        Home page
pricing.html      Services and pricing
about.html        About Us
book.html         Online booking (Strata widget)
contact.html      Contact form, contact info, and FAQ
css/style.css     All styling (colors, fonts, layout)
js/main.js        Mobile menu, scroll animations, contact form
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

* The footer of all five HTML pages
* The info cards in `contact.html`
* The "Questions first?" line in `book.html`
* `CONTACT_EMAIL` at the top of `js/main.js` (this is where contact form messages go)

Tip: in Cursor or VS Code, use Find and Replace across the whole folder to change them all at once. For the phone, also replace the link version, `tel:+12542251954`.

### Prices
Strata CRM is the source of truth for every service, price, and description. When something changes in Strata, update the site to match:

* `pricing.html`: every service card, package, add on, and the deposit band
* `index.html`: the "From $X" price on each service card
* `contact.html`: the "How long", "How much", and "Deposit" FAQ answers and the service checkboxes
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

The top of `contact.html` has a Strata lead form (look for `data-strata-embed`). Leads from it go straight into your Strata account. The form's fields are managed in Strata.

## How the contact form works

The form on `contact.html` asks for name, phone, email, and a message, plus optional vehicle, area, services, and date. When a visitor clicks **Send Message**, their email app opens with everything filled in. They just hit send.

Want messages to land in your inbox without the visitor's email app? Hook the form up to a service like [Formspree](https://formspree.io/guides).

## Put it online with cPanel

1. Zip the site files: `index.html`, `pricing.html`, `about.html`, `contact.html`, `book.html`, and the `css`, `js`, and `assets` folders.
2. In cPanel, open **File Manager** and go to your domain's folder (usually `public_html`).
3. Click **Upload** and pick the zip.
4. Right click the zip, choose **Extract**, and overwrite the old files when asked.
5. Delete the zip, then open your site and check every page.

Docs: [cPanel File Manager](https://docs.cpanel.net/cpanel/files/file-manager/)

## Before launch checklist

* Confirm site prices still match Strata
* Add real before and after photos of your work
* Test the booking widget and every page on your phone

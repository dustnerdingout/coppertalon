# Copper Talon Detailing Co.

**Sharp Eye. Flawless Finish.**

The website for Copper Talon Detailing Co., a mobile auto detailing and ceramic coating business serving Killeen, TX. It's a plain HTML, CSS, and JavaScript site. There's nothing to install and no build step.

## Pages

| Page | File | What's on it |
|---|---|---|
| Home | `index.html` | Hero with logo, services overview, how it works, why Copper Talon, booking button |
| Pricing | `pricing.html` | Detail packages, restoration and protection services, add ons, maintenance discount |
| About Us | `about.html` | The story and meaning behind the Copper Talon name |
| Book Now | `book.html` | Online booking through the Urable widget |
| Contact | `contact.html` | Contact form, phone, email, service area, hours, common questions |

## Folder layout

```
index.html        Home page
pricing.html      Services and pricing
about.html        About Us
book.html         Online booking (Urable widget)
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
All prices live in `pricing.html`. Search for the dollar amount (for example `$99`) and change it.

### Hours
Edit the list under "Hours" in `contact.html`.

### Colors
The brand colors are at the top of `css/style.css` under `:root`. Change `--copper` to shift the main accent color everywhere.

## Online booking

Booking runs through Urable. The booking widget is embedded on `book.html` (look for the `<iframe>` with `app.urable.com`). Services, prices, and available times inside the widget are managed in your Urable account, not in this site's files.

Every **Book Now** button on the site links to `book.html`.

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

## How pricing was set

Prices are set at least 30% below the lowest published prices from detailers near Killeen, TX. Local shops change their rates, so recheck competitor pricing every few months.

## Before launch checklist

* Recheck competitor prices and your own costs
* Add real before and after photos of your work
* Test the booking widget and every page on your phone

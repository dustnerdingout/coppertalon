# Copper Talon Detailing Co.

**Sharp Eye. Flawless Finish.**

The website for Copper Talon Detailing Co., an auto detailing business serving Killeen, TX. It's a plain HTML, CSS, and JavaScript site. There's nothing to install and no build step.

## Pages

| Page | File | What's on it |
|---|---|---|
| Home | `index.html` | Hero with logo, services overview, how it works, why Copper Talon, booking button |
| Pricing | `pricing.html` | Detail packages, restoration and protection services, add ons, maintenance discount |
| About Us | `about.html` | The story and meaning behind the Copper Talon name |
| Contact | `contact.html` | Quote request form, phone, email, hours, common questions |

## Folder layout

```
index.html        Home page
pricing.html      Services and pricing
about.html        About Us
contact.html      Contact and quote form
css/style.css     All styling (colors, fonts, layout)
js/main.js        Mobile menu, scroll animations, quote form
assets/           Logo, favicon, social share image
```

## Preview it on your computer

1. Open a terminal in this folder.
2. Run `python3 -m http.server 8000`
3. Go to http://localhost:8000 in your browser.

You can also just double click `index.html` to open it.

## Common edits

### Phone number and email
The placeholders are `(555) 000-0000` and `hello@coppertalondetailing.com`. Swap them in:

* The footer of all four HTML pages
* The info cards in `contact.html`
* `CONTACT_EMAIL` at the top of `js/main.js` (this is where quote requests go)

Tip: in Cursor or VS Code, use Find and Replace across the whole folder to change them all at once.

### Prices
All prices live in `pricing.html`. Search for the dollar amount (for example `$99`) and change it.

### Hours
Edit the list under "Hours" in `contact.html`.

### Colors
The brand colors are at the top of `css/style.css` under `:root`. Change `--copper` to shift the main accent color everywhere.

## How the quote form works

When a visitor clicks **Send Request**, their email app opens with a message already filled in: name, phone, vehicle, services picked, preferred date, and notes. They just hit send.

Want requests to land in an inbox without the visitor's email app? Hook the form up to a service like [Formspree](https://formspree.io/guides) or [Netlify Forms](https://docs.netlify.com/manage/forms/setup/).

## Put it online for free with GitHub Pages

1. In this repo on GitHub, go to **Settings**, then **Pages**.
2. Under "Build and deployment", pick **Deploy from a branch**.
3. Choose `main` and `/ (root)`, then click **Save**.
4. After a minute or two, your live link shows at the top of that page.

To use your own domain, follow GitHub's [custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## How pricing was set

Prices are set at least 30% below the lowest published prices from detailers near Killeen, TX. Local shops change their rates, so recheck competitor pricing every few months.

## Before launch checklist

* Replace the placeholder phone and email
* Confirm business hours
* Recheck competitor prices and your own costs
* Add real before and after photos of your work
* Turn on GitHub Pages and test the site on your phone

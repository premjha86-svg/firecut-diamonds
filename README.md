# Firecut Diamonds & Jewellery — Website

An enquiry-desk website for **Firecut Diamonds & Jewellery, by Bhavesh Jha**.
Natural diamonds, lab-grown diamonds, colour stones, and customised
jewellery — visitors send a requirement, which is emailed nowhere and sold
nowhere: it's forwarded to WhatsApp and logged to a Google Sheet for the
team to follow up personally. There is no cart, no checkout, and no online
payment anywhere on the site.

## Publishing this on GitHub Pages

1. Create a new repository on GitHub (public, so Pages can serve it for
   free) and push everything in this folder to it, e.g.:
   ```bash
   git init
   git add .
   git commit -m "Firecut website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub, go to the repo's **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch",
   branch **main**, folder **/ (root)** — then **Save**.
4. GitHub will give you a URL like
   `https://<your-username>.github.io/<repo-name>/` within a minute or two.
5. Optional: to use your own domain (e.g. `firecutdiamond.in`), add a
   `CNAME` file to the repo root containing just the domain name, and
   point your domain's DNS to GitHub Pages per
   [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

No build step, no dependencies — it's a single static `index.html` plus
an `assets/` folder, so this is all GitHub Pages needs.

## About the shape gallery and certification badges

**Shapes.** The "Every shape" section shows a real diamond photograph for
all 9 shapes. Round, emerald, oval, cushion, and heart are exact-shape
photographs. Pear, princess, radiant, and marquise currently show other
real diamonds from the same photography set rather than a confirmed
exact-shape shot — I couldn't find free-to-use, shape-confirmed stock
photos for those four in the time available. To swap in an exact photo
once you have one (your own product shot is ideal), replace the `src` on
that shape's `<img>` inside `#shapes` in `index.html` — search for
`data-shape="Pear"` etc. to find the right block.

**Certification badges.** GIA's own policy (and the norm for labs like
this) restricts use of their official logo to registered retail partners
via an application process — it isn't something freely reusable, so I
didn't reproduce any lab's actual trademarked logo. Instead each lab gets
a simple designed seal (a circle + the lab's initials) that identifies it
by name without claiming to be their official mark. If Firecut is a
registered partner with any of these labs, you can request their real
logo lockup from the lab's retailer program and drop it in — replace the
`<svg class="lab-seal">` block for that lab with an `<img>` tag instead.

## Before going live, please confirm

- **Certification labs** — the site names GIA, IGI, HRD Antwerp, GSI and
  SGL in the "Certification" section. Confirm this matches the labs your
  business actually uses, and edit the five `.lab-card` blocks in
  `index.html` if not.
- **Google Sheets connection** — `google-apps-script.gs` still needs to be
  deployed once and its Web App URL pasted into `index.html` in place of
  `PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` (see below). Until that's
  done, enquiries still open WhatsApp correctly, but nothing is logged to
  a spreadsheet.
- **Delivery times** — "2-day diamond delivery" and "7-day custom
  jewellery" are carried over from the original brief; confirm they're
  still accurate.

## One-time setup: Google Sheets enquiry log

1. Sign into Google with the account that should own the spreadsheet
   (e.g. `support@firecutdiamond.com`).
2. Create a new Google Sheet.
3. Open **Extensions → Apps Script** and paste in the contents of
   `google-apps-script.gs`.
4. **Deploy → New deployment → Web app.** Execute as **Me**, access
   **Anyone**.
5. Copy the deployed Web App URL.
6. In `index.html`, find `PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` near
   the bottom of the file and replace it with that URL.
7. Commit and push the change.

Every enquiry submitted on the site will then be appended to a "Website
Inquiries" sheet, and the visitor is also taken straight to WhatsApp with
their requirement pre-filled.

## Logo & brand assets

- `assets/firecut-emblem-crop.png` — the diamond-and-flame emblem alone,
  used as the nav icon and favicon.
- `assets/firecut-logo-full.png` — the full lockup (emblem + "Firecut
  Diamonds & Jewellery" wordmark + "By Bhavesh Jha" + tagline), shown in
  a dedicated brand strip beneath the hero.

Both were extracted from the supplied logo-reveal video at its cleanest
frame. If you get vector or higher-resolution originals later, swap these
two files (keep the same filenames) and no HTML changes are needed.

## Media credits

Background videos and diamond photography elsewhere on the site are
hotlinked from Pixabay (`cdn.pixabay.com`) and Pexels
(`images.pexels.com`) — both free, no-attribution-required libraries.
They load live from those services, so an internet connection is needed
to see them; nothing needs to be re-uploaded.

## File structure

```
index.html                — the entire site (HTML + CSS + JS, no build step)
google-apps-script.gs      — paste into Google Apps Script to log enquiries
assets/
  firecut-emblem-crop.png  — logo icon (nav + favicon)
  firecut-logo-full.png    — full logo lockup (brand strip)
  bhavesh-jha.png          — founder portrait
  solitaire-hero.jpg       — hero poster image (shown before video loads)
```

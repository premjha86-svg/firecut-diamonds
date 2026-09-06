# Firecut — Red & White Enquiry-Desk Edition

This redesign makes three things explicit that the earlier versions left
implicit:

1. THIS IS NOT A STORE. There is a red-on-pink strip right under the hero,
   a "No online prices or checkout" badge in the hero itself, a trust
   badge in the badges row, and matching lines in the footer and the
   thank-you popup — all saying plainly that the site takes enquiries
   only. Nothing is priced, sold, or paid for on the page; every
   submission goes to WhatsApp and into your Google Sheet, same as before.

2. CERTIFICATION LABS ARE NAMED. A new "Certification" section lists GIA,
   IGI, HRD Antwerp, GSI and SGL as the labs commonly used for grading
   papers. PLEASE CONFIRM THIS LIST — I don't know which of these your
   business actually uses. Edit the five `<div class="lab-card">` blocks
   in index.html to match reality (add, remove, or relabel labs) before
   this goes live. Misstating certification is a real business/legal risk.

3. REAL DIAMOND PHOTOGRAPHY REPLACES THE SVG SHAPE ICONS. The "shapes"
   section now shows eight real, free-to-use photographs of actual
   diamonds and gemstones (from Pexels — no attribution required),
   instead of line-drawing icons. Two of these are confirmed exact
   matches (round, emerald, heart); the rest are genuine diamond/gem
   macro photography that isn't tied to one specific cut, so rather than
   mislabel a photo with the wrong shape name, the gallery is presented
   as "real stones we've photographed" and the actual shape selector
   (Round/Oval/Emerald/etc.) is a separate row of plain text buttons
   underneath. Swap in your own real product photography here whenever
   you have shape-specific shots — that will make this section fully
   accurate rather than illustrative.

OTHER CHANGES
- Full red-and-white theme (previously wine/gold/ivory) — CSS variables
  --red, --red-deep, --red-bright, --ink, --paper at the top of the
  stylesheet if you want to adjust the exact shades.
- New typefaces: Fraunces (headlines) + Space Grotesk (body/UI),
  replacing Cormorant Garamond + Manrope.
- A rotating circular "seal" badge in the hero (FIRECUT · ENQUIRY ONLY ·
  NO ONLINE CHECKOUT) — a distinctive, certificate-like touch tying the
  brand mark to the enquiry-only message.
- Category videos, journey section, WhatsApp + Google Sheets flow,
  Bhavesh's story section: all unchanged in function from the previous
  version.

ABOUT THE MEDIA
- Videos: hotlinked from Pixabay's CDN (cdn.pixabay.com), free and
  no-attribution-required.
- Photos: hotlinked from Pexels' CDN (images.pexels.com), also free and
  no-attribution-required.
Both need an internet connection to load (they stream from those
services, not from this zip). Swap any URL for your own studio
photography/video whenever you have it — see point 3 above especially.

ONE-TIME SETUP (Google Sheets) — unchanged from before:
1. Sign into Google with support@firecutdiamond.com.
2. Create a Google Sheet.
3. Extensions -> Apps Script.
4. Paste google-apps-script.gs.
5. Deploy it as a Web app, Execute as "Me", access "Anyone".
6. Copy the Web App URL.
7. Open index.html and replace PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE
   with the Web App URL.
8. Re-zip/upload the website.

BEFORE THIS GOES LIVE, PLEASE CONFIRM
- The exact list of certification labs (see point 2).
- Whether "2-day diamond delivery" / "7-day custom jewellery" still
  hold — these are carried over unchanged from the original brief.

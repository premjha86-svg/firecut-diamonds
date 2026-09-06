# Firecut Modern Luxury V4 — Inquiry Edition

This version adds:
- Direct WhatsApp Web connection to +91 99201 69168.
- Website inquiry capture fields: Name, Mobile/WhatsApp, Company Name, Email, Diamond Type, Shape, Carat/Size, Colour & Clarity, Detailed Inquiry.
- Google Sheets receiver integration via Google Apps Script.
- `google-apps-script.gs` is included.

IMPORTANT:
The ChatGPT environment currently does not have permission to connect to the Google Drive/Sheets account, so the Google Sheet cannot be created or wired automatically from here.

One-time setup:
1. Sign into Google with support@firecutdiamond.com.
2. Create a Google Sheet.
3. Extensions -> Apps Script.
4. Paste `google-apps-script.gs`.
5. Deploy it as a Web app, Execute as "Me", access "Anyone".
6. Copy the Web App URL.
7. Open `index.html` and replace:
   PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE
   with the Web App URL.
8. Re-zip/upload the website.

After this, every website inquiry is appended to the "Website Inquiries" sheet, while the user is also taken directly to WhatsApp Web.

Suggested sheet columns:
Timestamp | Name | Mobile / WhatsApp | Company Name | Email | Diamond Type | Shape | Carat / Size | Colour & Clarity | Detailed Inquiry


Submission confirmation:
After an inquiry is submitted, the website displays a premium Thank You confirmation stating: "We will get back to you within 30 minutes with your requirement." WhatsApp Web is opened with the submitted details.

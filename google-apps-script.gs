/**
 * FIRECUT — Google Sheets inquiry receiver
 *
 * 1. Create/open a Google Sheet using the Google account
 *    that owns support@firecutdiamond.com.
 * 2. Extensions -> Apps Script.
 * 3. Paste this entire file.
 * 4. Deploy -> New deployment -> Web app.
 *    Execute as: Me
 *    Who has access: Anyone
 * 5. Copy the Web app URL into APPS_SCRIPT_URL in index.html.
 *
 * The script creates a sheet named "Website Inquiries" automatically.
 */

function doPost(e) {
  const body = e && e.postData && e.postData.contents
    ? JSON.parse(e.postData.contents)
    : {};

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const name = 'Website Inquiries';
  let sheet = ss.getSheetByName(name);

  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow([
      'Timestamp',
      'Name',
      'Mobile / WhatsApp',
      'Company Name',
      'Email',
      'Diamond Type',
      'Shape',
      'Carat / Size',
      'Colour & Clarity',
      'Detailed Inquiry'
    ]);
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([
    new Date(),
    body.name || '',
    body.number || '',
    body.company || '',
    body.email || '',
    body.diamondType || '',
    body.shape || '',
    body.size || '',
    body.colourClarity || '',
    body.inquiry || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ok: true}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput('Firecut inquiry receiver is live.')
    .setMimeType(ContentService.MimeType.TEXT);
}

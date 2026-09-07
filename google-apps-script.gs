/**
 * Firecut Diamonds & Jewellery — Website Lead Collector
 * Google Sheet ID is pre-configured below.
 * Deploy as: Web app → Execute as Me → Who has access: Anyone
 */
const SPREADSHEET_ID = '1Tak8wX2bjyLlFndXTc1Oq2Vw33BYBzL_QC-XhervoNA';
const SHEET_NAME = 'Website Inquiries';

function doPost(e) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sh = ss.getSheetByName(SHEET_NAME);
    if (!sh) sh = ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) {
      sh.appendRow(['Timestamp','Name','Mobile / WhatsApp','Company / Jewellery Store','Email','Diamond Type','Certification','Shape','Carat / Size','Colour / Clarity','Detailed Inquiry','Source']);
      sh.setFrozenRows(1);
    }
    const data = JSON.parse(e.postData.contents || '{}');
    sh.appendRow([
      new Date(), data.name || '', data.mobile || '', data.company || '', data.email || '',
      data.diamondType || '', data.certificate || '', data.shape || '', data.carat || '',
      data.colour || '', data.details || '', data.source || 'Firecut website'
    ]);
    return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err)})).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('Firecut lead collector is live.').setMimeType(ContentService.MimeType.TEXT);
}

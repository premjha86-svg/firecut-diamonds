function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Inquiries') || SpreadsheetApp.getActiveSpreadsheet().insertSheet('Inquiries');
  if (sheet.getLastRow() === 0) sheet.appendRow(['Timestamp','Name','Mobile','Company','Requirement','4Cs','Carat','Colour','Clarity','Cut','Shape','Certificate','Detailed Inquiry','Source']);
  var d = JSON.parse(e.postData.contents || '{}');
  sheet.appendRow([new Date(),d.name||'',d.mobile||'',d.company||'',d.requirement||'',d.fourcs||'',d.carat||'',d.colour||'',d.clarity||'',d.cut||'',d.shape||'',d.certificate||'',d.details||'',d.source||'Website Inquiry']);
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}

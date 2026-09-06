function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = "Website Inquiries";
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow([
      "Timestamp","Name","Mobile / WhatsApp","Company Name","Email",
      "Diamond Type","Shape","Carat / Size","Colour & Clarity","Detailed Inquiry"
    ]);
  }
  const data = JSON.parse(e.postData.contents || "{}");
  sheet.appendRow([
    new Date(),
    data.name || "",
    data.mobile || "",
    data.company || "",
    data.email || "",
    data.diamondType || "",
    data.shape || "",
    data.carat || "",
    data.colourClarity || "",
    data.details || ""
  ]);
  return ContentService
    .createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}

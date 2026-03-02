import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

export const generateCertificate = (userName) => {
  return new Promise((resolve, reject) => {

    // 🔥 Absolute folder path create karo
    const dirPath = path.join(process.cwd(), "certificates");

    // ✅ Agar folder exist nahi karta to create karo
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // ✅ Proper file path
    const filePath = path.join(dirPath, `${userName}-certificate.pdf`);

    const doc = new PDFDocument({
      size: "A4",
      layout: "landscape",
    });

    const stream = fs.createWriteStream(filePath);

    doc.pipe(stream);

    doc.fontSize(40).text("CERTIFICATE OF COMPLETION", {
      align: "center",
    });

    doc.moveDown(2);

    doc.fontSize(25).text("This is awarded to", {
      align: "center",
    });

    doc.moveDown();

    doc.fontSize(35).fillColor("blue").text(userName, {
      align: "center",
    });

    doc.moveDown();

    doc.fillColor("black").fontSize(20).text(
      "For Successfully Completing the Course",
      { align: "center" }
    );

    doc.end();

    // ✅ Finish event stream pe lagao
    stream.on("finish", () => {
      resolve(filePath);
    });

    stream.on("error", (err) => {
      reject(err);
    });
  });
};
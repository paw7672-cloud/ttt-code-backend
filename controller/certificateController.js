import { generateCertificate } from "../utils/generateCertificate.js";
import { sendEmailWithCertificate } from "../utils/sendEmail.js";
import user from "../models/user.js";


// ✅ Download Only
export const downloadCertificate = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name required" });
    }

    const filePath = await generateCertificate(name);

    return res.download(filePath);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Download Error" });
  }
};


// ✅ Send Email Only
export const emailCertificate = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and Email required" });
    }

    const filePath = await generateCertificate(name);

    await sendEmailWithCertificate(email, filePath);

    return res.json({ message: "Certificate sent successfully ✅" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Email Error" });
  }
};

// Send all Email Certificates 
export const sendAllCertificates = async (req, res) => {
  try {
    const users = await user.find({}, "-password");

    for (const user of users) {
      const filePath = await generateCertificate(user.name);
      await sendEmailWithCertificate(user.email, filePath);
    }

    res.json({ message: "All certificates sent successfully ✅" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Send All Email Error" });
  }
};

// Download  all certificate for Email 
export const downloadAllCertificates = async (req, res) => {
  try {
    const users = await user.find({}, "-password");

    const folderPath = path.join(process.cwd(), "certificates");

    for (const user of users) {
      await generateCertificate(user.name);
    }

    const zipPath = path.join(process.cwd(), "all-certificates.zip");
    const output = fs.createWriteStream(zipPath);
    const archive = archiver("zip", { zlib: { level: 9 } });

    archive.pipe(output);
    archive.directory(folderPath, false);
    await archive.finalize();

    output.on("close", () => {
      res.download(zipPath);
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Download All Error" });
  }
};
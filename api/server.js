// Importation des modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

// Charger les variables d'environnement
dotenv.config();

// Création du serveur Express
const app = express();
const PORT = process.env.PORT || 5000;

// Vérification des variables d'environnement
if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
  console.error("❌ Erreur: MAIL_USER et MAIL_PASS doivent être définis dans .env");
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());

// Configuration des chemins pour le déploiement sur Vercel
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir le frontend React (remplace "dist" par ton dossier de build)
app.use(express.static(path.join(__dirname, "dist")));

// Route pour envoyer un email
app.post("/send-email", async (req, res) => {
  const { nom, prenom, email, service, langages, message } = req.body;

  if (!nom || !prenom || !email || !service || !langages || !message) {
    return res.status(400).json({ success: false, error: "Tous les champs sont requis." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`,
      to: "destinataire@example.com",
      subject: `Nouvelle demande de service: ${service}`,
      text: `Nom: ${nom}\nPrénom: ${prenom}\nEmail: ${email}\nService: ${service}\nLangages: ${langages}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email envoyé avec succès !" });

  } catch (error) {
    console.error("❌ Erreur lors de l'envoi d'email:", error);
    res.status(500).json({ success: false, error: "Erreur lors de l'envoi de l'email." });
  }
});

// Gérer les routes React et éviter l'erreur 404 sur Vercel
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});

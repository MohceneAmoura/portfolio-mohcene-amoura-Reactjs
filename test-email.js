import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config(); // Charger les variables d'environnement

// Configuration Nodemailer
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

// Fonction pour envoyer un email de test
async function sendTestEmail() {
    try {
        let info = await transporter.sendMail({
            from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
            to: "destinataire@example.com",  // Remplace par ton adresse de test
            subject: "Test Mailtrap",
            text: "Ceci est un test d'envoi d'email avec Mailtrap et Nodemailer."
        });

        console.log("E-mail envoyé avec succès : ", info.messageId);
    } catch (error) {
        console.error("Erreur lors de l'envoi : ", error.message);
    }
}

sendTestEmail();

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    service: "",
    langages: "",
    message: ""
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    if (Object.values(formData).some(value => value.trim() === "")) {
      setErrorMessage("Veuillez remplir tous les champs.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMessage("Votre demande a été envoyée avec succès !");
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          service: "",
          langages: "",
          message: ""
        });
      } else {
        setErrorMessage(data.error || "Une erreur est survenue lors de l'envoi.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setErrorMessage("Erreur de connexion au serveur. Veuillez réessayer plus tard.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="fade-in">
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Envoi en cours..." : "Envoyer la Demande"}
        </button>
      </form>
    </section>
  );
};

export default Contact;

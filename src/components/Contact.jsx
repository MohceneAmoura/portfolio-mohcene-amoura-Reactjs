import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    service: '',
    langages: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    if (Object.values(formData).some(value => value.trim() === '')) {
      setErrorMessage('Veuillez remplir tous les champs.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMessage('Votre demande a été envoyée avec succès !');
        setFormData({
          nom: '',
          prenom: '',
          email: '',
          service: '',
          langages: '',
          message: ''
        });
      } else {
        setErrorMessage(data.error || 'Une erreur est survenue lors de l\'envoi.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setErrorMessage('Erreur de connexion au serveur. Veuillez réessayer plus tard.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      {successMessage ? (
        <div className="success-message">{successMessage}</div>
      ) : (
        <>
          <h2>Demander un Service</h2>
          <p>Vous avez un projet en tête ? Parlons-en !</p>
          
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          
          <form onSubmit={handleSubmit} className="fade-in">
            <div className="form-group">
              <input 
                type="text" 
                name="nom" 
                placeholder="Votre nom" 
                required 
                value={formData.nom} 
                onChange={handleChange} 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="prenom" 
                placeholder="Votre prénom" 
                required 
                value={formData.prenom} 
                onChange={handleChange} 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Votre email" 
                required 
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>
            <div className="form-group">
              <select name="service" required value={formData.service} onChange={handleChange}>
                <option value="">Choisissez un service</option>
                <option value="site-web">Site Web</option>
                <option value="application-web">Application Web</option>
                <option value="application-mobile">Application Mobile</option>
                <option value="design">Design</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="langages" 
                placeholder="Technologies souhaitées: React, Node.js, etc." 
                required 
                value={formData.langages} 
                onChange={handleChange} 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Décrivez votre projet en détail" 
                required 
                value={formData.message} 
                onChange={handleChange}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`submit-btn ${isLoading ? 'disabled' : ''}`} 
              disabled={isLoading}
            >
              {isLoading ? 'Envoi en cours...' : 'Envoyer la Demande'}
            </button>
          </form>
        </>
      )}
    </section>
  );
};

export default Contact;

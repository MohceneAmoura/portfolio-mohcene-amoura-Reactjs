import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="profile-container">
          <div className="profile-image">
            <img src="/profile-photo.jpg" alt="Mohcene Amoura" />
          </div>
        </div>
        <h1 className="animated-title">Bienvenue sur mon Portfolio</h1>
        <h2 className="subtitle">Mohcene Amoura</h2>
        <p>Je suis un développeur passionné par la création de solutions web modernes.</p>
        <div className="cta-buttons">
          <button onClick={() => navigate('/projects')} className="cta-button primary">
            Voir mes projets
          </button>
          <button onClick={() => navigate('/contact')} className="cta-button secondary">
            Me contacter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

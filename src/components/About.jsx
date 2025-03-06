//about.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleSkillsClick = () => {
    navigate('/skills');
  };

  return (
    <section id="about" className="about-section">
      <h2>À propos de moi</h2>
      <p>Je suis Mohcene Amoura, développeur web et mobile passionné, spécialisé en React.js, Node.js, HTML, CSS et JavaScript. Je maîtrise aussi Python, SQL et NoSQL pour la gestion des bases de données. Toujours en quête de nouveaux défis, j’aime approfondir mes compétences en développement et en intelligence artificielle.</p>
      <button onClick={handleSkillsClick}>Voir mes compétences</button>
    </section>
  );
};

export default About;
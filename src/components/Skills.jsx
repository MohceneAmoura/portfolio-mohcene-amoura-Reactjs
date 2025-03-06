import React from 'react';

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Mes Compétences</h2>
      
      <div className="skills-horizontal">
        <div className="skill-card">
          <h3>Langages</h3>
          <ul>
            <li>Python</li>
            <li>C</li>
            <li>Java</li>
            <li>JavaScript</li>
          </ul>
        </div>
        
        <div className="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
          </ul>
        </div>
        
        <div className="skill-card">
          <h3>Backend</h3>
          <ul>
            <li>Node JS</li>
            <li>Express</li>
          </ul>
        </div>
        
        <div className="skill-card">
          <h3>Mobile</h3>
          <ul>
            <li>Flutter</li>
            <li>React Native</li>
          </ul>
        </div>
        
        <div className="skill-card">
          <h3>Bases de données</h3>
          <ul>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
        </div>
        
        <div className="skill-card">
          <h3>IA & Autres</h3>
          <ul>
            <li>Machine Learning</li>
            <li>Résolution de problèmes</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
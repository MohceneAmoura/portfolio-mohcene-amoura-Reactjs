import React, { useState } from 'react';

const Projects = () => {
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  
  return (
    <section id="projects" className="projects-section">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {/* Projet 1 */}
        <div className="project-card">
          <img src="/Projects/project1.png" alt="Spam Email Detection" />
          <div className="project-content">
            <h3>Spam Email Detection ML</h3>
            <button
              onClick={() => setShowDescription1(!showDescription1)}
              className="description-button"
            >
              {showDescription1 ? 'Masquer la description' : 'Afficher la description'}
            </button>
            {showDescription1 && (
              <p>
                This project implements a spam email detection system using an Improved Fuzzy K-Nearest Neighbors (IFKNN) algorithm. The IFKNN model enhances traditional KNN by introducing fuzzy logic to calculate membership degrees, providing more robust classification in distinguishing spam and non-spam emails.
              </p>
            )}
          </div>
        </div>
        
        {/* Projet 2 */}
        <div className="project-card">
          <img src="/Projects/project2.jpg" alt="Wheat Disease Detection" />
          <div className="project-content">
            <h3>Wheat Disease Detection Using a Deep Learning Model (CNN)</h3>
            <button
              onClick={() => setShowDescription2(!showDescription2)}
              className="description-button"
            >
              {showDescription2 ? 'Masquer la description' : 'Afficher la description'}
            </button>
            {showDescription2 && (
              <p>
                This project focuses on detecting wheat diseases using a deep learning model based on Convolutional Neural Networks (CNN). By analyzing images of wheat crops, the model can identify various diseases, enabling early diagnosis and better crop management. The approach enhances agricultural productivity by providing an automated and efficient disease detection system.
              </p>
            )}
          </div>
        </div>
                {/* Projet 3 */}
        <div className="project-card">
          <img src="/Projects/project3.jpg" alt="E-Commerce Platform" />
          <div className="project-content">
            <h3>E-Commerce Platform - Node.js & MySQL</h3>
            <button
              onClick={() => setShowDescription2(!showDescription2)}
              className="description-button"
            >
              {showDescription2 ? 'Masquer la description' : 'Afficher la description'}
            </button>
            {showDescription2 && (
              <p>
                Développement d'une plateforme e-commerce robuste avec Node.js pour le backend et MySQL comme base de données. Le site permet la gestion des utilisateurs, des commandes, des paiements et des stocks en temps réel. Il inclut une interface intuitive et réactive pour offrir une expérience utilisateur fluide. Sécurisation des transactions et optimisation des performances pour garantir rapidité et fiabilité.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import './Services.css';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <section id="services" className="services-section section">
      {/* Back Button */}
      <div className="back-button" onClick={handleClose}>
        <div className="inner">
          <label>Close</label>
        </div>
      </div>

      {/* Title Section */}
      <div className="container">
        <div className="title-section">
          <h2 className="animate text-over-block">My Projects</h2>
          
          <p className="subtitle">Details of the projects I have worked on.</p>
        </div>

        {/* Project Details */}
        <h4 className="project-title">Portfolio Project</h4>
        <p className="project-text">
        This is a responsive and modern portfolio website built with React. It features a dynamic landing page, animated transitions, and a clean layout. The site showcases my skills, resume, and project work with an engaging user interface. The design emphasizes smooth navigation, fully responsive components, and minimal aesthetics, making it both functional and visually appealing.
        </p>

        <h4 className="project-title">College ERP Project</h4>
        <p className="project-text">
        A comprehensive College ERP (Enterprise Resource Planning) system designed to manage core academic and administrative functions. This project includes modules for student registration, attendance tracking, exam results, staff management, and internal communication. Built using modern web technologies, it streamlines operations, improves data accessibility, and ensures smooth coordination across departments. The system is secure, user-friendly, and tailored for educational institutions.
        </p>
      </div>
    </section>
  );
};

export default Services;

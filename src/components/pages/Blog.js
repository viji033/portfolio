import React from 'react';
import './Blog.css';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  

  return (
    <section className="certificates-section section">
      <div className="back-button" onClick={handleClose}>
        <div className="inner">
          <label>Close</label>
        </div>
      </div>

      <div className="container">
        <div className="section-header text-center">
          <h2 className="animate text-over-block">Certificates</h2>
          <h3 className="sub-heading">Full Stack Developer</h3>
          <div className="divider-draft center"></div>
          <p>
          A Full Stack Developer is a versatile developer capable of working on both the front-end (client side) and back-end (server side) of web applications. This role requires proficiency in a variety of programming languages, frameworks, and databases. The full stack developer is responsible for the entire web development process, from design and user interface development to server-side logic and database management.
            
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default Blog;

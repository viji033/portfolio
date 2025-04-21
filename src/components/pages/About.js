import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import profileImg from './h2r.png';

function About() {
  const navigate = useNavigate();

  const funFacts = [
    { icon: "fas fa-paint-brush", title: "Creative", description: "Exploring creative solutions through design and code." },
    { icon: "fas fa-trophy", title: "Winner", description: "Awarded for excellence in web development." },
    { icon: "fas fa-brain", title: "Smart", description: "Strong problem-solving and logical thinking." },
    { icon: "fas fa-dumbbell", title: "Powerful", description: "Pushing limits and staying disciplined." },
    { icon: "fas fa-handshake", title: "Helper", description: "Helping others grow in the tech community." },
    { icon: "fas fa-book", title: "Intelligent", description: "Avid learner passionate about tech and design." },
    { icon: "fas fa-gamepad", title: "Gamer", description: "Gaming to relax and sharpen strategy skills." },
    { icon: "fas fa-running", title: "Healthy", description: "Prioritizing fitness and mental wellness." }
  ];

  const testimonials = [
    { text: "Working with John was an amazing experience.", author: "Client 1" },
    { text: "John's work ethic is unmatched.", author: "Client 2" },
    { text: "Highly recommend John for any frontend project.", author: "Client 3" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="about-section">

      {/* Back Button */}
      <div className="back-button" onClick={handleClose}>
        <div className="inner">
          <label>Close</label>
        </div>
      </div>

      {/* Basic Info */}
      <section className="basic-info fade-in">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            
          </div>

          <div className="horizontal-info">
            <div className="profile-image">
              <img src={profileImg} alt="Profile of John Doe" className="about-img" loading="lazy" />
            </div>

            <div className="info-content">
              <h3 className="name">vijayakumar</h3>
              <p className="role">Fullstack Developer</p>
              <p className="description">
              Full Stack Developer skilled in building responsive frontends and robust backends, turning ideas into seamless digital experiences.
              </p>
              <ul className="info-list">
                <li><strong>Age:</strong> 23</li>
                <li><strong>Hometown:</strong> India</li>
              </ul>
              <div className="buttons">
                <button className="btn btn-hire">Hire Me</button>
                <button className="btn btn-download">Download Resume</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="funfacts-block fade-in">
        <div className="container">
          <div className="section-header">
            <h2>Fun Facts</h2>
            
          </div>

          <div className="funfacts-grid">
            {funFacts.map((fact, index) => (
              <div className="funfact-item" key={index}>
                <div className="diamond">
                  <i className={`logo ${fact.icon}`}></i>
                </div>
                <h4>{fact.title}</h4>
                <p>{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;

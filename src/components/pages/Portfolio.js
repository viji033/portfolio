import React from 'react';
import './Portfolio.css';
import { useNavigate } from 'react-router-dom';

const Skills = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  const skills = [
    { name: 'HTML', icon: '/img/icons/html.svg' },
    { name: 'CSS', icon: '/img/icons/css.svg' },
    { name: 'React', icon: '/img/icons/react.svg' },
    { name: 'JavaScript', icon: '/img/icons/javascript.svg' },
    { name: 'Node.js', icon: '/img/icons/nodejs.svg' },
    { name: 'MongoDB', icon: '/img/icons/mongodb.svg' },
  ];

  return (
    <section className='portfolio-section section'>
      <div className="back-button" onClick={handleClose}>
        <div className="inner">
          <label>Close</label>
        </div>
      </div>

      <div className='portfolio-block section-block'>
        <div className='container'>
          <div className='section-header text-center'>
            <h2 className='animate text-over-block'>Skills</h2>
            
            {/* <p>Technologies I work with:</p> */}
          </div>

          <div className="skills-icons">
            {skills.map((skill, index) => (
              <div className="skill-icon" key={index}>
                <img src={skill.icon} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

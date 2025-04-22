import React from 'react';
import './Portfolio.css';
import { useNavigate } from 'react-router-dom';
import htmlIcon from './img/html.svg';
import cssIcon from './img/css.svg';
import reactIcon from './img/react.svg';
import jsIcon from './img/javascript.svg';
import nodeIcon from './img/nodejs.svg';
import mongoIcon from './img/mongodb.svg';

const Skills = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  const skills = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'React', icon: reactIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'Node.js', icon: nodeIcon },
    { name: 'MongoDB', icon: mongoIcon },
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

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Resume.css';

const educationData = [
  { year: '2019-2023', degree: 'Bachelors Degree', institution: '@vv college of engineering tisaiyanvilai', description: 'Specialized in Computer Science and IT.' },
  { year: '2018-2019', degree: 'HSC', institution: '@Govt higher secondary school kombankulam', description: 'Focused on Science and Mathematics.' },
  { year: '2016-2017', degree: 'SSLC', institution: '@Govt higher secondary school kombankulam', description: '' },
];

const experienceData = [
  { year: '2024-2025', role: 'Web developer', company: '@Learners IT World', description: 'Designed responsive websites and templates.' },
  
  
];

const Resume = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsVisible(false);
    navigate('/');
  };

  return (
    <>
      {isVisible && (
        <section id="resume" className="resume-section section">
          {/* Back Button */}
          <div className="back-button" onClick={handleClose}>
            <div className="inner">
              <label>Close</label>
            </div>
          </div>

          <div className="container">
            {/* Education Header - Aligned with timeline center */}
            <div className="row">
              <div className="col-12">
                <div className="section-header-wrapper">
                  <div className="section-header">
                    <h2 className="section-title">Education</h2>
                    {/* <div className="divider"></div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="timeline-block">
              <div className="container">
                <ul className="timeline">
                  {educationData.map((edu, i) => (
                    <li key={`edu-${i}`} className={i % 2 === 0 ? '' : 'inverse'}>
                      <div className="timeline-desc">
                        <h4>{edu.year}</h4>
                      </div>
                      <div className="timeline-content">
                        <h4>{edu.degree}</h4>
                        <span>{edu.institution}</span>
                        <p>{edu.description}</p>
                      </div>
                    </li>
                  ))}

                  <li className="timeline-header">
                    <h4>Experience</h4>
                  </li>
                  {experienceData.map((exp, i) => (
                    <li key={`exp-${i}`} className={i % 2 === 0 ? '' : 'inverse'}>
                      <div className="timeline-desc">
                        <h4>{exp.year}</h4>
                      </div>
                      <div className="timeline-content">
                        <h4>{exp.role}</h4>
                        <span>{exp.company}</span>
                        <p>{exp.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Resume;
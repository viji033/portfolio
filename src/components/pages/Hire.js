import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPen,
  faPaintBrush,
  faCogs,
  faGamepad,
  faChalkboardTeacher,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import "./Hire.css";

const Hire = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  // Function to handle the close button, which hides the section and navigates back
  const handleClose = () => {
    setIsVisible(false);
    navigate("/"); // Navigate to home page or any other page
  };

  return (
    <>
      {isVisible && (
        <div className="container">
          {/* Back Button */}
          <div className="back-button" onClick={handleClose}>
            <div className="inner">
              <label>Close</label>
            </div>
          </div>

          {/* Section: Hobbies */}
          <section className="section">
            <h1>Hobbies</h1>
            <div className="hobbies-container">
              {/* Open Source */}
              <div className="hobby-card">
                <FontAwesomeIcon icon={faCode} className="hobby-icon" />
                <div>
                  <h3>Open Source Contribution</h3>
                  <p>Shows collaboration, initiative, coding experience, and passion.</p>
                </div>
              </div>

              {/* Tech Blogging */}
              <div className="hobby-card">
                <FontAwesomeIcon icon={faPen} className="hobby-icon" />
                <div>
                  <h3>Tech Blogging / Writing Tutorials</h3>
                  <p>Demonstrates communication skills and expertise.</p>
                </div>
              </div>

              {/* UI/UX Design */}
              <div className="hobby-card">
                <FontAwesomeIcon icon={faPaintBrush} className="hobby-icon" />
                <div>
                  <h3>UI/UX Design Exploration</h3>
                  <p>Highlights attention to detail, user empathy, and creativity.</p>
                </div>
              </div>

              {/* Freelance Work */}
              <div className="hobby-card">
                <FontAwesomeIcon icon={faCogs} className="hobby-icon" />
                <div>
                  <h3>Building Side Projects / Freelance Work</h3>
                  <p>Proves self-motivation and practical application of skills.</p>
                </div>
              </div>

              {/* Hackathons */}
              <div className="hobby-card">
                <FontAwesomeIcon icon={faChalkboardTeacher} className="hobby-icon" />
                <div>
                  <h3>Participating in Hackathons or Coding Competitions</h3>
                  <p>Indicates problem-solving, teamwork, and working under pressure.</p>
                </div>
              </div>

              {/* Frameworks */}
              <div className="hobby-card">
                <FontAwesomeIcon icon={faCogs} className="hobby-icon" />
                <div>
                  <h3>Learning New Frameworks or Tools</h3>
                  <p>Shows adaptability and a growth mindset.</p>
                </div>
              </div>

              {/* Meetups */}
              <div className="hobby-card">
                <FontAwesomeIcon icon={faUsers} className="hobby-icon" />
                <div>
                  <h3>Attending Tech Meetups or Webinars</h3>
                  <p>Reflects networking and a proactive approach to staying updated.</p>
                </div>
              </div>

              {/* Graphic Design */}
              <div className="hobby-card">
                <FontAwesomeIcon icon={faPaintBrush} className="hobby-icon" />
                <div>
                  <h3>Graphic Design or Digital Art</h3>
                  <p>Useful for front-end development—shows aesthetic sense and creativity.</p>
                </div>
              </div>

              {/* Gaming */}
              <div className="hobby-card">
                <FontAwesomeIcon icon={faGamepad} className="hobby-icon" />
                <div>
                  <h3>Gaming (Strategic or Logic-based)</h3>
                  <p>Can subtly show analytical thinking and persistence—only if phrased well.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Hire;

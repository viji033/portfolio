import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { createPortal } from 'react-dom';
import SVG from '../Svg';

const Header = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isTransitioning) {
      document.body.classList.add('transitioning');
    } else {
      document.body.classList.remove('transitioning');
    }

    return () => {
      document.body.classList.remove('transitioning');
    };
  }, [isTransitioning]);

  const handleNavigation = (e, target) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'auto' });
    setIsTransitioning(true);

    setTimeout(() => {
      navigate(target);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 2500);
  };

  const renderTransition = () => (
    <div className="transition-container">
      <div className="diagonal-wipe"></div>
      <div className="expanding-diamond"></div>
    </div>
  );

  const navItems = [
    { path: '/about', label: 'About' },
    { path: '/resume', label: 'Education' },
    { path: '/services', label: 'Projects' },
    { path: '/portfolio', label: 'Skills' },
    { path: '/blog', label: 'Certificates' },
    { path: '/hire', label: 'Hobbies' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {isTransitioning && createPortal(renderTransition(), document.body)}

      <section className="front-section">
        
        <div className="diamond-wrapper">
          <SVG className="profile-img" hoveredNav={hoveredNav} />
        </div>

        {/* nav-links moved outside of diamond-wrapper */}
        <nav className="nav-links" role="navigation" aria-label="Main">
          <ul className="list-unstyled">
            {navItems.map(({ path, label }) => (
              <li key={label}>
                <a
                  href={path}
                  onClick={(e) => handleNavigation(e, path)}
                  onMouseEnter={() => setHoveredNav(label)}
                  onMouseLeave={() => setHoveredNav(null)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="front-heading">
          <h2 className="fw-bold">Vijayakumar</h2>
        </div>
      </section>
    </>
  );
};

export default Header;

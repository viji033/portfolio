import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { createPortal } from 'react-dom';
import SVG from '../Svg';

const Header = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const navigate = useNavigate();

  // Handle scroll lock during transition
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

    // Scroll to top to center transition
    window.scrollTo({ top: 0, behavior: 'auto' }); // fixed 'instant' to 'auto'

    // Start transition animation
    setIsTransitioning(true);

    // Navigate after animation delay
    setTimeout(() => {
      navigate(target);

      // Reset transition state
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 2500);
  };

  // Render the overlay transition effect
  const renderTransition = () => (
    <div className="transition-container">
      <div className="diagonal-wipe"></div>
      <div className="expanding-diamond"></div>
    </div>
  );

  // List of nav items
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
      {/* Show transition overlay */}
      {isTransitioning && createPortal(renderTransition(), document.body)}

      {/* Main Diamond Layout */}
      <section className="front-section d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="diamond-wrapper">
          <SVG className="profile-img" hoveredNav={hoveredNav} />
        </div>

        <div className="front-heading">
          <h2 className="fw-bold">Vijayakumar</h2>
        </div>

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
      </section>
    </>
  );
};

export default Header;

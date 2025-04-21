import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';  // Import Instagram, Facebook, GitHub

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <h4>vijayakumar</h4>
        <ul className='footer-social'>
          <li>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

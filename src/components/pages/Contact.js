import React, { useState } from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleClose = () => {
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please fill out this field.';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please fill out this field.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please fill out this field.';
    }
    
    if (!formData.website.trim()) {
      newErrors.website = 'Please fill out this field.';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please fill out this field.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Form submission logic would go here
      console.log('Form submitted:', formData);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: ''
      });
    }
  };

  return (
    <section id='contact' className='contact-section section'>
      {/* Back Button - Keeping original class and structure */}
      <div className="back-button" onClick={handleClose}>
        <div className="inner">
          <label>Close</label>
        </div>
      </div>

      <div className='contact-modal-container'>
        <div className="contact-modal-content">
          <div className="contact-header">
            <h3>Contact</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "error" : ""}
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "error" : ""}
                />
                {errors.phone && <div className="error-message">{errors.phone}</div>}
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="website"
                  placeholder="Website"
                  value={formData.website}
                  onChange={handleChange}
                  className={errors.website ? "error" : ""}
                />
                {errors.website && <div className="error-message">{errors.website}</div>}
              </div>
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "error" : ""}
              ></textarea>
              {errors.message && <div className="error-message">{errors.message}</div>}
            </div>
            
            <div className="form-group button-container">
              <button type="submit" className="send-button">Send Message</button>
            </div>
          </form>
        </div>

        <footer className="contact-footer">
          <p></p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
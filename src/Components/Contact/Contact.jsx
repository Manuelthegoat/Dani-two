import React from 'react';
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Contact.css'; // Assuming you have a CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Drop a <span className="highlight">Message</span></h1>
      <p className="contact-subtitle">Get in touch if you would like to work together.</p>
      
      <div className="social-links">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="social-icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="social-icon" />
        </a>
      </div>

      <form className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone/Whatsapp</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="project-type">Project Type</label>
            <select id="project-type" name="project-type">
              <option value="">Select an option</option>
              <option value="illustration">Illustration</option>
              <option value="digital-art">Digital Art</option>
              <option value="cover-art">Cover Art</option>
              <option value="logo-design">Logo Design</option>
              <option value="merch-design">Merch Design</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Tell me about your Project</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
import React from 'react';
import {
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { FiUser, FiMail, FiPhone, FiTag, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-head">
        <h1 className="contact-title">
          Drop a <span className="highlight">Message</span>
        </h1>
        <p className="contact-subtitle">
          Get in touch if you would like to work together.
        </p>
      </div>

      <div className="social-links">
        <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a aria-label="TikTok" href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="social-icon" />
        </a>
        <a aria-label="Twitter / X" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
        <a aria-label="YouTube" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="social-icon" />
        </a>
      </div>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        {/* Top row */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <div className="input-wrap">
              <FiUser className="input-icon" />
              <input placeholder="Your full name" type="text" id="name" name="name" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrap">
              <FiMail className="input-icon" />
              <input placeholder="you@email.com" type="email" id="email" name="email" required />
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone/Whatsapp</label>
            <div className="input-wrap">
              <FiPhone className="input-icon" />
              <input placeholder="+234..." type="tel" id="phone" name="phone" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="project-type">Project Type</label>
            <div className="input-wrap">
              <FiTag className="input-icon" />
              <select id="project-type" name="project-type" defaultValue="">
                <option value="" disabled>Select an option</option>
                <option value="illustration">Illustration</option>
                <option value="digital-art">Digital Art</option>
                <option value="cover-art">Cover Art</option>
                <option value="logo-design">Logo Design</option>
                <option value="merch-design">Merch Design</option>
              </select>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">Tell me about your Project</label>
          <div className="input-wrap textarea-wrap">
            <textarea
              placeholder="What are you building? Style, references, timeline, and budget help a lot."
              id="message"
              name="message"
              rows="6"
              required
            ></textarea>
          </div>
        </div>

        {/* Tiny helper / privacy line */}
        <p className="form-helper">
          I’ll get back to you within 24–48 hours. No spam—ever.
        </p>

        <button type="submit" className="submit-btn">
          <FiSend className="btn-icon" />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

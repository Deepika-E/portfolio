// src/Footer.js

import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Reach me through deepikaeswaranskpm@gmail.com. All Rights Reserved.</p>
        <p>Follow me on:</p>
        <div className="social-links">
          <a href ="https://www.linkedin.com/in/deepika-eswaran-4843b3280" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Deepika-E" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
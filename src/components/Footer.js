// src/Footer.js

import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Reach me through gowsika1508@gmail.com. All Rights Reserved.</p>
        <p>Follow me on:</p>
        <div className="social-links">
          <a href ="https://www.linkedin.com/in/gowsika-p-k-bb6056276?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bh50Nk%2FQ%2FQl2%2Bn9Sar5ey1Q%3D%3D" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Gowsika23" target="_blank" rel="noopener noreferrer">
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
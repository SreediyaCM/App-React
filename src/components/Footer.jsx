import React from "react";
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-logo">
          <h2>Nexcent</h2>
          <p>Copyright © 2020 Landify UI Kit.</p>
          <p>All rights reserved</p>
        </div>

        {/* Company Links */}
        <div className="footer-links">
          <h3>Company</h3>
          <a href="/">About us</a>
          <a href="/">Blog</a>
          <a href="/">Contact us</a>
          <a href="/">Pricing</a>
          <a href="/">Testimonials</a>
        </div>

        {/* Support Links */}
        <div className="footer-links">
          <h3>Support</h3>
          <a href="/">Help center</a>
          <a href="/">Terms of service</a>
          <a href="/">Legal</a>
          <a href="/">Privacy policy</a>
          <a href="/">Status</a>
        </div>

        {/* Subscribe */}
        <div className="footer-input">
          <h3>Stay up to date</h3>
          <input type="email" placeholder="Your email address" />
        </div>

      </div>
    </footer>
  );
}

export default Footer;
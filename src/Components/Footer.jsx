import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icon">
        Belén Guillamondegui
      </div>
      <div className="footer-social">
        <a href="https://www.facebook.com"><FaFacebook /></a>
        <a href="https://www.twitter.com"><FaTwitter /></a>
        <a href="https://www.instagram.com"><FaInstagram /></a>
        <a href="https://www.linkedin.com"><FaLinkedin /></a>
      </div>
    </footer>
  );
};

export default Footer;
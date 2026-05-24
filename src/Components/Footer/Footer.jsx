import React from 'react'

import {
  FaLinkedin,
  FaGithub,
  FaFacebook
} from 'react-icons/fa'

import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">

      {/* Logo */}
      <h2>Muhammad Awais Bhatti</h2>

      {/* Navigation */}
      <div className="footer-links">

        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>

      </div>

      {/* Social Icons */}
      <div className="footer-socials">

        <a
          href="https://www.linkedin.com/in/muhammadawaisbhatti/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.github.com/awaisbhatti267"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.facebook.com/muhammad.awais.bhatti"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>

      </div>

      {/* Copyright */}
      <span>
        © 2025 Muhammad Awais Bhatti.
        All Rights Reserved.
      </span>

    </footer>
  )
}

export default Footer
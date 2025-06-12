import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./F.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
     
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-left">
          <p>© {new Date().getFullYear()} Akash AK. All rights reserved.</p>
          
        </div>

        <div className="footer-center">
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Subscribe to newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              required
              disabled={submitted}
            />
            <button type="submit" disabled={submitted}>
              {submitted ? "Subscribed" : "Subscribe"}
            </button>
          </form>
        </div>

        <div className="footer-right">
          <a
            href="mailto:akeditzefxak@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/akashak0823"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/akash-ak-6b4704251"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

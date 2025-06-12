import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link as ScrollLink } from 'react-scroll';
import './Mobilenav.css';
import ContactModal from '../ContactModal'; // Ensure the path is correct

const Mobilenav = ({ isOpen, toggleMenu }) => {
  const menuRef = useRef();
  const menuItemsRef = useRef([]);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out',
        pointerEvents: 'auto'
      });

      gsap.fromTo(
        menuItemsRef.current,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.2,
          stagger: 0.1,
          ease: 'power2.out'
        }
      );
    } else {
      gsap.to(menuRef.current, {
        x: '-100%',
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.3,
        ease: 'power3.in'
      });
    }
  }, [isOpen]);

  const addToRefs = (el) => {
    if (el && !menuItemsRef.current.includes(el)) {
      menuItemsRef.current.push(el);
    }
  };

  return (
    <div
      ref={menuRef}
      className="mobile-menu"
      onClick={toggleMenu}
    >
      <ContactModal isOpen={showModal} onClose={toggleModal} />
      <div
        className="mobile-menu-container"
        onClick={(e) => e.stopPropagation()}
      >
        <img className="logo" src="./Assets/Akash logo.png" alt="Logo" />
        <ul>
          {['home', 'skills', 'projects', 'experience', 'contact'].map((text, index) => (
            <li key={index}>
              <ScrollLink
                className="menu-item"
                to={text}
                smooth={true}
                duration={600}
                offset={-70}
                onClick={toggleMenu}
                ref={addToRefs}
              >
                {text.charAt(0).toUpperCase() + text.slice(1)}
              </ScrollLink>
            </li>
          ))}
          <button
            className="contact-btn"
            onClick={() => {
              toggleModal(); // open modal
            }}
            ref={addToRefs}
          >
            Hire me
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Mobilenav;

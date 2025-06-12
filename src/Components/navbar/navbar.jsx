import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import './navbar.css';
import Mobilenav from './Mobilenav/Mobilenav';
import ContactModal from './ContactModal'; // Update path if needed

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <Mobilenav isOpen={openMenu} toggleMenu={toggleMenu} />
      <ContactModal isOpen={showModal} onClose={toggleModal} />
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <a href='/'><img className='logo' src="./Assets/Akash logo.png" alt='Logo' /></a>
          <ul>
            {['home', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <li key={item}>
                <ScrollLink
                  className='menu-item'
                  to={item}
                  smooth={true}
                  duration={600}
                  offset={-70}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </ScrollLink>
              </li>
            ))}
            <button className='contact-btn' onClick={toggleModal}>Hire me</button>
          </ul>
          <button className='menu-btn' onClick={toggleMenu}>
            {openMenu ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

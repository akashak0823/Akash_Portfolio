import React from 'react';
import "./Contact.css";
import ContactCard from "./ContactCard/ContactCard";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <section className='contact-container' id='Contact'>
      <h5>Contact Me</h5>

      <div className='contact-content'>
        <div className='contact-left'>
          <ContactCard 
            iconUrl="./assets/mail (1).png"
            text="Akash"
            link="mailto:akeditzefxak@gmail.com"
          />
          <ContactCard
            iconUrl="./assets/github-logo.png"
            text="Akashak0823"
            link="https://github.com/akashak0823"
          />
          <ContactCard
            iconUrl="./assets/linkedin.png"
            text="Akash AK"
            link="https://www.linkedin.com/in/akash-ak-6b4704251"
          />
        </div>
        <div className='contact-right'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;

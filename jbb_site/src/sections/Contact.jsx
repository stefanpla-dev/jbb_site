import React from 'react'
import ContactCarousel from '../components/ContactCarousel';
import '../styles/Section.css';

function Contact() {
  return (
    <section className="section contact">
      <div className="contact-content">
        <div className="contact-info">
          <p>jared.brayton.bollenbacher@gmail.com</p>
          <p>brayton.cgmc.com</p>
          <a href="https://www.cgmc.com/" target="_blank" rel="noopener noreferrer">
            <p style={{ margin: 0}}>
              Columbus Gay Men's Chorus
            </p>
          </a>
        </div>
        <div className="contact-carousel-wrapper">
          <ContactCarousel />
        </div>
      </div>
    </section>
  )
}

export default Contact
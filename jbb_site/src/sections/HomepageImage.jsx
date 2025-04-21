import React from 'react'
import './Section.css';
import image from '../assets/landing-page-image.jpg';
import signatureImage from '../assets/brayton-signature.jpg';

function HomepageImage() {
  return (
    <section className="section homepage-image">
        <img src={signatureImage} alt="signature" className="signature-img" />
        <img src ={image} alt="landing-page-image" className="landing-page-img"></img>
    </section>
  )
}

export default HomepageImage
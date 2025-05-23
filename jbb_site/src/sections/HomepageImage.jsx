import React from 'react'
import 'src/styles/Section.css';
import image from 'src/assets/landing-page-image.jpg';
import signatureImage from 'src/assets/aqua.png';

function HomepageImage() {
  return (
    <section className="section homepage-image">
        <img src={signatureImage} alt="signature" className="signature-img" />
        <img src ={image} alt="landing-page-image" className="landing-page-img"></img>

        <div className="homepage-buttons">
          <a href="#about" className="jump-link">About</a>
          <a href="#resume" className="jump-link">Resume</a>
          <a href="#videos" className="jump-link">Videos</a>
          <a href="#contact" className="jump-link">Contact</a>
        </div>
    </section>
  )
}

export default HomepageImage
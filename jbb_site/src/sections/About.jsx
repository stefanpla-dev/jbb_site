import React, { useState } from 'react'
import '../styles/Section.css';
import ImageCarousel from '../components/ImageCarousel';
import resumePDF from '../assets/resume.pdf';

function About() {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
  }

  return (
    <section className={`about-section ${isExpanded ? 'expanded' : ''}`}>
      <div className="about-content">
        <ImageCarousel />
        <div className="about-text">
          <div className={`text-wrapper ${isExpanded ? 'expanded' : ''}`}>
            <h2>Jared Brayton Bollenbacher, MV, MWS, LICSW (he/him)</h2>
            <p>
              After leaving his dairy farm upbringing in his home state of Indiana, Brayton received a Bachelor of Music in Vocal Performance from The Ohio State University in 2006 and a Bachelor of Arts in sexualities studies in 2007, completing a thesis on How Gay Male Bias Influences the Gender Performance of Drag Queens in and out of Drag.
            </p>
            <p className="extra-text">
              After spending six amazing years in Columbus, Brayton completed his Master of Social Work at the University of Washington in Seattle in 2010, and received his Licensed Independent Clinical Social Work credentials in 2014. After graduating in 2010, Brayton spent six years as the artistic director of Diverse Harmony, the nation’s first queer straight alliance youth chorus, and Diverse Harmony’s small a cappella ensemble Spectrum. Brayton left Seattle in 2017 to become the artistic director of Reveille Men’s Chorus and Desert Voices Chorus in Tucson, AZ. Brayton completed his Master of Choral Conducting in 2020 from the University of Arizona. In 2022, Brayton spent six months as  interim with NYCGMC in order to get the organization back on their feet during a difficult time.Brayton is very focused on community choral organizations. In 2019 he served on the board of the Arizona ACDA and is currently on the board for GALA Choruses and serves as the committee  chair for the Education and Networking committee. Concurrently, Brayton has been a community lecturer at The Ohio State University since 2023 and is thankful to flex his Social Work skills in teaching the future MSWs of the world. Brayton is honored and thankful to be in Columbus with CGMC as their artistic director. Being able to lead the innovative, resilient gem of GALA Choruses in the heart of the Midwest is a dream come true. 
            </p>
            <div className="resume-download">
              <a href={resumePDF} download="resume.pdf" target="_blank" rel="noopener noreferrer">
                Click here to download my full resume.
              </a>
            </div>
          </div>
            <button onClick={toggleExpanded} className="toggle-btn">
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
        </div>
      </div>
    </section>
  )
}

export default About
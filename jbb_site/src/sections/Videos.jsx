import React from 'react'
import VideoCarousel from '../components/VideoCarousel';
import '../styles/Section.css';

function Videos() {
  return (
    <section className="section videos" id="videos">
        <VideoCarousel />
    </section>
  )
}

export default Videos
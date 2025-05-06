import React from 'react'
import VideoCarousel from '../components/VideoCarousel';
import '../styles/Section.css';

function Videos() {
  return (
    <section className="section videos">
        <h2>Conducting Videos</h2>
        <VideoCarousel />
    </section>
  )
}

export default Videos
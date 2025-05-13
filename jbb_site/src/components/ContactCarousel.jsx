import React, { useState, useEffect } from 'react'
import img1 from '../assets/contact-1.jpg';
import img2 from '../assets/contact-2.jpg';
import img3 from '../assets/contact-3.jpg';
import img4 from '../assets/contact-4.jpg';
import img5 from '../assets/contact-5.jpg';
import img6 from '../assets/contact-6.jpg';
import img7 from '../assets/contact-7.jpg';
import img8 from '../assets/contact-8.jpg';
import img9 from '../assets/contact-9.jpg';
import '../styles/ContactCarousel.css';

const images = [
    {src: img1, title: "BANNED - Columbus Gay Men's Chorus"},
    {src: img2, title: "Walt's Vault - Columbus Gay Men's Chorus"}, 
    {src: img3, title: "Tales of Our Age - Columbus Gay Men's Chorus"}, 
    {src: img4, title: "Beaus and Belles - Columbus Gay Men's Chorus"},
    {src: img5, title: "Myths, Legends, and FairyTales - Columbus Gay Men's Chorus: VOX"},
    {src: img6, title: "Diverse Harmony: Spectrum"}, 
    {src: img7, title: "Diverse Harmony"},
    {src: img8, title: "Masked - Columbus Gay Men's Chorus: VOX"},
    {src: img9, title: "Reveille Men's Chorus"}
]

function ContactCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect (() => {
        const interval = setInterval (() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length -1 ? 0 : prevIndex + 1
        );
        }, 8000);    
        return () => clearInterval(interval);
    }, []);

  return (
    <div className ="contact-image-carousel">
        <p className="image-title">{images[currentIndex].title}</p>
        <img src={images[currentIndex].src} className="contact-carousel-image" />
    </div>
  );
}

export default ContactCarousel
import React, { useState, useEffect } from 'react';
import img2 from '../assets/brayton-2.jpg';
import img3 from '../assets/brayton-4.jpg';
import img4 from '../assets/brayton-5.jpg';
import img5 from '../assets/brayton-6.jpg';
import img6 from '../assets/brayton-7.jpg';
import img7 from '../assets/brayton-8.jpg';
import '../styles/ImageCarousel.css';

const images = [img2, img3, img4, img5, img6, img7];


function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect (() => {
        const interval = setInterval (() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 8000);    
        return () => clearInterval(interval);
    }, []);

  return (
    <div className ="image-carousel">
        <img src={images[currentIndex]} className="carousel-image" />
    </div>
  );
}

export default ImageCarousel
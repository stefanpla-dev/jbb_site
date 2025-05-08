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

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

function shuffleArray(array) {
    return array
    .map((item)=> ({item, sort: Math.random() })) // Assign random sort values
    .sort((a,b)=> a.sort - b.sort) // Sort by those values.
    .map(({item}) => item); // Extract shuffled item
}


function ContactCarousel() {
    const [shuffledImages, setShuffledImages] = useState(shuffleArray(images))
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect (() => {
        const interval = setInterval (() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex === shuffledImages.length - 1) {
                    setShuffledImages(shuffleArray(images)); //Reshuffle for next cycle
                    return 0; //Reset index
                }
                return prevIndex + 1;
            });
        }, 6000);    
        return () => clearInterval(interval);
    }, [shuffledImages]);

  return (
    <div className ="contact-image-carousel">
        <img src={shuffledImages[currentIndex]} className="contact-carousel-image" />
    </div>
  );
}

export default ContactCarousel
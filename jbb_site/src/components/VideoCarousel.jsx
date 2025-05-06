import React, { useState } from 'react'
import '../styles/VideoCarousel.css'

const videos = [
    {
      title: "CGMC Gala 2024",
      url: "https://vimeo.com/985252159",
    },
    {
      title: "Sound of Silence",
      url: "https://vimeo.com/733445539",
    },
    {
      title: "Dancing Queen",
      url: "https://vimeo.com/694448290",
    },
    {
      title: "Banned Together",
      url: "https://www.youtube.com/watch?v=faFREilPbTA",
    },
    {
      title: "Lost in the Wilderness",
      url: "https://www.youtube.com/watch?v=vh5qQ2Auevg",
    },
    {
      title: "Morning Hymn / Alleluia",
      url: "https://www.youtube.com/watch?v=7YCGwE9zfCA",
    },
    {
      title: "When We Were Young",
      url: "https://www.youtube.com/watch?v=Rn1dMbmvso8",
    },
    {
      title: "I Wanna Be Like You",
      url: "https://www.youtube.com/watch?v=IakhIW-ka9U",
    },
    {
      title: "Here Comes the Light",
      url: "https://www.youtube.com/watch?v=kdn5Itb7JcA",
    },
    {
      title: "Ramkali",
      url: "https://www.youtube.com/watch?v=hahmfiMAiOE",
    },
    {
      title: "Boundless Light",
      url: "https://www.youtube.com/watch?v=vffjyEGfcXA",
    },
    {
      title: "Oseh Shalom",
      url: "https://www.youtube.com/watch?v=0O9XfDbHKi0",
    },
  ]

function getEmbedUrl(url) {
    if (url.includes('youtube.com')) {
        const id = new URL(url).searchParams.get('v');
        return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes('vimeo.com')) {
        const id = url.split('/').pop();
        return `https://player.vimeo.com/video/${id}`;
    }
    return '';
}

function VideoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('none');

    const goToPrevious = () => {
        setSlideDirection('left');
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === 0 ? videos.length -1 : prev -1));
        }, 200);
    };

    const goToNext = () => {
        setSlideDirection('right');
        setTimeout(() => {
            setCurrentIndex ((prev) => (prev === videos.length -1 ? 0 : prev + 1));
        }, 200);
    };

  return (
    <div className="video-carousel-wrapper">
        <button onClick={goToPrevious} className="arrow left">←</button>
        <div className={`video-container slide-${slideDirection}`}>
            <iframe 
                key={videos[currentIndex].url}
                src={getEmbedUrl(videos[currentIndex].url)}
                title={videos[currentIndex].title}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen 
            />
            <p className="video-title">{videos[currentIndex].title}</p>
        </div>
        <button onClick={goToNext} className="arrow right">→</button>
    </div>
  )
}

export default VideoCarousel
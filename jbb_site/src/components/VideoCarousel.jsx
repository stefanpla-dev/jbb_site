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

    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    const nextIndex = (currentIndex + 1) % videos.length;

    const goToPrevious = () => {
        setSlideDirection('left');
        setTimeout(() => {
            setCurrentIndex(prevIndex);
        }, 200);
    };

    const goToNext = () => {
        setSlideDirection('right');
        setTimeout(() => {
            setCurrentIndex (nextIndex);
        }, 200);
    };

  return (
    <div className="video-carousel-wrapper">
      <div className="video-jump-buttons">
        {videos.map((video, index) =>(
          <button
            key={index}
            className={`jump-button ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
          {video.title}
          </button>
        ))}
      </div>
        <div className="video-strip">
            {/* Previous video*/}
            <div className="video-shadow left-shadow" onClick={goToPrevious}>
              <iframe
                src={getEmbedUrl(videos[prevIndex].url)}
                title={videos[prevIndex].title}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen 
                />
            </div>

            {/*Main (active) video */}
            <div className={`video-container slide-${slideDirection}`}>
              <p className="video-title">{videos[currentIndex].title}</p>
              <iframe
                key={videos[currentIndex].url}
                src={getEmbedUrl(videos[currentIndex].url)}
                title={videos[currentIndex].title}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                />
            </div>

            {/*Next video*/}
            <div className="video-shadow right-shadow" onClick={goToNext}>
              <iframe 
                src={getEmbedUrl(videos[nextIndex].url)}
                title={videos[nextIndex].title}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                />
            </div>
        </div>
    </div>
  )
}

export default VideoCarousel
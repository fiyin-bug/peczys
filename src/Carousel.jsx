import React, { useState, useEffect } from 'react';
import './Carousel.css';
import four from './assets/four.jpg';
import five from './assets/five.jpg';

const Carousel = () => {
  const images = [four, five];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0); // Keep track of typing progress

  const fullText = "Welcome to Peczy's Cologne";
  const typingSpeed = 100; // Speed of typing (ms)

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[textIndex]); // Append character
        setTextIndex((prev) => prev + 1); // Move to next letter
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      // Wait 2s after text finishes typing before removing overlay
      const overlayTimeout = setTimeout(() => {
        setShowOverlay(false);
      }, 2000);
      return () => clearTimeout(overlayTimeout);
    }
  }, [textIndex]);

  useEffect(() => {
    // Auto-slide images every 5 seconds
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="carousel-container">
      {/* Black overlay with typing effect */}
      {showOverlay && (
        <div className="overlay">
          <h1 className="magic-text">{typedText}</h1>
        </div>
      )}

      {/* Carousel */}
      <div className="carousel-wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${currentSlide === index ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image})`,
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          ></div>
        ))}
      </div>

      {/* <button onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)} className="carousel-btn prev">Previous</button>
      <button onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)} className="carousel-btn next">Next</button> */}
    </div>
  );
};

export default Carousel



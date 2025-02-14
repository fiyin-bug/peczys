import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const texts = [
    "Welcome to Peczyscologne, where every fragrance tells a story!",
    "We are dedicated to crafting unique and captivating scents that reflect individuality and style.",
    "Our colognes are made from the finest ingredients, ensuring a luxurious experience with every spritz.",
    "At Peczyscologne, we believe that a great fragrance can elevate your presence and leave a lasting impression.",
    "Join us on this aromatic journey and discover the perfect event that resonates with you."
  ];

  const typingSpeed = 50; // Faster typing speed
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (textIndex < texts.length) {
      if (charIndex < texts[textIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setDisplayedText((prev) => prev + '\n');
          setTextIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 500);
      }
    }
  }, [charIndex, textIndex]);

  return (
    <div className="overlay-container">
      <div className="overlay-content">
        <h1 className="magic-text">{displayedText}</h1>
      </div>
    </div>
  );
};

export default Carousel;

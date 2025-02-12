import React, { useState, useEffect } from 'react';
import one from './assets/one.png';
import two from './assets/two.jpeg';
import three from './assets/three.jpeg';
import four from './assets/four.png';
import five from './assets/five.png';
import six from './assets/six.png';
import './LandingPage.css';
import masc from './assets/masc.jpg';
import richh from './assets/richh.jpg';
import bloss from './assets/bloss.jpg';
import femme from './assets/femme.jpg';
import masc2 from './assets/masc2.jpg';

import Navbar from './Navbar';
import PerfumeCard from './PerfumeCard';

// Define perfumesData or import from another file
const perfumesData = [
 { id: 1, name: "Masculine Mystery", gender: "Male", image:masc,price:20000},
   { id: 2, name: "Rich Tobacco Blend", gender: "Male", image: richh, price: 25000},
   { id: 3, name: "Blossom Allure", gender: "Female", image: bloss, price: 30000},
   { id: 4, name: "Femme Fatale", gender: "Female", image:femme, price: 35000},
   { id: 5, name: "Masculine Mystery 2", gender: "Male", image: masc2, price: 40000},
];

const LandingPage = () => {
  // Array of imported images
  const images = [one, two, three, four, five, six];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Cycle through slides automatically
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval); // Clean up on unmount
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <>
      <Navbar />
      <div className="carousel-container">
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
        <button onClick={prevSlide} className="carousel-btn prev">Previous</button>
        <button onClick={nextSlide} className="carousel-btn next">Next</button>
      </div>

      <div className="new">
        <h4 className="newt">NEW ARRIVALS</h4>
      </div>
      
      <div className="landing-container">
        
        <div className="perfume-grid">
          {perfumesData.slice(0, 3).map((perfume) => (  
            <PerfumeCard
              key={perfume.id}
              name={perfume.name}
              gender={perfume.gender}
              image={perfume.image}
              price={perfume.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;

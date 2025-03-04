import React from 'react';
import './LandingPage.css';
import masc from './assets/masc.jpg';
import richh from './assets/richh.jpg';
import bloss from './assets/bloss.jpg';
import femme from './assets/femme.jpg';
import masc2 from './assets/masc2.jpg';
import Navbar from './Navbar';
import Mens from './Mens';
import Womens from './Womens';
import Carousel from './Carousel';
// import Carousel3D from './Carousel3D';

// Define perfumesData
const perfumesData = [
  { id: 1, name: "Masculine Mystery", gender: "Male", image: masc, price: 20000, ml: 70 },
  { id: 2, name: "Rich Tobacco Blend", gender: "Male", image: richh, price: 25000, ml: 60 },
  { id: 3, name: "Blossom Allure", gender: "Female", image: bloss, price: 30000, ml: 70 },
  { id: 4, name: "Femme Fatale", gender: "Female", image: femme, price: 35000, ml: 70 },
  { id: 5, name: "Masculine Mystery 2", gender: "Male", image: masc2, price: 40000, ml: 70 },
];

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Mens />
      <Womens />

     
    </>
  );
};

export default LandingPage;

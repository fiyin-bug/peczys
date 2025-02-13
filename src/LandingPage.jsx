import React, { useState, useEffect } from 'react';
import one from './assets/one.png';
import two from './assets/two.jpeg';
import three from './assets/three.jpeg';
import four from './assets/four.jpg';
import five from './assets/five.jpg';
import six from './assets/six.png';
import './LandingPage.css';
import masc from './assets/masc.jpg';
import richh from './assets/richh.jpg';
import bloss from './assets/bloss.jpg';
import femme from './assets/femme.jpg';
import masc2 from './assets/masc2.jpg';
import Mens from './Mens';
import Navbar from './Navbar';
import Perfumes from './Perfumes';
import PerfumeCard from './PerfumeCard';
import Womens from './Womens';
import Carousel from './Carousel';
// Define perfumesData or import from another file
const perfumesData = [
 { id: 1, name: "Masculine Mystery", gender: "Male", image:masc,price:20000},
   { id: 2, name: "Rich Tobacco Blend", gender: "Male", image: richh, price: 25000},
   { id: 3, name: "Blossom Allure", gender: "Female", image: bloss, price: 30000},
   { id: 4, name: "Femme Fatale", gender: "Female", image:femme, price: 35000},
   { id: 5, name: "Masculine Mystery 2", gender: "Male", image: masc2, price: 40000},
];

const LandingPage = () => {
  

  return (
    <>
      <Navbar />
      <Carousel />
     <Mens/>
     <Womens/>
     
      
    </>
  );
};

export default LandingPage;

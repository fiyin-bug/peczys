import React from 'react';
import PerfumeCard from './PerfumeCard';
import masc from './assets/masc.jpg';
import richh from './assets/richh.jpg';
import bloss from './assets/bloss.jpg';
import femme from './assets/femme.jpg';
import masc2 from './assets/masc2.jpg';
import Navbar from './Navbar';
const perfumesData = [
  { id: 1, name: "Masculine Mystery", gender: "Male", image:masc,price:20000},
  { id: 2, name: "Rich Tobacco Blend", gender: "Male", image: richh, price: 25000},
  { id: 3, name: "Blossom Allure", gender: "Female", image: bloss, price: 30000},
  { id: 4, name: "Femme Fatale", gender: "Female", image:femme, price: 35000},
  { id: 5, name: "Masculine Mystery 2", gender: "Male", image: masc2, price: 40000},
];

const Perfumes = () => {
  return (
    <>
      <Navbar/>
      <div className="perfumes-container">
        {perfumesData.map(perfume => (
          <PerfumeCard
            key={perfume.id} 
            id={perfume.id} 
            name={perfume.name} 
            gender={perfume.gender} 
            image={perfume.image} 
            price ={perfume.price}
            
          />
        ))}
      </div>
    </>
  );
};

export default Perfumes;

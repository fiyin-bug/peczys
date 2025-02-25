import React from 'react';

import PerfumeCard from './PerfumeCard';
import masc from './assets/masc.jpg';
import richh from './assets/richh.jpg';
import bloss from './assets/bloss.jpg';
import femme from './assets/femme.jpg';
import masc2 from './assets/masc2.jpg';
import Navbar from './Navbar';
import { useSearch } from "./SearchContext"; // Import context

const perfumesData = [
  { id: 1, name: "Masculine Mystery", gender: "Male", image: masc, price: 125000,ml:70 },
  { id: 2, name: "Rich Tobacco Blend", gender: "Male", image: richh, price: 210000,ml:60 },
  { id: 3, name: "Blossom Allure ", gender: "Female", image: bloss, price: 145000,ml:70 },
  { id: 4, name: "Femme Fatale ", gender: "Female", image: femme, price: 172000,ml:70 },
  { id: 5, name: "Masculine Mystery2 ", gender: "Male", image: masc2, price: 125000,ml:70 },
];

const Perfumes = () => {
  const { searchTerm } = useSearch(); // ✅ Get search term from context

  // ✅ Filter perfumes based on search term (case-insensitive)
  const filteredPerfumes = perfumesData.filter((perfume) =>
    perfume.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="dew">
      <Navbar />
      </div>
      <h4 className="sho">COLOGNES</h4>
      <div className="perfumes-container">
        {filteredPerfumes.length > 0 ? (
          filteredPerfumes.map(perfume => (
            <PerfumeCard
              key={perfume.id}
              id={perfume.id}
              name={perfume.name}
              ml={perfume.ml}
              image={perfume.image}
              price={perfume.price}
            />
          ))
        ) : (
          <p>No perfumes found.</p> // Show message if no results
        )}
     
      </div>
    </>
  );
};

export default Perfumes;


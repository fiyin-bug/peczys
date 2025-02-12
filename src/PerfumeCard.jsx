import React from 'react';

const PerfumeCard = ({ id, name, gender, image,price}) => {
  return (
    <div className="perfume-card" id={`perfume-${id}`}>
      <img src={image} alt={name} className="perfume-image" />
      <h3 className="perfume-name">{name}</h3>
      <p className="perfume-gender">{gender}</p>
      <p className="perfume-price">₦{price.toLocaleString()}</p>
    </div>
  );
};

export default PerfumeCard;
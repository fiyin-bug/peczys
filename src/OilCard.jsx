import React from 'react';
import './OilCard.css';


const OilCard = ({ id, name, gender, image, price }) => {
  const handleAddToCartClick = () => {
    const phoneNumber = '+2347013084388'; // Replace with your WhatsApp business number
    const message = `I want to buy ${name}`; // Custom message with the product name
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="oil-card" id={`perfume-${id}`}>
      <img src={image} alt={name} className="perfume-image" />
      <h3 className="perfume-name">{name}</h3>
      <p className="perfume-gender">{gender}</p>
      <p className="perfume-price">₦{price.toLocaleString()}</p>
      <button className="oil-add" onClick={handleAddToCartClick}>
        Add to Cart
      </button>
    </div>
  );
};

export default OilCard;
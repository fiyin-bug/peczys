import React from 'react';
import { useNavigate } from 'react-router-dom';


const PerfumeCard = ({ id, name, gender, image, price,ml }) => {
  const navigate = useNavigate();

  // Function to handle card click (navigate to product details)
  const handleCardClick = () => {
    navigate(`/perfumes/${id}`); // Navigate to the product details page
  };

  // Function to handle "Add to Cart" button click (open WhatsApp)
  const handleAddToCartClick = (e) => {
    e.stopPropagation(); // Prevent the card click event from firing
    const phoneNumber = '+2348164504707'; // Replace with your WhatsApp business number
    const message = `I want to buy ${name}`; // Custom message with the product name
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="perfume-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <img src={image} alt={name} className="perfume-image" />
      <h3 className="perfume-name">{name}</h3>
      <h1 className="perfume-ml">{ml}ml</h1>
      <p className="perfume-gender">{gender}</p>
      <p className="perfume-price">₦{price.toLocaleString()}</p>
      <button className="perfume-add" onClick={handleAddToCartClick}>
        Add to Cart
      </button>
    </div>
  );
};

export default PerfumeCard;
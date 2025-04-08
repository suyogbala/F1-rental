import React from "react";
import "./StudentApartmentCard.css";

function StudentApartmentCard({ image, name, address, price, specifications }) {
  return (
    <div className="student-apartment-card">
      <img src={image} alt={name} className="apartment-image" />
      <div className="apartment-details">
        <h3 className="apartment-name">{name}</h3>
        <p className="apartment-address">{address}</p>
        <p className="apartment-price">Price: ${price}/month</p>
        <ul className="apartment-specifications">
        {(specifications || []).map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentApartmentCard;

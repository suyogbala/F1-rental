import React from "react";
import "./PropertyOwner.css";

const PropertyOwner = () => {
  return (
    <div className="property-owner-container">
      <div className="property-owner-banner">
        <h1>Hi Rental Owners</h1>
        <p>
          Are you looking to rent to students but worried about payment consistency or managing cosigners? We make it easy for you!
        </p>
      </div>

      <div className="property-owner-content">
        <div className="feature-card">
          <h2>Pre-Screened Student Tenants</h2>
          <p>
            We connect you with responsible students actively searching for accommodation.
          </p>
        </div>
        <div className="feature-card">
          <h2>Reliable Payments, Every Time</h2>
          <p>
            As your trusted cosigner, we ensure timely rent payments, minimizing your risk and providing peace of mind.
          </p>
        </div>
        <div className="feature-card">
          <h2>Simplified Leasing Process</h2>
          <p>
            We handle the paperwork and help bridge the gap between you and student tenants, making the entire process smooth and hassle-free.
          </p>
        </div>
      </div>

      <div className="property-owner-footer">
        <p>
          Let us take the stress out of renting to students so you can enjoy steady rental income with minimal effort.
        </p>
      </div>
    </div>
  );
};

export default PropertyOwner;

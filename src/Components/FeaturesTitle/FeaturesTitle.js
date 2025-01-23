import React from "react";
import "./FeaturesTitle.css";

function FeaturesTitle({ image, title, subtitle, buttonTitle, buttonLink }) {
  return (
    <div className="FeaturesTitle">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <button onClick={() => window.location.href = buttonLink}>
        {buttonTitle}
      </button>
    </div>
  );
}

export default FeaturesTitle;

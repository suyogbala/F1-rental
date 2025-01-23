import React from "react";
import { Link } from "react-router-dom";
import "./FeaturesTitle.css";

function FeaturesTitle({ image, title, subtitle, buttonTitle, buttonLink }) {
  return (
    <div className="FeaturesTitle">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <Link to={buttonLink}>
        <button>{buttonTitle}</button>
      </Link>
    </div>
  );
}

export default FeaturesTitle;

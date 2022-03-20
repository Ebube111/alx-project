import React from "react";
import "./card.css";

const Card = ({ title, subtitle, href, image }) => {
  return (
    <div className="card-container">
      <img alt="pci" src={image} />
      <h1>{title}</h1>
      <span>{subtitle}</span>
      <a className="card-button" target="_blank" href={href}>
        Learn More
      </a>
    </div>
  );
};

export default Card;

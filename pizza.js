import React from "react";
import "./style.css";

export default function Pizza({ pizza }) {
  return (
    <div className="pizza-card">
      <h2>{pizza.name}</h2>
      <img
        src={require(`../images/${pizza.image}`)} // Correct path for images
        alt={pizza.name}
        className="pizza-image"
      />
      <p>{pizza.description}</p>
      <div className="pizza-details">
        <div className="pizza-variants">
          <strong>Variants:</strong> {pizza.varients.join(", ")}
        </div>
        <div className="pizza-prices">
          <strong>Prices:</strong>{" "}
          {Object.entries(pizza.prices[0]).map(([size, price]) => (
            <span key={size}>
              {size}: ${price}{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

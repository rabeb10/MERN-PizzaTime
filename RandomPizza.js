import React from "react";

export default function RandomPizza({ pizzas }) {
  const randomPizza = pizzas[Math.floor(Math.random() * pizzas.length)];

  return (
    <div className="pizza-card">
      <h2>{randomPizza.name}</h2>
      <img
        src={`${process.env.PUBLIC_URL}/images/${randomPizza.image}`}
        alt={randomPizza.name}
        className="pizza-image"
      />
      <p>{randomPizza.description}</p>
      <div>
        <strong>Variants:</strong> {randomPizza.varients.join(", ")}
      </div>
      <div>
        <strong>Prices:</strong>{" "}
        {Object.entries(randomPizza.prices[0]).map(([size, price]) => (
          <span key={size}>
            {size}: ${price}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}

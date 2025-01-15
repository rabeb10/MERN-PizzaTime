import React from 'react';
import pizzaData from './PizzaData';
import Pizza from './pizza';

export default function PizzaMenu() {
  return (
    <div className="pizza-grid">
      {pizzaData.map((pizza) => (
        <Pizza key={pizza.name} pizza={pizza} />
      ))}
    </div>
  );
}

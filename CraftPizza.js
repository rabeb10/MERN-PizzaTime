import React, { useState } from "react";
import './craftpizza.css';

const CraftPizza = () => {
  const [method, setMethod] = useState('');
  const [size, setSize] = useState('');
  const [crust, setCrust] = useState('');
  const [toppings, setToppings] = useState([]);

  const handleToppingChange = (event) => {
    const topping = event.target.value;
    if (toppings.includes(topping)) {
      setToppings(toppings.filter(item => item !== topping));
    } else {
      setToppings([...toppings, topping]);
    }
  };

  return (
    <div className="craftpizza-container">
        <div class="pizza-petes-logo">Pizza Pete's</div>
      
      <div className="selection-zone">
      <h1>Craft Your Pizza</h1>
        {/* Method Selection Dropdown */}
        <div className="method-selection">
          <h2>Method:</h2>
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="">Select Method</option>
            <option value="Carryout">Carryout</option>
            <option value="Delivery">Delivery</option>
          </select>
        </div>

        {/* Size Selection Dropdown */}
        <div className="size-selection">
          <h2>Size:</h2>
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">Select Size</option>
            <option value="Large">Large</option>
            <option value="Medium">Medium</option>
            <option value="Mini">Mini</option>
          </select>
        </div>

        {/* Crust Selection Dropdown */}
        <div className="crust-selection">
          <h2>Crust:</h2>
          <select value={crust} onChange={(e) => setCrust(e.target.value)}>
            <option value="">Select Crust</option>
            <option value="Thin Crust">Thin Crust</option>
            <option value="Thick Crust">Thick Crust</option>
            <option value="Cheese Filled Crust">Cheese Filled Crust</option>
          </select>
        </div>

        {/* Toppings Selection */}
        <div className="topping-selection">
          <h2>Toppings:</h2>
          <label>
            <input type="checkbox" value="Olives" onChange={handleToppingChange} /> Olives
          </label>
          <label>
            <input type="checkbox" value="Mushrooms" onChange={handleToppingChange} /> Mushrooms
          </label>
          <label>
            <input type="checkbox" value="Pepperoni" onChange={handleToppingChange} /> Pepperoni
          </label>
          <label>
            <input type="checkbox" value="Pepperoni Olives" onChange={handleToppingChange} /> Pepperoni & Olives
          </label>
          <label>
            <input type="checkbox" value="Cheese Filled" onChange={handleToppingChange} /> Cheese Filled
          </label>
          <label>
            <input type="checkbox" value="Pineapple Olives" onChange={handleToppingChange} /> Pineapple & Olives
          </label>
          <label>
            <input type="checkbox" value="Sausage" onChange={handleToppingChange} /> Sausage
          </label>
          
  <button className="validate-order-btn">Validate Order</button>

        </div>
      </div>
      
    </div>
  );
}

export default CraftPizza;

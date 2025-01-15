import { useState } from 'react';
import './orderprices.css'
export default function OrderPrices() {
    const [method, setMethod] = useState('Delivery'); // Example, set based on your app
    const [QTY, setQTY] = useState(1); // Quantity of pizzas, update as needed
    const [size, setSize] = useState('medium'); // Size, could be small/medium/large
    const [crust, setCrust] = useState('thin crust'); // Crust, set based on selection
    const [toppings, setToppings] = useState(['pepperoni']); // Example, customize based on selection

    // Pizza data array
    const pizzaData = [
        {
            name: "Pepperoni",
            variants: ["small", "medium", "large"],
            prices: { small: 10, medium: 12, large: 14 },
            category: "nonveg",
            image: "peperoni.jpg", 
            description: "Classic pepperoni pizza with mozzarella cheese.",
        },
        {
            name: "Olives Pineapple",
            variants: ["small", "medium", "large"],
            prices: { small: 15, medium: 20, large: 25 },
            category: "veg",
            image: "pineappl.jpg", 
            description: "Tropical pineapple and olives on a delicious crust.",
        },
        // Add more pizza data...
    ];

    // Function to get the selected pizza price
    const getPizzaPrice = (pizzaName, size) => {
        const pizza = pizzaData.find(p => p.name === pizzaName);
        if (pizza) {
            return pizza.prices[size] || 0;
        }
        return 0;
    };

    // Calculate total price of the order
    let totalPrice = 0;
    toppings.forEach(topping => {
        totalPrice += getPizzaPrice(topping, size);
    });

    return (
        <div>
            <h1>Your Order</h1>
            <h1>Method: {method}</h1>
            <h1>QTY: {QTY}</h1>
            <h1>Size: {size}</h1>
            <h1>Crust: {crust}</h1>
            <h1>Toppings: {toppings.join(", ")}</h1>
            <h3>Price per Pizza: {getPizzaPrice(toppings[0], size)}</h3> {/* Display price for first topping as example */}
            <h3>Total: ${totalPrice * QTY}</h3> {/* Total cost */}
        </div>
    );
}

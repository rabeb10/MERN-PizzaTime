import React, { useState } from "react";
import Pizza from "./components/pizza";  // Import Pizza component
import pizzaData from "./pizzadata";  // Import pizza data
import Login from './components/Login';  // Import Login component
import Order from './components/CraftPizza';  // Import Order component
import './components/style.css';
import './components/login.css'
function App() {
  // State to manage the current page
  const [currentPage, setCurrentPage] = useState("home");

  // Define navigation functions
  const navigateToLogin = () => {
    setCurrentPage("login");  // Change to login page
  };

  const navigateToOrder = () => {
    setCurrentPage("order");  // Change to order page
  };

  const navigateToHome = () => {
    setCurrentPage("home");  // Go back to home page
  };

  // Render different content based on the currentPage state
  const renderPage = () => {
    if (currentPage === "home") {
      return (
        <div className={`App ${currentPage === "login" ? "login-page" : ""}`}>
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
            <h1>Pizza Pete's</h1>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
                <li className="nav-item active">
                  <button className="nav-link btn btn-light" onClick={navigateToHome}>
                    Home
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-light" onClick={navigateToLogin}>
                    Login
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-light" onClick={navigateToOrder}>
                    Order
                  </button>
                </li>
              </ul>
            </div>
          </nav>
      
          {/* Render the page based on the current state */}
          {renderPage()}
        </div>
      );
    }}}      

export default App;

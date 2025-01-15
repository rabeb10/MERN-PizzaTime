// src/components/Signup.js
import React from 'react';
import './style.css';

const Signup = () => {
  return (
    <div className="auth-container">
      <h2>Create an Account</h2>
      <form>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" placeholder="Enter your first name" required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" placeholder="Enter your last name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" placeholder="Enter your city" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="auth-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup; // Ensure default export

// components/Login.js

import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="auth-container">
      <h2>Welcome Back!</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="auth-btn">Log In</button>
      </form>
    </div>
  );
};

export default Login;  // Ensure this is a default export

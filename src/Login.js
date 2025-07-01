import React, { useState, useContext } from "react";
import "./Login.css";
import { EcomContext } from "./context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { ee, PP ,setLogin} = useContext(EcomContext); // To show email/password if needed

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email/password are correct
    if (email === ee && password === PP) {
      setLogin(true);
      localStorage.setItem("userlogin", true); // Mark user as logged in
      navigate("/"); // Navigate to the Home page after successful login
    } else {
      alert("Invalid email or password");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="wrapper">
    <div className="login-container">
      <div className="Heading">
        <h1>MY-React-APP</h1>
      </div>

      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? "Hide" : "Show"}
            </span>
          </div>
          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>
        <p className="signup-link">
          Don't have an account?
    
          <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  </div>
  );
};

export default Login;

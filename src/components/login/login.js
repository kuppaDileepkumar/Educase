import React, { useState } from 'react';
import './index.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add authentication logic here
  };

  return (
    <div className="login-container">
      <h2>Signin to your <span className="brand">PopX</span> account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

// DeveloperRegister.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './DeveloperRegister.css';

function DeveloperRegister() {
  const navigate = useNavigate(); // Use useNavigate hook
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/dregister', formData);
      // toast.success('Registration Successfull!') // Send request to /api/dregister
      // Redirect to login page after successful registration
      navigate('/DeveloperLogin'); // Use navigate function to redirect
    } catch (error) {
      console.error('Error registering developer:', error);
    }
  };

  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">
        <h2>Developer Registration</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          <button type="submit">Register</button>
          <p>ALREADY REGISTERED? <Link to='/DeveloperLogin'>Login</Link></p>
        </form>
      </div>
    </div>
  );
}

export default DeveloperRegister;

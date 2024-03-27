import React, { useState } from 'react';
import axios from 'axios';
import Videobg from '../assets/bg-video2.mp4';
import './Your_Models.css';
import { Link } from 'react-router-dom';

const Your_Models = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [sliderValue, setSliderValue] = useState({
    SQUARE_ft: 400,
    Rooms: 3,
    BudgetMin: 150000,
    BudgetMax: 300000
  });

  const handleChange = (event, sliderName) => {
    setSliderValue({
      ...sliderValue,
      [sliderName]: parseInt(event.target.value)
    });
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/sliderData', { ...sliderValue, ...formData });
      console.log('Form data and slider values saved successfully:', response.data);
      // Optionally, perform actions on successful save
    } catch (error) {
      console.error('Error saving form data and slider values:', error);
      // Optionally, handle error state or display error message
    }
  };

  return (
    <div>
      <link rel="stylesheet" href="https://unpkg.com/react-rangeslider/umd/rangeslider.min.css" />
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={Videobg} type="video/mp4" />
        </video>
      </div>
      <div className='slider-container'>
        <div className='sliders'>
          <form onSubmit={handleSubmit}>
            {/* Text fields for name, email, and phone number */}
            <div className='form-field'>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                style={{ width: '300px' }}
              />
            </div>

            <div className='form-field'>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{ width: '300px' }}
              />
            </div>

            <div className='form-field'>
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                style={{ width: '300px' }}
              />
            </div>
            {/* Add more text fields as needed */}

            <div className='slider'>
              <label>
                Square_FT: {sliderValue.SQUARE_ft}
                <br />
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={sliderValue.SQUARE_ft}
                  onChange={(e) => handleChange(e, 'SQUARE_ft')}
                  onInput={(e) => handleChange(e, 'SQUARE_ft')}
                  step="100"
                  className="range-slider red-thumb"
                />
              </label>
            </div>

            <div className='slider'>
              <label>
                Rooms: {sliderValue.Rooms}
                <br />
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={sliderValue.Rooms}
                  onChange={(e) => handleChange(e, 'Rooms')}
                  onInput={(e) => handleChange(e, 'Rooms')}
                  className="range-slider"
                />
              </label>
            </div>

            <div className='slider'>
              <label>
                Budget: {sliderValue.BudgetMin} - {sliderValue.BudgetMax}
                <br />
                Min:
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  value={sliderValue.BudgetMin}
                  onChange={(e) => handleChange(e, 'BudgetMin')}
                  onInput={(e) => handleChange(e, 'BudgetMin')}
                  className="range-slider blue-thumb"
                  step="1000"
                />
                Max:
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  value={sliderValue.BudgetMax}
                  onChange={(e) => handleChange(e, 'BudgetMax')}
                  onInput={(e) => handleChange(e, 'BudgetMax')}
                  className="range-slider blue-thumb"
                  step="1000"
                />
              </label>
            </div>

            {/* Move submit button to the last */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div>
        <Link to="http://localhost:9000/">Create Floor Plan By Yourself</Link>
      </div>
    </div>
  );
};

export default Your_Models;

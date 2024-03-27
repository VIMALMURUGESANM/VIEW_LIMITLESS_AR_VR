import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Videobg from '../assets/bg-video2.mp4';
import './Sliderdata.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SliderData = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState(''); // State to hold the text input
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/getUsers');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSend = async (email,name) => {
    const emailParams = {
      from_name: 'VIEW LIMITLESS TEAM',
      to_name: name,
      to_email: email,
      text: text
    };

    try {
      const emailResponse = await emailjs.send(
        'view_limitless', 
        'template_ktydsq4', 
        emailParams,
        'NF2w_TxRI3zn4qxND' 
      );

      console.log('Email sent:', emailResponse);
      
      toast.success('Email sent successfully to ' + email);
    } catch (error) {
      console.error('Error sending email:', error);
      
      toast.error('Failed to send email to ' + email + '. Please try again.');
    }
  };

  return (
    <div>
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={Videobg} type="video/mp4" />
        </video>
      </div>
      <h1>Fetched Slider Data</h1>
      {error && <p>{error}</p>}
      <div className="new-card-container">
        {data.map((item) => (
          <div key={item._id} className="new-card">
            <h2>Name: {item.name}</h2>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            <p>SQUARE_ft: {item.SQUARE_ft}</p>
            <p>Rooms: {item.Rooms}</p>
            <p>BudgetMin: {item.BudgetMin}</p>
            <p>BudgetMax: {item.BudgetMax}</p>

            <input type="text" onChange={handleTextChange} placeholder="UPLOAD DRIVE LINK OF THE IMAGE" />
            <button onClick={() => handleSend(item.email,item.name)}>Send Email</button>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default SliderData;

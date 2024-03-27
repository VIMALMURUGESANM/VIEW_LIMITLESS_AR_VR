// Profile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [requestedModels, setRequestedModels] = useState([]);

  useEffect(() => {
    const fetchRequestedModels = async () => {
      try {
        // Make a request to your backend API to fetch the user's requested models
        const response = await axios.get('/api/user/requestedModels');
        setRequestedModels(response.data);
      } catch (error) {
        console.error('Error fetching requested models:', error);
      }
    };

    fetchRequestedModels();
  }, []);

  return (
    <div>
      <h1>My Requested Models</h1>
      {requestedModels.map(model => (
        <div key={model._id}>
          <h2>{model.name}</h2>
          {/* Display other model details */}
        </div>
      ))}
    </div>
  );
};

export default Profile;

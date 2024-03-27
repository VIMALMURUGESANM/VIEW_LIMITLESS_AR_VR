// FeedbackForm.js
import React, { useState } from 'react';
import axios from 'axios';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Send feedback data to server
      await axios.post('http://localhost:8000/api/feedback', { feedback });
      console.log('Feedback submitted:', feedback);
      // Reset form after successful submission
      setFeedback('');
      alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          value={feedback}
          onChange={handleChange}
          placeholder="Enter your feedback"
        />
        <SubmitButton disabled={submitting} />
      </form>
    </div>
  );
};

export default FeedbackForm;

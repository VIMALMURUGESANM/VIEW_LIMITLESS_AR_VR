import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
// import './EmailForm.css';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('view_limitless', 'template_VL', e.target, 'mk8hHaABt7awTBklF')
      .then((result) => {
        setEmail('');
        setMessage('');
        setIsSent(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="email-form">
      <h2>Contact Us</h2>
      {isSent ? (
        <p>Your message has been sent!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="user_message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default EmailForm;
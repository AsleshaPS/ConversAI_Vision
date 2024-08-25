import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  const [rating, setRating] = useState(null);

  const handleEmojiClick = (value) => {
    setRating(value);
  };

  return (
    <div className="contact-background">
      <div className="contact-content">
        <h1>CONTACT US!</h1>
        <p>GIVE US YOUR FEEDBACK</p>
        
        <div className="rating-section">
          <h2>Rate Your Experience:</h2>
          <div className="emoji-container">
            <span 
              className={`emoji ${rating === 1 ? 'selected' : ''}`} 
              onClick={() => handleEmojiClick(1)}
            >
              😡
            </span>
            <span 
              className={`emoji ${rating === 2 ? 'selected' : ''}`} 
              onClick={() => handleEmojiClick(2)}
            >
              😟
            </span>
            <span 
              className={`emoji ${rating === 3 ? 'selected' : ''}`} 
              onClick={() => handleEmojiClick(3)}
            >
              😐
            </span>
            <span 
              className={`emoji ${rating === 4 ? 'selected' : ''}`} 
              onClick={() => handleEmojiClick(4)}
            >
              🙂
            </span>
            <span 
              className={`emoji ${rating === 5 ? 'selected' : ''}`} 
              onClick={() => handleEmojiClick(5)}
            >
              😃
            </span>
          </div>
        </div>
        
        <div className="feedback-section">
          <h2>Your Feedback:</h2>
          <textarea 
            placeholder="Write your feedback here..."
            rows="5"
            cols="50"
          />
          <button className="submit-button">Submit Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [image, setImage] = useState(null);
  const [question, setQuestion] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  return (
    <div className="chatbot-background">
    <div className="upload-page">
      <div className="top-row">
        <div className="image-box">
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {image && <img src={image} alt="Uploaded Preview" className="image-preview" />}
        </div>
        <div className="text-box">
          {/* Content for text-box can be added here */}
        </div>
      </div>
      <div className="question-box">
        <textarea
          value={question}
          onChange={handleQuestionChange}
          placeholder="Type your question here..."
        />
        </div>
      </div>
    </div>

  );
};

export default Chatbot;

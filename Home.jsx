import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [showChatbotButton, setShowChatbotButton] = useState(false);
  const [animateBoxes, setAnimateBoxes] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowChatbotButton(true);
      } else {
        setShowChatbotButton(false);
      }

      // Trigger the animation for boxes when scrolled past a certain point
      if (window.scrollY > 300) { // Adjust the threshold as needed
        setAnimateBoxes(true);
      } else {
        setAnimateBoxes(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChatbotClick = () => {
    navigate('/chatbot');
  };

  return (
    <div className="home-background">
      <div className='home-content'>
        <h1>Conversational Image Recognition Chatbot</h1>
        <p>Elevate Your Visual Data with AI-Powered Conversations at Your Fingertips</p>
        <div>
          Scroll down for more content
        </div>
      </div>

      <div className="scrollable-content"> </div>

      {showChatbotButton && (
        <div className='center-button-container'>
          <button onClick={handleChatbotClick} className='chatbot-button'>
            Chat with Chatbot
          </button>
        </div>
      )}

      {animateBoxes && (
        <>
          <div className='animated-box box1'>
            <h2>Upload Your PCB Image:</h2>
            <p>Start by uploading a clear image of your PCB. Our system supports various image formats to ensure compatibility.</p>
          </div>
          <div className='animated-box box2'>
            <h2>Automated Defect Detection:</h2>
            <p>Our advanced image recognition algorithms will scan the PCB for common defects, such as open, short, mousebite, spur, pin hole, and spurious copper.</p>
          </div>
          <div className='animated-box box3'>
            <h2>Receive Detailed Feedback:</h2>
            <p>Get an instant report on detected defects. The chatbot will highlight the issues and offer actionable insights.</p>
          </div>
          <div className='animated-box box4'>
            <h2>Interactive Support:</h2>
            <p>Engage in a conversation with our chatbot to learn more about each defect and receive guidance on how to address them.</p>
          </div>
        </>
      )}
      
    </div>
  );
};

export default Home;

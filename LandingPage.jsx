import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; 

const quotes = [
  {
    text: "Conversational AI is about making the interaction between humans and machines as natural as possible.",
    author: "— Oren Etzioni, CEO of the Allen Institute for AI"
  },
  {
    text: "The goal of conversational AI is to create a seamless experience where machines understand and respond to human needs effectively.",
    author: "— Rana el Kaliouby, Co-founder and CEO of Affectiva"
  },
  {
    text: "The real magic of conversational AI happens when it blends with human emotions and provides empathy in interactions.",
    author: "— Chris Messina, Creator of the hashtag and conversational UX advocate"
  },
  {
    text: "Image recognition is a powerful tool that enables computers to understand and interpret visual information, bridging the gap between human perception and machine learning.",
    author: "— Fei-Fei Li, Professor of Computer Science at Stanford University and co-director of the Stanford Human-Centered AI Institute"
  },
  {
    text: "By teaching machines to see, we’re opening new possibilities for understanding the world and transforming how we interact with technology.",
    author: "— Andrew Ng, Co-founder of Google Brain and Coursera, and a leading figure in AI"
  },
  {
    text: "Image recognition systems are revolutionizing industries by enabling machines to comprehend visual data in ways that were once unimaginable.",
    author: "— Yoshua Bengio, Professor at the University of Montreal and a pioneer in deep learning"
  },
  {
    text: "Chatbots are not just about automating tasks; they are about enhancing human interaction and creating more engaging experiences.",
    author: "— Miriam Vogel, Founder and CEO of EqualAI"
  },
  {
    text: "A chatbot’s true success is measured by its ability to understand and adapt to the nuances of human conversation.",
    author: "— Janelle Shane, AI researcher and author of You Look Like A Thing And I Love You"
  },
  {
    text: "Good chatbots are those that can handle complexity with simplicity, providing users with a seamless experience without overwhelming them.",
    author: "— Kate Crawford, Senior Principal Researcher at Microsoft Research and co-founder of the AI Now Institute"
  }
];

const LandingPage = () => {
  const [quote, setQuote] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const updateQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    };

    updateQuote(); // Display a random quote initially
    const intervalId = setInterval(updateQuote, 5000); // Update quote every 5 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  const handleNavigateHome = () => {
    navigate('/home');
  };

  return (
    <div className="landing-page">
      <div className="navbar-placeholder"></div>
      <div className="landing-content">
        <h1>Welcome to Our Site!</h1>
        <button onClick={handleNavigateHome} className="navigate-button">
          Get started
        </button>
      </div>
      <div className="quote-container">
        <h2>{quote.category}</h2>
        <p className="quote-text">{quote.text}</p>
        <p className="quote-author">{quote.author}</p>
      </div>
    </div>
  );
};

export default LandingPage;

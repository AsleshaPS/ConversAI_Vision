import React from 'react';
import './TeamSection.css'; // Import the CSS for styling

const TeamSection = () => {
  return (
    <section className="team-section">
      <h1>Meet Our Team</h1>
      <div className="team-member">
        <img src="https://www.example.com/team-member1.jpg" alt="member1" />
        <h3>Omkar Joshi</h3>
        <p>role</p>
        {/* <p>John is the mastermind behind our AI algorithms and image recognition technology.</p> */}
      </div>
      <div className="team-member">
        <img src="https://www.example.com/team-member2.jpg" alt="member2" />
        <h3>Aslesha Patil</h3>
        <p>role</p>
        {/* <p>Jane leads the development team and ensures our chatbot is user-friendly and effective.</p> */}
      </div>
      <div className="team-member">
        <img src="https://www.example.com/team-member3.jpg" alt="member3" />
        <h3>Mokshita Kochhar</h3>
        <p>role</p>
        {/* <p>Alice designs intuitive and engaging interfaces for our chatbot application.</p> */}
      </div>
      <div className="team-member">
        <img src="https://www.example.com/team-member4.jpg" alt="member4" />
        <h3>Akshat Gupte</h3>
        <p>role</p>
        {/* <p>Bob analyzes data to improve our image recognition algorithms and performance.</p> */}
      </div>
      <div className="team-member">
        <img src="https://www.example.com/team-member5.jpg" alt="member5" />
        <h3>Mangalam Misra</h3>
        <p>role</p>
        {/* <p>Eva handles marketing strategies to promote our chatbot and its features.</p> */}
      </div>
      <div className="team-member">
        <img src="https://www.example.com/team-member6.jpg" alt="member6" />
        <h3>Sneha Vadnere</h3>
        <p>role</p>
        {/* <p>Liam oversees customer support and ensures a seamless user experience with our chatbot.</p> */}
      </div>
      <div
        className="TeamSection-background">
      </div>
    </section>
  );
};

export default TeamSection;

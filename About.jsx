import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-background">
      <div className="about-content">
        <h1>About the Website</h1>
        <section>
          <h2>Introduction</h2>
          <p>Our aim is to provide users with a responsive chatbot that recognizes and analyzes images. Printed Circuit Boards (PCBs) are essential in modern electronics, serving as the backbone that connects electronic components. Ensuring their quality is critical for device performance. Our platform uses advanced technology to streamline and enhance PCB inspection.</p>
        </section>
        <section>
          <h2>What Are PCBs?</h2>
          <p>PCBs consist of insulating material with conductive pathways that link electronic components. They are integral to nearly all electronic devices, from smartphones to appliances. Effective quality control is vital to prevent performance issues and ensure product durability.</p>
        </section>
        <section>
          <h2>Common PCB Defects</h2>
          <p>Open: A broken or incomplete electrical connection that prevents current flow.</p>
          <p>Short: An unintended connection between two or more traces, causing a short circuit.</p>
          <p>Mousebite: Small, disconnected copper islands or "bites" left during the PCB etching process.</p>
          <p>Spur: Extra or unintended copper extensions that can interfere with the circuit’s operation.</p>
          <p>Pin Hole: Tiny, unintentional holes in the solder mask or PCB that can lead to moisture ingress and corrosion.</p>
          <p>Spurious Copper: Unwanted copper areas on the PCB that can cause electrical noise or short circuits.</p>
        </section>
        <section>
          <h2>Our Solution</h2>
          <p>Our Conversational Image Recognition Chatbot simplifies the defect detection process by:</p>
          <ul>
            <li>Utilizing advanced image recognition algorithms to identify common PCB faults.</li>
            <li>Providing instant, detailed reports on detected issues.</li>
            <li>Offering interactive, conversational support to help you understand and resolve defects effectively.</li>
          </ul>
          <p>Our platform combines the power of AI with user-friendly interaction, making PCB inspection more accessible and efficient. Whether you're a manufacturer or a technician, our chatbot provides a valuable tool for maintaining the quality and reliability of your electronic products.</p>
        </section>
      </div>
    </div>
  );
};

export default About;

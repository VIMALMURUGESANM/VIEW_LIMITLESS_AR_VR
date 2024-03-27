import React, { useEffect, useRef } from 'react';
import './Home.css'; // Import your CSS file for styling

import Videobg from '../assets/background-video.mp4';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function Home() {
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const videoSpeed = 0.5; // Adjust the speed of parallax effect
      const contentSpeed = 0.8; // Adjust the speed of parallax effect

      if (videoRef.current) {
        videoRef.current.style.transform = `translateY(-${scrollY * videoSpeed}px)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${scrollY * contentSpeed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="video-container" ref={videoRef}>
        <video autoPlay loop muted>
          <source src={Videobg} type="video/mp4" />
        </video>
      </div>
      <div className="content-containerHome" ref={contentRef}>
        <div className="contentHome">
          <h1>VIEW LIMITLESS USING AR VR </h1>
          <p>The use of Augmented Reality (AR) and Virtual Reality (VR) in the field of architecture is a transformative development that is reshaping the way architects design, present, and experience architectural spaces. This project explores the applications of AR and VR in architecture, focusing on how these technologies enhance design processes, improve client engagement, and revolutionize the comprehension of architectural concepts. Through a combination of real-world augmentation and immersive virtual environments, AR and VR offer architects and stakeholders unique tools to visualize, modify, and experience architectural designs in unprecedented ways. This abstract provides a glimpse into the comprehensive exploration of AR and VR's impact on the architectural industry and the myriad benefits they bring to the creative and practical aspects of architecture.
</p>
          <button className="register-btn"><Link to='/register'>LETS GO</Link></button>
        </div>
      </div>
    </div>
  );
}

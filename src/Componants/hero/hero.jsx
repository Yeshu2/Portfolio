import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { AiOutlineDownload } from "react-icons/ai";
import './hero.css';

import profilePic from '../../assets/profilepic.jpg';
import CV from '../../assets/resume.pdf'; // Make sure your resume is in the correct folder

function Hero() {
  return (
    <Container className="hero-container text-center py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Image src={profilePic} roundedCircle className="hero-image mb-4" />
          <h1 className="hero-title">
            <span className="gradient-text">I'm Yash Patil</span>, Frontend Developer
          </h1>
          <p className="hero-description">
            I design and build modern, responsive websites with clean UI. I'm based in India and passionate about bringing ideas to life through code.
          </p>
          
          <a href={CV} download className="btn btn-primary d-inline-flex align-items-center gap-2 mt-3">
            Download CV <AiOutlineDownload size={20} />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;

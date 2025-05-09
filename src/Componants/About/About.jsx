import React from "react";
import "./About.css";
import ME from "../../assets/Aboutpic.jpg";
import { FaLaptopCode, FaMobileAlt, FaProjectDiagram } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h3>Let Me Introduce Myself</h3>
      <h2 className="gradient-text">About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Yash Patil" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaLaptopCode className="about__icon" />
              <h5>Web Developer</h5>
              <small>Frontend Specialist</small>
            </article>

            <article className="about__card">
              <FaMobileAlt className="about__icon" />
              <h5>App Developer</h5>
              <small>React Native</small>
            </article>

            <article className="about__card">
              <FaProjectDiagram className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p>
            👋 Hi, I'm <strong>Yash Patil</strong> — a passionate frontend developer based in India.
            I specialize in building sleek, fast, and modern UIs using React and modern tools.
            <br /><br />
            🚀 Currently building smart web platforms.<br />
            📚 Learning deeper React concepts.<br />
            ✨ Always open to collaborations and creative projects.<br />
            📩 Reach me at <a href="Patilyash205@gmail.com">Patilyash205@gmail.com
            </a>
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;

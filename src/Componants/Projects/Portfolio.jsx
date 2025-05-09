import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.jpg";
import IMG2 from "../../assets/project2.jpg";
import { BiCodeAlt } from "react-icons/bi";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Project 1",
    description: "This is my first project showcasing my skills in web development.",
    github: "https://github.com",
    demo: "https://project1-demo.com",
    languages: "React, Node.js, MongoDB",
  },
  {
    id: 2,
    image: IMG2,
    title: "Project 2",
    description: "My second project demonstrating advanced UI/UX design principles.",
    github: "https://github.com",
    demo: "https://project2-demo.com",
    languages: "React, CSS3, Firebase",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {data.map(
          ({ id, image, title, github, demo, languages, description }) => {
            return (
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>
                  <BiCodeAlt className="mt-1" /> {languages}
                </p>
                <div className="portfolio__item-cta">
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
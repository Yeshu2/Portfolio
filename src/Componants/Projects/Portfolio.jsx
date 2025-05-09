import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.jpg";
import IMG2 from "../../assets/project2.png";
import { BiCodeAlt } from "react-icons/bi";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Project 1",
    description: "Yuvasarthi app is a platform for students to learn and grow.",
    github: "https://github.com",
    demo: "https://project1-demo.com",
    languages: "reactnative, firebase, css3",
  },
  {
    id: 2,
    image: IMG2,
    title: "Project 2",
    description: "My portfolio website to showcase my work and skills.",
    github: "https://github.com",
    demo: "https://project2-demo.com",
    languages: "Html5, Css3, JavaScript, Reactjs",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2 className="gradient-text">Projects</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, languages, description }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__header">
                <h3>{title}</h3>
              </div>
              <div className="portfolio__content">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <p>{description}</p>
                <div className="portfolio__languages">
                  <BiCodeAlt />
                  <span>{languages}</span>
                </div>
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
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
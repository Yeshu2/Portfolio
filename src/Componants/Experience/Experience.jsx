import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { AiFillCalendar } from "react-icons/ai";

const Experience = () => {
  return (
    <section id="experience">
      <h3>What Skills I Have</h3>
      <h2 className="gradient-text">My Experience</h2>

      <div className="container experience__container">
        {/* Frontend Development */}
        <div className="experience__frontend experience__column-6">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* Extra Skills */}
        <div className="experience__backend experience__column-6">
          <h3>Other Tools & Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Git & GitHub</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MS PowerPoint</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MS Word</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* Work Experience */}
        <div className="experience__job-full">
          <h3>Work Experience</h3>
          <div className="experience__content">
            <article className="experience__details experience__job-card">
              <div className="job-header">
                <h4>React Js Developer</h4>
                <small className="text-light">The Innovative Solutions</small>
              </div>
              <div className="job-description">
                <p className="text-light">
                  As a React.js developer at Innovative Solutions, I've been
                  working for one year. During this time, I've gained experience
                  in creating React components, managing state, handling events,
                  and building interactive user interfaces. I've collaborated
                  with other developers and worked with UI/UX designers to
                  deliver effective and user-friendly applications.
                </p>
              </div>
              <div className="job-footer ">
                <div className="job-skills">
                  <BiCodeAlt className="experience__details-icon" />
                  <span>React Js, React Bootstrap, GitHub</span>
                </div>
                <div className="job-duration">
                  <AiFillCalendar className="experience__details-icon" />
                  <span>Feb 2025 - Present</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

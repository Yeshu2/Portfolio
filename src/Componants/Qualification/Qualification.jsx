import React from "react";
import "./Qualification.css";
import { BiBuildings } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { TbBuildingBank } from "react-icons/tb";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";

const Qualification = () => {
  return (
    <section id="services">
      <h3>Where I have completed</h3>
      <h2>Qualification</h2>
      <div className="container services__container">

        {/* SSC */}
        <article className="service">
          <div className="service__head">
            <h3>SSC</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiBuildings className="service__list-icon" />
              <p>Rashtriya Vidyalaya, Chalisgaon</p>
            </li>
            <li>
              <GoLocation className="service__list-icon" />
              <p>Chalisgaon, Maharashtra</p>
            </li>
            <li>
              <TbBuildingBank className="service__list-icon" />
              <p>Secondary School Certificate</p>
            </li>
            <li>
              <AiTwotoneCalendar className="service__list-icon" />
              <p>March 2021</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Completed With 83%</p>
            </li>
          </ul>
        </article>

        {/* HSC */}
        <article className="service">
          <div className="service__head">
            <h3>HSC</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiBuildings className="service__list-icon" />
              <p>Rashtriya Vidyalaya, Chalisgaon</p>
            </li>
            <li>
              <GoLocation className="service__list-icon" />
              <p>Chalisgaon, Maharashtra</p>
            </li>
            <li>
              <TbBuildingBank className="service__list-icon" />
              <p>Kavayitri Bahinabai Chaudhari North Maharashtra University</p>
            </li>
            <li>
              <AiTwotoneCalendar className="service__list-icon" />
              <p>March 2023</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Completed With 60%</p>
            </li>
          </ul>
        </article>

        {/* Current Engineering */}
        <article className="service">
          <div className="service__head">
            <h3>BTech - Information Technology</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiBuildings className="service__list-icon" />
              <p>Aditya College of Engineering</p>
            </li>
            <li>
              <GoLocation className="service__list-icon" />
              <p>Beed, Maharashtra</p>
            </li>
            <li>
              <TbBuildingBank className="service__list-icon" />
              <p>
              Dr. Babasaheb Ambedkar Technological University</p>
            </li>
            <li>
              <AiTwotoneCalendar className="service__list-icon" />
              <p>Currently in 2nd Year - 4th Semester</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Ongoing</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  );
};

export default Qualification;

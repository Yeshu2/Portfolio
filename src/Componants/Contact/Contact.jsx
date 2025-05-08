import React, { useState } from "react";
import "./contact.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiWhatsappLine } from "react-icons/ri";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2 className="gradient-text">Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-icon-container">
              <HiOutlineMail className="contact__option-icon" />
            </div>
            <h4>Email</h4>
            <h5>Patilyash205@Outlook.com</h5>
            <a 
              href="mailto:Patilyash205@Outlook.com" 
              target="_blank" 
              rel="noreferrer"
              className="contact__link"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <div className="contact__option-icon-container">
              <FaLinkedinIn className="contact__option-icon" />
            </div>
            <h4>LinkedIn</h4>
            <h5>Yash Patil</h5>
            <a 
              href="https://www.linkedin.com/in/yash-patil-b3b25a364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " 
              target="_blank" 
              rel="noreferrer"
              className="contact__link"
            >
              Connect with me
            </a>
          </article>

          <article className="contact__option">
            <div className="contact__option-icon-container">
              <RiWhatsappLine className="contact__option-icon" />
            </div>
            <h4>WhatsApp</h4>
            <h5>+919767349076</h5>
            <a 
              href="https://wa.me/9767349076" 
              target="_blank" 
              rel="noreferrer"
              className="contact__link"
            >
              Chat with me
            </a>
          </article>
        </div>

        <form onSubmit={handleSubmit} className="contact__form">
          <div className="form__group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              required
              className="form__input"
            />
          </div>
          
          <div className="form__group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="form__input"
            />
          </div>
          
          <div className="form__group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="7"
              placeholder="Your Message"
              required
              className="form__textarea"
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
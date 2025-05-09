import React, { useState } from "react";
import "./contact.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiWhatsappLine } from "react-icons/ri";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactno: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      fullname: formData.name,
      email: formData.email,
      contactno: formData.contactno || "N/A",
      message: formData.message,
    };

    try {
      const response = await fetch("http://localhost:8001/api/contact/addmessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log("Server response:", data);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", contactno: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again later.");
    }
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
              href="https://www.linkedin.com/in/yash-patil-b3b25a364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
            <input
              type="text"
              name="contactno"
              value={formData.contactno}
              onChange={handleChange}
              placeholder="Your Contact Number"
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

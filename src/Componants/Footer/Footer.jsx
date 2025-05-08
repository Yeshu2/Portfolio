import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaGithub, FaGit } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
      Yash Patil
      </a>
    
      <div className="footer__socials">
        <a href="#" target="blank">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/its_official__yash?igsh=MWtxMnoyc2F1ZTB6dA==" target="blank">
          <FaInstagram />
        </a>
        <a href="#" target="blank">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/yash-patil-b3b25a364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="blank">
          <FaLinkedinIn />
        </a>
        <a href="#" target="blank">
          <FaYoutube />
        </a>
        <a href="#" target="blank">
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>Created With Love</small>
      </div>
    </footer>
  );
};

export default Footer;

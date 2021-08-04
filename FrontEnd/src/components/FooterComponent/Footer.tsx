import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './Footer.css'
import Instagram from '../../assets/icons/Instagram.png';
import LinkedIn from '../../assets/icons/LinkedIn.png';
import YouTube from '../../assets/icons/YouTube.png';


const Footer = () => {
  //Font Awesome Code <FontAwesomeIcon icon={faLinkedin} size="3x" />
  return (
    <div className = "main-footer">
        <div className = "row">
          <div className="social-container">
            <a
              href="https://www.youtube.com/channel/UCzBE60pGkJ5MlHauZLOYLGA"
              className="youtube social"
              >
              <img className = 'footer-icons' src = {YouTube} />
            </a>
            <a
              href="https://www.instagram.com/disclosedadvice"
              className="instagram social"
            >
              <img className = 'footer-icons' src = {Instagram} />
            </a>
            <a
              href="https://www.linkedin.com/company/disclosed-edu/"
              className="linkedin social"
              >
              <img className = 'footer-icons' src = {LinkedIn} />
            </a>           
          </div>
          <div className = "copyright" >
            <p>© 2021 Disclosed. All rights reserved.</p>
          </div>
          <div className = "contact">
            <p>609.250.2767 </p>
            <p>disclosed.advice@gmail.com</p>
          </div>
        </div>
    </div>
  );
}
export default Footer;
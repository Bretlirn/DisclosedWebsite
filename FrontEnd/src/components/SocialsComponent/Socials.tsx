import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './Socials.css'

const SocialsFooter = () => {
  return (
    <div className = "main-footer">
        <div className = "row">
          <div className="social-container">
            <a
              href="https://www.youtube.com/channel/UCzBE60pGkJ5MlHauZLOYLGA"
              className="youtube social"
              >
              <FontAwesomeIcon icon={faYoutube} size="3x" />
            </a>
            <a
              href="https://www.instagram.com/disclosedadvice"
              className="instagram social"
            >
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            <a
              href="https://www.linkedin.com/company/disclosed-edu/"
              className="linkedin social"
              >
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>           
          </div>
          <div className = "copyright" >
            <p>© 2021 Disclosed. All rights reserved.</p>
          </div>
          <div className = "contact">
            <h4>609.250.2767 </h4>
            <h4>disclosed.advice@gmail.com</h4>
          </div>
        </div>
    </div>
  );
}
export default SocialsFooter;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import './Socials.css'

function SocialsFooter() {
  return (
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
      <br></br>
      <br></br>

      <h7>609.250.2767</h7>
      <br></br>
      <h7>disclosed.advice@gmail.com</h7>
      <br></br>
      <br></br>
      <h5>© 2021 Disclosed. All rights reserved.</h5>
    </div>
  );
}
export default SocialsFooter; 
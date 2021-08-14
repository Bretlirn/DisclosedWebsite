import React from 'react';
import Email from '../EmailComponent/Email';
import LinkedInLogo from './LinkedInLogo.png';
import YouTubeLogo from './YouTubeLogo.png';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className = "contact-us-container">
                <div className="contact-us-component"> 
                    <div className = "contact-us-header">
                        <strong>C O N T A C T</strong>
                    </div>
                    <div className = "contact-us-header">
                        <strong>U S</strong>
                    </div>
                    <div className = "contact-us-bar-outer">
                            <strong><hr className = "contact-us-bar-inner"/></strong>
                    </div>
                    <div className = "contact-us-items">
                        (609) 250 - 2767
                    </div>
                    <div className = "contact-us-items">
                        <a href = "mailto: disclosed.advice@gmail.com" style = {{color: "#ffffff"}}>disclosed.advice@gmail.com</a>
                    </div>
                    <div className = "contact-us-icons">
                        <a href = "https://www.linkedin.com/company/disclosed-edu">
                            <img alt="LinkedIn" src={LinkedInLogo} width="50px" height="50px" />
                        </a>
                        <a href = "https://www.youtube.com/channel/UCzBE60pGkJ5MlHauZLOYLGA">
                            <img alt="LinkedIn" src={YouTubeLogo} width="auto" height="50px" />
                        </a>
                    </div>
                </div>
                <div className = "email-component"> 
                <div className = "contact-us-header">
                        <strong>T E L L</strong>
                    </div>
                    <div className = "contact-us-header">
                        <strong>U S</strong>
                    </div>
                    <div className = "contact-us-bar-outer">
                            <strong><hr className = "contact-us-bar-inner"/></strong>
                    </div>
                    <div className = "email-box">
                        <div style = {{width: '80%'}}>
                            <Email />
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default ContactUs;
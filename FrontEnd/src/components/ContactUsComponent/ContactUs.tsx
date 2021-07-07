import React from 'react';
import Email from '../EmailComponent/Email';
import LinkedInLogo from '../Pictures/LinkedInLogo.png';
import YouTubeLogo from '../Pictures/YouTubeLogo.png';
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
                <div style={{display: "flex", justifyContent: "center", flexDirection:"column", width:'50%', background: "#00aaaa"}}> 
                    <div style =  {{display: "flex", justifyContent: "center", width:'100%', fontSize: "2.5rem", fontFamily: "Futura", color: "#ffffff",marginBottom:"-2px"}}>
                        <strong>T E L L</strong>
                    </div>
                    <div style =  {{display: "flex", justifyContent: "center", width:'100%', fontSize: "2.5rem", fontFamily: "Futura", color: "#ffffff",marginBottom:"-2px"}}>
                        <strong>U S</strong>
                    </div>
                    <div style={{display: "flex", justifyContent: "center", width:'100%', fontFamily: "Futura", marginBottom:"10px"}}>
                            <strong><hr style = {{width: "200px", height: "10px", backgroundColor: "#ffffff"}}/></strong>
                    </div>
                    <div style={{display: "flex", justifyContent: "center", alignContent: "center", width:'100%'}}>
                        <div style = {{width: '80%'}}>
                            <Email />
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default ContactUs;
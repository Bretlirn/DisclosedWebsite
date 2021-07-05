import React from 'react';
import Email from '../components/EmailComponent/Email';
import LinkedInLogo from '../Pictures/LinkedInLogo.png';
import YouTubeLogo from '../Pictures/YouTubeLogo.png';


const ContactUs = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", width:'100%' , height: "600px"}}>
                <div style={{display: "flex", flexDirection:"column", justifyContent: "center", width:'50%', background: "#000000"}}> 
                    <div style =  {{display: "flex", justifyContent: "center", width:'100%', fontSize: "2.5rem", fontFamily: "Futura", color: "#ffffff",marginBottom:"-2px"}}>
                        <strong>C O N T A C T</strong>
                    </div>
                    <div style =  {{display: "flex", justifyContent: "center", width:'100%', fontSize: "2.5rem", fontFamily: "Futura", color: "#ffffff",marginBottom:"-2px"}}>
                        <strong>U S</strong>
                    </div>
                    <div style={{display: "flex", justifyContent: "center", width:'100%', fontFamily: "Futura", marginBottom:"10px"}}>
                            <strong><hr style = {{width: "200px", height: "10px", backgroundColor: "#ffffff"}}/></strong>
                    </div>
                    <div style =  {{display: "flex", justifyContent: "center", width:'100%', fontSize: "1.2rem", fontFamily: "Montserrat", color: "#ffffff", marginBottom: "-5px"}}>
                        (609) 250 - 2767
                    </div>
                    <div style =  {{display: "flex", justifyContent: "center", width:'100%', fontSize: "1.2rem", fontFamily: "Montserrat", marginBottom: "30px"}}>
                        <a href = "mailto: disclosed.advice@gmail.com">disclosed.advice@gmail.com</a>
                    </div>
                    <div style = {{display: "flex", justifyContent: "center", width:'100%'}}>
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
                    <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
                        <Email />
                    </div>
                </div>
            </div>
    );
}

export default ContactUs;
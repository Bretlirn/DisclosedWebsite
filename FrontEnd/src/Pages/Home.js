import React from 'react'
import Subscribe from '../components/SubscribeComponent/Subscribe'
import SpeakerPartners from '../components/SpeakerPartnersComponent/SpeakerPartners'
import Email from "../components/EmailComponent/Email";
import LinkedInLogo from '../Pictures/LinkedInLogo.png';
import YouTubeLogo from '../Pictures/YouTubeLogo.png';
function Home(){
    return(
        <div>
            <SpeakerPartners />
            <div style={{ display: "flex", justifyContent: "center", width:'100%' , height: "600px"}}>
                <div style={{display: "flex", flexDirection:"column", justifyContent: "center", width:'50%', background: "#000000"}}> 
                    <div style =  {{display: "flex", justifyContent: "center", width:'100%', fontSize: "2.5rem", fontFamily: "Montserrat", color: "#ffffff",marginBottom:"2px"}}>
                        <strong><u>Contact Us </u></strong>
                    </div>
                    <div style =  {{display: "flex", justifyContent: "center", width:'100%', fontSize: "1.2rem", fontFamily: "Montserrat", color: "#ffffff", marginBottom: "-5px"}}>
                        (609) 250 - 2767
                    </div>
                    <div style =  {{display: "flex", justifyContent: "center", width:'100%', fontSize: "1.2rem", fontFamily: "Montserrat", marginBottom: "30px"}}>
                        <a href = "mailto: disclosed.advice@gmail.com">disclosed.advice@gmail.com</a>
                    </div>
                    <div style = {{display: "flex", justifyContent: "center", width:'100%'}}>
                        <a href = "https://www.linkedin.com/company/disclosed-edu">
                            <img border="0" alt="LinkedIn" src={LinkedInLogo} width="50px" height="50px" />
                        </a>
                        <a href = "https://www.youtube.com/channel/UCzBE60pGkJ5MlHauZLOYLGA">
                            <img border="0" alt="LinkedIn" src={YouTubeLogo} width="auto" height="50px" />
                        </a>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "center", flexDirection:"column", width:'50%', background: "#ff0000"}}> 
                    <div style={{display: "flex", justifyContent: "center", width: "100%", fontSize: "2.5rem", fontFamily: "Montserrat", color: "#ffffff",marginTop:"50px", marginBottom:"10px"}}>
                        <strong><u>Tell Us</u></strong>
                    </div>
                    <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
                        <Email />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
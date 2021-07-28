import React from "react";
import diego from "../../assets/pictures/diego.jpg";
import dominic from "../../assets/pictures/dominic.jpg";
import walt from "../../assets/pictures/walt.jpg";
import './speakersection.css'

const Speaker = () => {
  return (
    <div className = "main-section">    
    <div className = "row2">
      <div>    
        <img className = "person" src = {diego}  alt ="diego"/>
        <div className = "personfont">
        <h2>Diego Granados</h2>
        <h3>Product Manager @ Microsoft</h3>
        </div>
        <div className = "font">
        <h3>"I love Disclosed!"</h3>
        </div>
      </div>
      <div>
        <img className = "person" src = {dominic}  alt ="dominic"/>
        <div className = "personfont">
        <h2>Dominic Antonacci</h2>
        <h3>Business Operations Manager @ Amazon</h3>
        </div>
        <div className = "font">
        <h3>"Such a great company wow"</h3>
        </div>
      </div>
      <div>
        <img className = "person" src = {walt} alt ="walt"/>
        <div className = "personfont">
        <h2>Walt Xie</h2>
        <h3>Talent Acquisition @ Facebook</h3>
        </div>
        <div className = "font">
        <h3>"Smart discussions"</h3>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Speaker;

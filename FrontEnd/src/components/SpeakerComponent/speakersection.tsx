import React from "react";
import diego from "../../assets/pictures/diego.jpg";
import dominic from "../../assets/pictures/dominic.jpg";
import walt from "../../assets/pictures/walt.jpg";
import './speakersection.css'

const Speaker = () => {
  return (
    <div className = "main-section">    
    <div className = "row2">
      <div className = "person1">    
        <img src = {diego}  alt ="diego" style ={{width: 200, height: 200, borderRadius: 100, overflow: "hidden", borderWidth: 6, borderColor: "red"}}/>
        <div className = "personfont">
        <h2>Diego Granados</h2>
        <h3>Product Manager @ Microsoft</h3>
        </div>
        <div className = "font">
        <h3>"I love Disclosed!"</h3>
        </div>
      </div>
      <div className = "person2">
        <img src = {dominic}  alt ="dominic" style ={{width: 200, height: 200, borderRadius: 100, overflow: "hidden", borderWidth: 6, borderColor: "red"}}/>
        <div className = "personfont">
        <h2>Dominic Antonacci</h2>
        <h3>Business Operations Manager @ Amazon</h3>
        </div>
        <div className = "font">
        <h3>"Such a great company wow"</h3>
        </div>
      </div>
      <div className = "person3" >
        <img src = {walt} alt ="walt" style ={{width: 200, height: 200, borderRadius: 100, overflow: "hidden", borderWidth: 6, borderColor: "red"}}/>
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

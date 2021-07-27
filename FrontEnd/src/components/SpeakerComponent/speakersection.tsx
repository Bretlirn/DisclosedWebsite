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
        <img  src = {diego}  alt ="diego" style ={{width: 200, height: 200, borderRadius: 100, overflow: "hidden", borderWidth: 6, borderColor: "red"}}/>
        <br></br>
        <br></br>
        <h1>Diego Granados</h1>
        <br></br>
        <h2>Product Manager @ Microsoft</h2>
      </div>
      <div className = "person2">
        <img src = {dominic}  alt ="dominic" style ={{width: 200, height: 200, borderRadius: 100, overflow: "hidden", borderWidth: 6, borderColor: "red"}}/>
        <br></br>
        <br></br>
        <h1>Dominic Antonacci</h1>
        <br></br>
        <h2>Business Operations Manager @ Amazon</h2>
      </div>
      <div className = "person3" >
        <img src = {walt} alt ="walt" style ={{width: 200, height: 200, borderRadius: 100, overflow: "hidden", borderWidth: 6, borderColor: "red"}}/>
        <br></br>
        <br></br>
        <h1>Walt Xie</h1>
        <br></br>
        <h2>Talent Acquisition @ Facebook</h2>
      </div>
    </div>
    </div>
  );
}
export default Speaker;
